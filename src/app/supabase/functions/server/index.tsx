import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js@2'
import * as kv from './kv_store.tsx'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowHeaders: ['*'],
  allowMethods: ['*'],
}))

app.use('*', logger(console.log))

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

// Initialize storage bucket for folder icons
async function initializeBucket() {
  const bucketName = 'make-154738d8-folder-icons'
  try {
    const { data: buckets } = await supabase.storage.listBuckets()
    const bucketExists = buckets?.some(bucket => bucket.name === bucketName)
    if (!bucketExists) {
      await supabase.storage.createBucket(bucketName, { public: false })
      console.log(`Created bucket: ${bucketName}`)
    }
  } catch (error) {
    console.log(`Error initializing bucket: ${error}`)
  }
}

// Initialize bucket on startup
initializeBucket()

// Function to extract metadata from URL
async function fetchUrlMetadata(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkBot/1.0)'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    
    const html = await response.text()
    const urlObj = new URL(url)
    
    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    let title = titleMatch ? titleMatch[1].trim() : urlObj.hostname
    
    // Clean up title
    title = title.replace(/\s+/g, ' ').trim()
    if (title.length > 200) {
      title = title.substring(0, 200) + '...'
    }
    
    // Extract favicon
    let favicon = `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`
    
    // Look for favicon in link tags
    const faviconMatches = [
      html.match(/<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*href=["']([^"']+)["']/i),
      html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["'](?:shortcut )?icon["']/i),
      html.match(/<link[^>]*rel=["']apple-touch-icon[^"']*["'][^>]*href=["']([^"']+)["']/i)
    ]
    
    for (const match of faviconMatches) {
      if (match && match[1]) {
        let faviconUrl = match[1]
        // Handle relative URLs
        if (faviconUrl.startsWith('//')) {
          faviconUrl = urlObj.protocol + faviconUrl
        } else if (faviconUrl.startsWith('/')) {
          faviconUrl = `${urlObj.protocol}//${urlObj.hostname}${faviconUrl}`
        } else if (!faviconUrl.startsWith('http')) {
          faviconUrl = `${urlObj.protocol}//${urlObj.hostname}/${faviconUrl}`
        }
        favicon = faviconUrl
        break
      }
    }
    
    return { title, favicon }
  } catch (error) {
    console.log(`Error fetching metadata for ${url}: ${error}`)
    const urlObj = new URL(url)
    return {
      title: urlObj.hostname,
      favicon: `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`
    }
  }
}

// Fetch metadata for a URL
app.post('/make-server-154738d8/fetch-metadata', async (c) => {
  try {
    const { url } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }

    // Basic URL validation
    try {
      new URL(url)
    } catch {
      return c.json({ error: 'Invalid URL format' }, 400)
    }

    const metadata = await fetchUrlMetadata(url)
    
    return c.json({ success: true, metadata })
  } catch (error) {
    console.log(`Error fetching metadata: ${error}`)
    return c.json({ error: 'Failed to fetch metadata' }, 500)
  }
})

// Create a new folder
app.post('/make-server-154738d8/folders', async (c) => {
  try {
    const { name, icon } = await c.req.json()
    
    if (!name || !name.trim()) {
      return c.json({ error: 'Folder name is required' }, 400)
    }

    // Get existing folders to determine next order
    const existingFolders = await kv.getByPrefix('folder:')
    const maxOrder = existingFolders.reduce((max, folder) => {
      return Math.max(max, folder.order || 0)
    }, -1)

    const folderId = crypto.randomUUID()
    const timestamp = new Date().toISOString()
    
    const folderData = {
      id: folderId,
      name: name.trim(),
      icon: icon || null, // emoji string or null for default
      order: maxOrder + 1, // Add new folder at the end
      createdAt: timestamp
    }

    await kv.set(`folder:${folderId}`, folderData)
    
    console.log(`Created folder: ${name} with order: ${folderData.order}`)
    return c.json({ success: true, folder: folderData })
  } catch (error) {
    console.log(`Error creating folder: ${error}`)
    return c.json({ error: 'Failed to create folder' }, 500)
  }
})

// Get all folders
app.get('/make-server-154738d8/folders', async (c) => {
  try {
    const folders = await kv.getByPrefix('folder:')
    
    // Sort by creation date (newest first)
    const sortedFolders = folders.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    
    return c.json({ folders: sortedFolders })
  } catch (error) {
    console.log(`Error fetching folders: ${error}`)
    return c.json({ error: 'Failed to fetch folders' }, 500)
  }
})

// Update a folder (name, icon, and/or order)
app.put('/make-server-154738d8/folders/:id', async (c) => {
  try {
    const folderId = c.req.param('id')
    const { name, icon, order } = await c.req.json()
    
    if (!folderId) {
      return c.json({ error: 'Folder ID is required' }, 400)
    }

    // Get existing folder
    const existingFolder = await kv.get(`folder:${folderId}`)
    if (!existingFolder) {
      return c.json({ error: 'Folder not found' }, 404)
    }

    // Update folder properties
    const updatedFolder = {
      ...existingFolder,
      ...(name !== undefined && { name: name.trim() }),
      ...(icon !== undefined && { icon: icon || null }),
      ...(order !== undefined && { order: Number(order) })
    }

    await kv.set(`folder:${folderId}`, updatedFolder)
    
    console.log(`Updated folder ${folderId}:`, { name, icon, order })
    return c.json({ success: true, folder: updatedFolder })
  } catch (error) {
    console.log(`Error updating folder: ${error}`)
    return c.json({ error: 'Failed to update folder' }, 500)
  }
})

// Delete a folder
app.delete('/make-server-154738d8/folders/:id', async (c) => {
  try {
    const folderId = c.req.param('id')
    
    if (!folderId) {
      return c.json({ error: 'Folder ID is required' }, 400)
    }

    // Get all links in this folder and move them to "Links"
    const allLinks = await kv.getByPrefix('link:')
    const linksInFolder = allLinks.filter(link => link.folderId === folderId)
    
    // Update links to remove folder association
    for (const link of linksInFolder) {
      const updatedLink = {
        ...link,
        folderId: null
      }
      await kv.set(`link:${link.id}`, updatedLink)
    }

    // Delete the folder
    await kv.del(`folder:${folderId}`)
    
    console.log(`Deleted folder: ${folderId}`)
    return c.json({ success: true })
  } catch (error) {
    console.log(`Error deleting folder: ${error}`)
    return c.json({ error: 'Failed to delete folder' }, 500)
  }
})

// Save a new link
app.post('/make-server-154738d8/links', async (c) => {
  try {
    const { url, title, folderId } = await c.req.json()
    
    if (!url) {
      return c.json({ error: 'URL is required' }, 400)
    }

    // Basic URL validation
    try {
      new URL(url)
    } catch {
      return c.json({ error: 'Invalid URL format' }, 400)
    }

    // Get existing links in the folder to determine next order
    const allLinks = await kv.getByPrefix('link:')
    const folderLinks = allLinks.filter(link => (link.folderId || null) === (folderId || null))
    const maxOrder = folderLinks.reduce((max, link) => {
      return Math.max(max, link.order || 0)
    }, -1)

    // Fetch metadata if no title provided
    let finalTitle = title
    let favicon = null
    
    if (!title) {
      const metadata = await fetchUrlMetadata(url)
      finalTitle = metadata.title
      favicon = metadata.favicon
    } else {
      // Still fetch favicon even if title is provided
      const metadata = await fetchUrlMetadata(url)
      favicon = metadata.favicon
    }

    // Generate a unique ID for the link
    const linkId = crypto.randomUUID()
    const timestamp = new Date().toISOString()
    
    const linkData = {
      id: linkId,
      url,
      title: finalTitle || url,
      favicon,
      folderId: folderId || null,
      order: maxOrder + 1, // Add new link at the end of the folder
      createdAt: timestamp
    }

    // Save to KV store with key pattern "link:{id}"
    await kv.set(`link:${linkId}`, linkData)
    
    console.log(`Saved link: ${url} with order: ${linkData.order}`)
    return c.json({ success: true, link: linkData })
  } catch (error) {
    console.log(`Error saving link: ${error}`)
    return c.json({ error: 'Failed to save link' }, 500)
  }
})

// Update a link (for moving between folders, updating title, or order)
app.put('/make-server-154738d8/links/:id', async (c) => {
  try {
    const linkId = c.req.param('id')
    const { folderId, title, order } = await c.req.json()
    
    if (!linkId) {
      return c.json({ error: 'Link ID is required' }, 400)
    }

    // Get existing link
    const existingLink = await kv.get(`link:${linkId}`)
    if (!existingLink) {
      return c.json({ error: 'Link not found' }, 404)
    }

    // Update link properties
    const updatedLink = {
      ...existingLink,
      ...(folderId !== undefined && { folderId: folderId || null }),
      ...(title !== undefined && { title: title.trim() || existingLink.title }),
      ...(order !== undefined && { order: Number(order) })
    }

    await kv.set(`link:${linkId}`, updatedLink)
    
    console.log(`Updated link ${linkId}:`, { folderId, title, order })
    return c.json({ success: true, link: updatedLink })
  } catch (error) {
    console.log(`Error updating link: ${error}`)
    return c.json({ error: 'Failed to update link' }, 500)
  }
})

// Get all links
app.get('/make-server-154738d8/links', async (c) => {
  try {
    // Get all links using prefix
    const links = await kv.getByPrefix('link:')
    
    // Sort by creation date (newest first)
    const sortedLinks = links.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    
    return c.json({ links: sortedLinks })
  } catch (error) {
    console.log(`Error fetching links: ${error}`)
    return c.json({ error: 'Failed to fetch links' }, 500)
  }
})

// Delete a link
app.delete('/make-server-154738d8/links/:id', async (c) => {
  try {
    const linkId = c.req.param('id')
    
    if (!linkId) {
      return c.json({ error: 'Link ID is required' }, 400)
    }

    await kv.del(`link:${linkId}`)
    
    console.log(`Deleted link: ${linkId}`)
    return c.json({ success: true })
  } catch (error) {
    console.log(`Error deleting link: ${error}`)
    return c.json({ error: 'Failed to delete link' }, 500)
  }
})

// Upload folder icon
app.post('/make-server-154738d8/upload-folder-icon', async (c) => {
  try {
    const formData = await c.req.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return c.json({ error: 'No file provided' }, 400)
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return c.json({ error: 'File must be an image' }, 400)
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return c.json({ error: 'File size must be less than 5MB' }, 400)
    }

    const bucketName = 'make-154738d8-folder-icons'
    const fileName = `${crypto.randomUUID()}.${file.name.split('.').pop()}`
    
    // Convert file to ArrayBuffer for upload
    const fileBuffer = await file.arrayBuffer()
    
    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, fileBuffer, {
        contentType: file.type,
        upsert: false
      })

    if (error) {
      console.log('Storage upload error:', error)
      return c.json({ error: 'Failed to upload file' }, 500)
    }

    // Create signed URL (valid for 1 year)
    const { data: signedUrlData, error: signedUrlError } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(fileName, 365 * 24 * 60 * 60) // 1 year in seconds

    if (signedUrlError) {
      console.log('Signed URL error:', signedUrlError)
      return c.json({ error: 'Failed to create access URL' }, 500)
    }

    console.log(`Uploaded folder icon: ${fileName}`)
    return c.json({ 
      success: true, 
      iconUrl: signedUrlData.signedUrl,
      fileName: data.path
    })
  } catch (error) {
    console.log(`Error uploading folder icon: ${error}`)
    return c.json({ error: 'Failed to upload folder icon' }, 500)
  }
})

Deno.serve(app.fetch)