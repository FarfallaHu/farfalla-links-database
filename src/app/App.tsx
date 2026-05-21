import React, { useState, useEffect, useCallback } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './components/ui/dialog'
import { Trash2, ExternalLink, Plus, Globe, Folder, Edit2, FolderPlus, MoreVertical, Minus, ChevronLeft, X, Lock } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './components/ui/dropdown-menu'
import { toast } from 'sonner@2.0.3'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import * as dataManager from './utils/dataManager'

// Farfalla logo as data URL (butterfly SVG)
const farfallaLogo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8IS0tIExlZnQgd2luZyAtLT4KICA8ZWxsaXBzZSBjeD0iMTIiIGN5PSIyMCIgcng9IjkiIHJ5PSIxNCIgZmlsbD0iIzhCNUNGNiIvPgogIDxlbGxpcHNlIGN4PSIxMCIgY3k9IjE4IiByeD0iNiIgcnk9IjEwIiBmaWxsPSIjQTc4QkZBIi8+CiAgPGVsbGlwc2UgY3g9IjkiIGN5PSIxNiIgcng9IjMiIHJ5PSI2IiBmaWxsPSIjQzRCNUZEIi8+CiAgCiAgPCEtLSBSaWdodCB3aW5nIC0tPgogIDxlbGxpcHNlIGN4PSIyOCIgY3k9IjIwIiByeD0iOSIgcnk9IjE0IiBmaWxsPSIjOEI1Q0Y2Ii8+CiAgPGVsbGlwc2UgY3g9IjMwIiBjeT0iMTgiIHJ4PSI2IiByeT0iMTAiIGZpbGw9IiNBNzhCRkEiLz4KICA8ZWxsaXBzZSBjeD0iMzEiIGN5PSIxNiIgcng9IjMiIHJ5PSI2IiBmaWxsPSIjQzRCNUZEIi8+CiAgCiAgPCEtLSBCb2R5IC0tPgogIDxyZWN0IHg9IjE4IiB5PSIxMCIgd2lkdGg9IjQiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSIjNkQyOEQ5Ii8+CiAgCiAgPCEtLSBBbnRlbm5hZSAtLT4KICA8cGF0aCBkPSJNMTguNSAxMCBRMTYgNSAxNCAyIiBzdHJva2U9IiM2RDI4RDkiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8cGF0aCBkPSJNMjEuNSAxMCBRMjQgNSAyNiAyIiBzdHJva2U9IiM2RDI4RDkiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8Y2lyY2xlIGN4PSIxNCIgY3k9IjIiIHI9IjEuNSIgZmlsbD0iIzhCNUNGNiIvPgogIDxjaXJjbGUgY3g9IjI2IiBjeT0iMiIgcj0iMS41IiBmaWxsPSIjOEI1Q0Y2Ii8+Cjwvc3ZnPg=='

interface Link {
  id: string
  url: string
  title: string
  favicon?: string
  folderId?: string | null
  createdAt: string
  order?: number
}

interface Folder {
  id: string
  name: string
  icon?: string | null
  createdAt: string
  order?: number
}

interface DraggableFolderProps {
  folderId: string
  children: React.ReactNode
  moveFolder: (draggedId: string, hoveredId: string) => void
  draggedFolder: string | null
  setDraggedFolder: (id: string | null) => void
}

const DraggableFolder = ({ folderId, children, moveFolder, draggedFolder, setDraggedFolder }: DraggableFolderProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'folder',
    item: { id: folderId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [{ isOver }, drop] = useDrop({
    accept: 'folder',
    drop: (item: { id: string }) => {
      if (item.id !== folderId) {
        moveFolder(item.id, folderId)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  // Track drag state changes using useEffect
  useEffect(() => {
    if (isDragging) {
      setDraggedFolder(folderId)
    } else {
      setDraggedFolder(null)
    }
  }, [isDragging, folderId, setDraggedFolder])

  return (
    <div 
      ref={(node) => drag(drop(node))}
      className={`
        ${isDragging ? 'opacity-50' : ''}
        ${isOver ? 'bg-blue-50 border-blue-200' : ''}
        ${draggedFolder && draggedFolder !== folderId ? 'transition-all duration-200' : ''}
      `}
    >
      {children}
    </div>
  )
}

interface DraggableLinkProps {
  linkId: string
  folderId: string
  children: React.ReactNode
  editingLink: string | null
  moveLinkWithinFolder: (draggedId: string, hoveredId: string, folderId: string) => void
  draggedLink: string | null
  setDraggedLink: (id: string | null) => void
}

const DraggableLink = ({ linkId, folderId, children, editingLink, moveLinkWithinFolder, draggedLink, setDraggedLink }: DraggableLinkProps) => {
  const isEditing = editingLink === linkId
  
  const [{ isDragging }, drag] = useDrag({
    type: 'link',
    item: { id: linkId, folderId },
    canDrag: !isEditing, // Disable drag when editing
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [{ isOver }, drop] = useDrop({
    accept: 'link',
    drop: (item: { id: string, folderId: string }) => {
      // Only allow reordering within the same folder and when not editing
      if (item.id !== linkId && item.folderId === folderId && !isEditing) {
        moveLinkWithinFolder(item.id, linkId, folderId)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  // Track drag state changes using useEffect
  useEffect(() => {
    if (isDragging) {
      setDraggedLink(linkId)
    } else {
      setDraggedLink(null)
    }
  }, [isDragging, linkId, setDraggedLink])

  return (
    <div 
      ref={(node) => isEditing ? node : drag(drop(node))} // Only apply drag/drop refs when not editing
      className={`
        ${isDragging ? 'opacity-50' : ''}
        ${isOver && !isEditing ? 'bg-blue-50 border-blue-200' : ''}
        ${draggedLink && draggedLink !== linkId ? 'transition-all duration-200' : ''}
      `}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [selectedFolderId, setSelectedFolderId] = useState<string>('uncategorized')
  const [links, setLinks] = useState<Link[]>([])
  const [folders, setFolders] = useState<Folder[]>([])
  const [loading, setLoading] = useState(false)
  const [fetchingLinks, setFetchingLinks] = useState(true)
  const [newFolderName, setNewFolderName] = useState('')
  const [isCreatingFolder, setIsCreatingFolder] = useState(false)
  const [isNewFolderDialogOpen, setIsNewFolderDialogOpen] = useState(false)
  const [editingFolder, setEditingFolder] = useState<string | null>(null)
  const [editFolderName, setEditFolderName] = useState('')
  const [editingLink, setEditingLink] = useState<string | null>(null)
  const [editLinkTitle, setEditLinkTitle] = useState('')
  const [editingFolderIcon, setEditingFolderIcon] = useState<string | null>(null)
  const [newFolderIcon, setNewFolderIcon] = useState('')
  const [emojiSearch, setEmojiSearch] = useState('')
  const [draggedFolder, setDraggedFolder] = useState<string | null>(null)
  const [draggedLink, setDraggedLink] = useState<string | null>(null)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  // Security check dialog state
  const [securityCheck, setSecurityCheck] = useState<{
    isOpen: boolean
    action: 'delete' | 'edit' | null
    itemType: 'link' | 'folder'
    itemId: string
    itemName: string
    onConfirm: () => void
  }>({
    isOpen: false,
    action: null,
    itemType: 'link',
    itemId: '',
    itemName: '',
    onConfirm: () => {}
  })
  const [securityPassword, setSecurityPassword] = useState('')

  // Set title and favicon immediately and on mount
  useEffect(() => {
    // Set page title immediately
    document.title = "Farfalla's Links Database"
    
    const setFavicon = () => {
      // Remove existing favicon links
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
      existingFavicons.forEach(favicon => favicon.remove())

      // Add new favicon
      const favicon = document.createElement('link')
      favicon.rel = 'icon'
      favicon.type = 'image/png'
      favicon.href = farfallaLogo
      document.head.appendChild(favicon)

      // Also add apple-touch-icon for mobile
      const appleFavicon = document.createElement('link')
      appleFavicon.rel = 'apple-touch-icon'
      appleFavicon.href = farfallaLogo
      document.head.appendChild(appleFavicon)
    }

    setFavicon()
  }, [])

  // Also set title immediately when component mounts
  useEffect(() => {
    document.title = "Farfalla's Links Database"
  }, [])

  // Scroll to folder function
  const scrollToFolder = (folderId: string) => {
    const element = document.getElementById(`folder-${folderId}`)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
    }
    // Close mobile nav after navigation
    setIsMobileNavOpen(false)
  }

  // Scroll to Add New Link form
  const scrollToAddLink = () => {
    const element = document.getElementById('add-new-link')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
    }
    // Close mobile nav after navigation
    setIsMobileNavOpen(false)
  }

  // Handle security check
  const handleSecurityCheck = (action: 'delete' | 'edit', itemType: 'link' | 'folder', itemId: string, itemName: string, onConfirm: () => void) => {
    setSecurityCheck({
      isOpen: true,
      action,
      itemType,
      itemId,
      itemName,
      onConfirm
    })
    setSecurityPassword('')
  }

  // Close security check dialog
  const closeSecurityCheck = () => {
    setSecurityCheck({
      isOpen: false,
      action: null,
      itemType: 'link',
      itemId: '',
      itemName: '',
      onConfirm: () => {}
    })
    setSecurityPassword('')
  }

  // Execute action with password verification
  const executeSecurityAction = () => {
    if (securityPassword !== 'Hudie1022') {
      toast.error('Incorrect password.')
      return
    }

    securityCheck.onConfirm()
    closeSecurityCheck()
  }

  // Event handlers to prevent drag when editing
  const preventDragEvents = (e: React.MouseEvent | React.DragEvent) => {
    e.stopPropagation()
  }

  const preventDragStart = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }


  // Load links and folders on component mount
  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    try {
      setFetchingLinks(true)
      const allLinks = dataManager.getAllLinks()
      const allFolders = dataManager.getAllFolders()
      setLinks(allLinks)
      setFolders(allFolders)
    } catch (error) {
      console.error('Error loading data:', error)
      toast.error('Failed to load data')
    } finally {
      setFetchingLinks(false)
    }
  }

  const createFolder = () => {
    if (!newFolderName.trim()) {
      toast.error('Please enter a folder name')
      return
    }

    try {
      setIsCreatingFolder(true)
      const newFolder = dataManager.addFolder({
        name: newFolderName.trim(),
        icon: null,
        order: folders.length
      })
      setFolders(prev => [newFolder, ...prev])
      setSelectedFolderId(newFolder.id)
      setNewFolderName('')
      setIsNewFolderDialogOpen(false)
      toast.success('Folder created successfully!')
    } catch (error) {
      console.error('Error creating folder:', error)
      toast.error('Failed to create folder')
    } finally {
      setIsCreatingFolder(false)
    }
  }

  const renameFolder = (folderId: string, newName: string) => {
    if (!newName.trim()) {
      toast.error('Please enter a folder name')
      return
    }

    try {
      const updatedFolder = dataManager.updateFolder(folderId, { name: newName.trim() })
      if (updatedFolder) {
        loadData() // Reload all data to reflect changes
        setEditingFolder(null)
        setEditFolderName('')
        toast.success('Folder renamed successfully!')
      }
    } catch (error) {
      console.error('Error renaming folder:', error)
      toast.error('Failed to rename folder')
    }
  }

  const deleteFolder = (folderId: string) => {
    try {
      dataManager.deleteFolder(folderId)
      loadData() // Reload all data
      toast.success('Folder deleted successfully!')
    } catch (error) {
      console.error('Error deleting folder:', error)
      toast.error('Failed to delete folder')
    }
  }

  const saveLink = () => {
    if (!url.trim()) {
      toast.error('Please enter a URL')
      return
    }

    try {
      setLoading(true)

      // Extract favicon from URL
      let faviconUrl = ''
      try {
        const urlObj = new URL(url.trim())
        faviconUrl = `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`
      } catch (e) {
        console.error('Invalid URL for favicon extraction')
      }

      const newLink = dataManager.addLink({
        url: url.trim(),
        title: title.trim() || url.trim(),
        favicon: faviconUrl,
        folderId: selectedFolderId && selectedFolderId !== 'uncategorized' ? selectedFolderId : null,
        order: links.filter(l => (l.folderId || 'uncategorized') === selectedFolderId).length
      })

      setLinks(prev => [newLink, ...prev])
      setUrl('')
      setTitle('')
      setSelectedFolderId('uncategorized')
      toast.success('Link saved successfully!')
    } catch (error) {
      console.error('Error saving link:', error)
      toast.error('Failed to save link')
    } finally {
      setLoading(false)
    }
  }

  const moveLink = (linkId: string, newFolderId: string | null) => {
    try {
      const updatedLink = dataManager.updateLink(linkId, { folderId: newFolderId })
      if (updatedLink) {
        loadData()
        toast.success('Link moved successfully!')
      }
    } catch (error) {
      console.error('Error moving link:', error)
      toast.error('Failed to move link')
    }
  }

  const updateLinkTitle = (linkId: string, newTitle: string) => {
    if (!newTitle.trim()) {
      toast.error('Please enter a title')
      return
    }

    try {
      const updatedLink = dataManager.updateLink(linkId, { title: newTitle.trim() })
      if (updatedLink) {
        loadData()
        setEditingLink(null)
        setEditLinkTitle('')
        toast.success('Link title updated successfully!')
      }
    } catch (error) {
      console.error('Error updating link title:', error)
      toast.error('Failed to update link title')
    }
  }

  const updateFolderIcon = (folderId: string, newIcon: string) => {
    try {
      const updatedFolder = dataManager.updateFolder(folderId, { icon: newIcon || null })
      if (updatedFolder) {
        loadData()
        setEditingFolderIcon(null)
        setNewFolderIcon('')
        setEmojiSearch('')
        toast.success('Folder icon updated successfully!')
      }
    } catch (error) {
      console.error('Error updating folder icon:', error)
      toast.error('Failed to update folder icon')
    }
  }

  const updateFolderOrder = (folderId: string, newOrder: number) => {
    try {
      const updatedFolder = dataManager.updateFolder(folderId, { order: newOrder })
      return updatedFolder
    } catch (error) {
      console.error('Error updating folder order:', error)
      toast.error('Failed to update folder order')
      throw error
    }
  }

  const updateLinkOrder = (linkId: string, newOrder: number) => {
    try {
      const updatedLink = dataManager.updateLink(linkId, { order: newOrder })
      return updatedLink
    } catch (error) {
      console.error('Error updating link order:', error)
      toast.error('Failed to update link order')
      throw error
    }
  }

  const moveFolder = (draggedId: string, hoveredId: string) => {
    try {
      const draggedIndex = sortedFolders.findIndex(f => f.id === draggedId)
      const hoveredIndex = sortedFolders.findIndex(f => f.id === hoveredId)

      if (draggedIndex === -1 || hoveredIndex === -1) return

      const newFolders = [...sortedFolders]
      const [draggedFolder] = newFolders.splice(draggedIndex, 1)
      newFolders.splice(hoveredIndex, 0, draggedFolder)

      const updates = newFolders.map((folder, index) => ({
        id: folder.id,
        order: index
      }))

      dataManager.updateFoldersOrder(updates)
      loadData()
    } catch (error) {
      console.error('Error moving folder:', error)
      loadData()
    }
  }

  const moveLinkWithinFolder = (draggedId: string, hoveredId: string, folderId: string) => {
    try {
      const folderLinks = getSortedLinksForFolder(folderId)
      const draggedIndex = folderLinks.findIndex(l => l.id === draggedId)
      const hoveredIndex = folderLinks.findIndex(l => l.id === hoveredId)

      if (draggedIndex === -1 || hoveredIndex === -1) return

      const newLinks = [...folderLinks]
      const [draggedLink] = newLinks.splice(draggedIndex, 1)
      newLinks.splice(hoveredIndex, 0, draggedLink)

      const updates = newLinks.map((link, index) => ({
        id: link.id,
        order: index
      }))

      dataManager.updateLinksOrder(updates)
      loadData()
    } catch (error) {
      console.error('Error moving link:', error)
      loadData()
    }
  }

  const deleteLink = (linkId: string) => {
    try {
      dataManager.deleteLink(linkId)
      loadData()
      toast.success('Link deleted successfully!')
    } catch (error) {
      console.error('Error deleting link:', error)
      toast.error('Failed to delete link')
    }
  }

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      saveLink()
    }
  }

  // Group links by folder
  const linksByFolder = links.reduce((acc, link) => {
    const folderId = link.folderId || 'uncategorized'
    if (!acc[folderId]) {
      acc[folderId] = []
    }
    acc[folderId].push(link)
    return acc
  }, {} as Record<string, Link[]>)

  const getFolderName = (folderId: string) => {
    if (folderId === 'uncategorized') return 'Links'
    const folder = folders.find(f => f.id === folderId)
    return folder?.name || 'Unknown Folder'
  }

  const getFolderIcon = (folderId: string) => {
    if (folderId === 'uncategorized') return <Folder className="w-5 h-5" />
    const folder = folders.find(f => f.id === folderId)
    if (folder?.icon) {
      // Check if it's a URL (uploaded image) or emoji
      if (folder.icon.startsWith('http')) {
        return <img src={folder.icon} alt="" className="w-5 h-5 object-contain" />
      } else {
        // It's an emoji
        return <span className="text-lg leading-none">{folder.icon}</span>
      }
    }
    return <Folder className="w-5 h-5" />
  }

  // Emoji options for folders with search keywords
  const folderEmojis = [
    { emoji: '📁', keywords: ['folder', 'file', 'document', 'storage'] },
    { emoji: '📂', keywords: ['folder', 'open', 'file', 'document'] },
    { emoji: '📋', keywords: ['clipboard', 'list', 'todo', 'notes'] },
    { emoji: '📊', keywords: ['chart', 'graph', 'data', 'statistics', 'analytics'] },
    { emoji: '📈', keywords: ['chart', 'growth', 'trending', 'up', 'increase'] },
    { emoji: '📉', keywords: ['chart', 'decline', 'down', 'decrease'] },
    { emoji: '📝', keywords: ['note', 'write', 'memo', 'text', 'document'] },
    { emoji: '📄', keywords: ['document', 'page', 'file', 'paper'] },
    { emoji: '📃', keywords: ['document', 'page', 'file', 'text'] },
    { emoji: '📚', keywords: ['books', 'library', 'education', 'study', 'learning'] },
    { emoji: '📖', keywords: ['book', 'read', 'education', 'study'] },
    { emoji: '📘', keywords: ['book', 'blue', 'education', 'study'] },
    { emoji: '📙', keywords: ['book', 'orange', 'education', 'study'] },
    { emoji: '📗', keywords: ['book', 'green', 'education', 'study'] },
    { emoji: '📕', keywords: ['book', 'red', 'education', 'study'] },
    { emoji: '📓', keywords: ['notebook', 'notes', 'write', 'journal'] },
    { emoji: '📒', keywords: ['notebook', 'notes', 'write', 'journal'] },
    { emoji: '🗂️', keywords: ['folder', 'tabs', 'organize', 'files'] },
    { emoji: '🗃️', keywords: ['box', 'storage', 'archive', 'files'] },
    { emoji: '💼', keywords: ['briefcase', 'work', 'business', 'professional'] },
    { emoji: '👔', keywords: ['shirt', 'business', 'work', 'professional', 'formal'] },
    { emoji: '🏢', keywords: ['building', 'office', 'work', 'business', 'corporate'] },
    { emoji: '🏠', keywords: ['house', 'home', 'personal', 'family'] },
    { emoji: '🏡', keywords: ['house', 'home', 'personal', 'garden'] },
    { emoji: '❤️', keywords: ['heart', 'love', 'favorite', 'important', 'red'] },
    { emoji: '💚', keywords: ['heart', 'love', 'green', 'nature'] },
    { emoji: '💙', keywords: ['heart', 'love', 'blue', 'calm'] },
    { emoji: '💜', keywords: ['heart', 'love', 'purple', 'creative'] },
    { emoji: '🧡', keywords: ['heart', 'love', 'orange', 'warm'] },
    { emoji: '⭐', keywords: ['star', 'favorite', 'important', 'special'] },
    { emoji: '🌟', keywords: ['star', 'sparkle', 'special', 'bright'] },
    { emoji: '✨', keywords: ['sparkle', 'magic', 'special', 'shine'] },
    { emoji: '💎', keywords: ['diamond', 'precious', 'valuable', 'gem'] },
    { emoji: '🔥', keywords: ['fire', 'hot', 'trending', 'popular'] },
    { emoji: '⚡', keywords: ['lightning', 'fast', 'energy', 'power'] },
    { emoji: '🎯', keywords: ['target', 'goal', 'focus', 'aim'] },
    { emoji: '🚀', keywords: ['rocket', 'fast', 'launch', 'space', 'startup'] },
    { emoji: '🏆', keywords: ['trophy', 'winner', 'achievement', 'success'] },
    { emoji: '🎁', keywords: ['gift', 'present', 'surprise', 'special'] },
    { emoji: '🌍', keywords: ['world', 'earth', 'global', 'travel'] },
    { emoji: '🎨', keywords: ['art', 'creative', 'design', 'paint'] },
    { emoji: '🎵', keywords: ['music', 'note', 'song', 'audio'] },
    { emoji: '📷', keywords: ['camera', 'photo', 'picture', 'image'] },
    { emoji: '🍎', keywords: ['apple', 'fruit', 'food', 'health'] },
    { emoji: '☕', keywords: ['coffee', 'drink', 'cafe', 'morning'] },
    { emoji: '🚗', keywords: ['car', 'vehicle', 'transport', 'travel'] },
    { emoji: '✈️', keywords: ['plane', 'travel', 'flight', 'vacation'] },
    { emoji: '🏖️', keywords: ['beach', 'vacation', 'travel', 'relaxation'] },
    { emoji: '🎮', keywords: ['game', 'gaming', 'controller', 'entertainment'] },
    { emoji: '💻', keywords: ['computer', 'laptop', 'tech', 'work'] },
    { emoji: '📱', keywords: ['phone', 'mobile', 'device', 'tech'] },
    { emoji: '🔒', keywords: ['lock', 'secure', 'private', 'password'] },
    { emoji: '🔓', keywords: ['unlock', 'open', 'access', 'public'] },
    { emoji: '🛠️', keywords: ['tools', 'repair', 'fix', 'maintenance'] },
    { emoji: '⚙️', keywords: ['gear', 'settings', 'configure', 'system'] },
    { emoji: '🔍', keywords: ['search', 'find', 'magnify', 'look'] },
    { emoji: '📞', keywords: ['phone', 'call', 'contact', 'communication'] },
    { emoji: '📧', keywords: ['email', 'mail', 'message', 'communication'] },
    { emoji: '💰', keywords: ['money', 'finance', 'cash', 'wealth'] },
    { emoji: '🎪', keywords: ['circus', 'entertainment', 'fun', 'show'] },
    { emoji: '🌈', keywords: ['rainbow', 'colorful', 'bright', 'joy'] }
  ]

  // Filter emojis based on search
  const filteredEmojis = folderEmojis.filter(item => {
    if (!emojiSearch.trim()) return true
    const searchTerm = emojiSearch.toLowerCase()
    return item.keywords.some(keyword => keyword.includes(searchTerm)) ||
           item.emoji.includes(searchTerm)
  })

  // Sort folders by order, then by creation date
  const sortedFolders = [...folders].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order
    }
    if (a.order !== undefined) return -1
    if (b.order !== undefined) return 1
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  // Helper function to get sorted links for a folder
  const getSortedLinksForFolder = (folderId: string) => {
    const folderLinks = linksByFolder[folderId] || []
    return [...folderLinks].sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order
      }
      if (a.order !== undefined) return -1
      if (b.order !== undefined) return 1
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
  }



  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img 
                src={farfallaLogo} 
                alt="Farfalla Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
              />
              <h1 className="text-2xl sm:text-3xl">Farfalla's Links Database</h1>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">This is a link database made by Farfalla Hu for her personal use only.</p>
          </div>

          {/* Add Link Form */}
          <Card className="mb-6 sm:mb-8" id="add-new-link">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Plus className="w-5 h-5" />
                Add New Link
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="url" className="block text-sm mb-2">
                  URL *
                </label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm mb-2">
                  Title (optional)
                </label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter a title for this link"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="folder" className="block text-sm mb-2">
                  Folder (optional)
                </label>
                <div className="flex gap-2">
                  <Select value={selectedFolderId} onValueChange={setSelectedFolderId}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select a folder" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uncategorized">Links</SelectItem>
                      {sortedFolders.map((folder) => (
                        <SelectItem key={folder.id} value={folder.id}>
                          {folder.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Dialog 
                    open={isNewFolderDialogOpen} 
                    onOpenChange={(open) => {
                      setIsNewFolderDialogOpen(open)
                      if (!open) {
                        setNewFolderName('') // Clear the input when dialog closes
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon">
                        <FolderPlus className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create New Folder</DialogTitle>
                        <DialogDescription className="sr-only">
                          Enter a name for the new folder you want to create.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input
                          placeholder="Enter folder name"
                          value={newFolderName}
                          onChange={(e) => setNewFolderName(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && !isCreatingFolder && newFolderName.trim() && createFolder()}
                          autoFocus
                        />
                        <Button 
                          onClick={createFolder} 
                          disabled={isCreatingFolder || !newFolderName.trim()}
                          className="w-full"
                        >
                          {isCreatingFolder ? 'Creating...' : 'Create Folder'}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <Button 
                onClick={saveLink} 
                disabled={loading || !url.trim()}
                className="w-full"
              >
                {loading ? 'Saving...' : 'Save Link'}
              </Button>
            </CardContent>
          </Card>

          {/* Links List by Folder */}
          <div className="space-y-4 sm:space-y-6">
            {fetchingLinks ? (
              <Card>
                <CardContent className="text-center py-8 text-gray-500">
                  Loading links...
                </CardContent>
              </Card>
            ) : Object.keys(linksByFolder).length === 0 ? (
              <Card>
                <CardContent className="text-center py-8 text-gray-500">
                  No links saved yet. Add your first link above!
                </CardContent>
              </Card>
            ) : (
              // Use sorted folders for display order, plus uncategorized
              (() => {
                const foldersToShow = ['uncategorized', ...sortedFolders.map(f => f.id)]
                  .filter(folderId => linksByFolder[folderId] && linksByFolder[folderId].length > 0)
                
                return foldersToShow.map((folderId) => {
                  const folderLinks = getSortedLinksForFolder(folderId)
                  
                  if (folderId === 'uncategorized') {
                    return (
                      <Card key={folderId} id="folder-uncategorized">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {getFolderIcon(folderId)}
                              <span className="text-lg sm:text-xl">
                                {getFolderName(folderId)} ({folderLinks.length})
                              </span>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {folderLinks.map((link) => (
                              <DraggableLink 
                                key={link.id} 
                                linkId={link.id} 
                                folderId={folderId}
                                editingLink={editingLink}
                                moveLinkWithinFolder={moveLinkWithinFolder}
                                draggedLink={draggedLink}
                                setDraggedLink={setDraggedLink}
                              >
                                {/* Mobile-optimized layout */}
                                <div className={`border rounded-lg hover:bg-gray-50 transition-colors ${editingLink === link.id ? 'cursor-default' : 'cursor-move'}`}>
                                  {/* Desktop layout */}
                                  <div className="hidden sm:flex items-center justify-between p-4">
                                    <div className="flex items-start gap-3 flex-1 min-w-0">
                                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                                        {link.favicon ? (
                                          <img 
                                            src={link.favicon} 
                                            alt="" 
                                            className="w-4 h-4 object-contain"
                                            onError={(e) => {
                                              e.currentTarget.style.display = 'none'
                                              e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                            }}
                                          />
                                        ) : null}
                                        <Globe className={`w-4 h-4 text-gray-400 ${link.favicon ? 'hidden' : ''}`} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        {editingLink === link.id ? (
                                          <div className="flex items-center gap-2 mb-2">
                                            <Input
                                              value={editLinkTitle}
                                              onChange={(e) => setEditLinkTitle(e.target.value)}
                                              onKeyPress={(e) => {
                                                if (e.key === 'Enter' && editLinkTitle.trim()) {
                                                  updateLinkTitle(link.id, editLinkTitle)
                                                }
                                                if (e.key === 'Escape') {
                                                  setEditingLink(null)
                                                  setEditLinkTitle('')
                                                }
                                              }}
                                              onMouseDown={preventDragEvents}
                                              onDragStart={preventDragStart}
                                              className="flex-1"
                                              autoFocus
                                              placeholder="Enter link title"
                                            />
                                            <Button 
                                              size="sm" 
                                              onClick={() => updateLinkTitle(link.id, editLinkTitle)}
                                              disabled={!editLinkTitle.trim()}
                                            >
                                              Save
                                            </Button>
                                            <Button 
                                              size="sm" 
                                              variant="outline"
                                              onClick={() => {
                                                setEditingLink(null)
                                                setEditLinkTitle('')
                                              }}
                                            >
                                              Cancel
                                            </Button>
                                          </div>
                                        ) : (
                                          <h3 
                                            className="truncate pr-4 cursor-pointer hover:text-blue-600"
                                            onDoubleClick={() => {
                                              console.log('Double-click edit title for link:', link.id)
                                              handleSecurityCheck('edit', 'link', link.id, link.title, () => {
                                                setEditingLink(link.id)
                                                setEditLinkTitle(link.title)
                                              })
                                            }}
                                            title="Double-click to edit title"
                                          >
                                            {link.title}
                                          </h3>
                                        )}
                                        <p className="text-sm text-gray-500 truncate pr-4">{link.url}</p>
                                        <p className="text-xs text-gray-400 mt-1">
                                          Saved on {new Date(link.createdAt).toLocaleDateString()}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                      <Select 
                                        value={link.folderId || 'uncategorized'}
                                        onValueChange={(newFolderId) => moveLink(link.id, newFolderId === 'uncategorized' ? null : newFolderId)}
                                      >
                                        <SelectTrigger className="w-32">
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="uncategorized">Links</SelectItem>
                                          {sortedFolders.map((folder) => (
                                            <SelectItem key={folder.id} value={folder.id}>
                                              {folder.name}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={() => openLink(link.url)}
                                        title="Open link in new tab"
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                      </Button>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button variant="outline" size="sm" title="More options">
                                            <MoreVertical className="w-4 h-4" />
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuItem
                                            onClick={() => {
                                              console.log('Edit title clicked for link:', link.id)
                                              handleSecurityCheck('edit', 'link', link.id, link.title, () => {
                                                setEditingLink(link.id)
                                                setEditLinkTitle(link.title)
                                              })
                                            }}
                                          >
                                            <Edit2 className="w-4 h-4 mr-2" />
                                            Edit Title
                                          </DropdownMenuItem>
                                          <DropdownMenuItem
                                            onClick={() => {
                                              handleSecurityCheck('delete', 'link', link.id, link.title, () => deleteLink(link.id))
                                            }}
                                            className="text-red-600"
                                          >
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Delete
                                          </DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </div>
                                  </div>

                                  {/* Mobile layout */}
                                  <div className="sm:hidden p-3">
                                    <div className="flex items-start gap-3 mb-3">
                                      <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center mt-0.5">
                                        {link.favicon ? (
                                          <img 
                                            src={link.favicon} 
                                            alt="" 
                                            className="w-4 h-4 object-contain"
                                            onError={(e) => {
                                              e.currentTarget.style.display = 'none'
                                              e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                            }}
                                          />
                                        ) : null}
                                        <Globe className={`w-4 h-4 text-gray-400 ${link.favicon ? 'hidden' : ''}`} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        {editingLink === link.id ? (
                                          <div className="space-y-2">
                                            <Input
                                              value={editLinkTitle}
                                              onChange={(e) => setEditLinkTitle(e.target.value)}
                                              onKeyPress={(e) => {
                                                if (e.key === 'Enter' && editLinkTitle.trim()) {
                                                  updateLinkTitle(link.id, editLinkTitle)
                                                }
                                                if (e.key === 'Escape') {
                                                  setEditingLink(null)
                                                  setEditLinkTitle('')
                                                }
                                              }}
                                              onMouseDown={preventDragEvents}
                                              onDragStart={preventDragStart}
                                              className="w-full"
                                              autoFocus
                                              placeholder="Enter link title"
                                            />
                                            <div className="flex gap-2">
                                              <Button 
                                                size="sm" 
                                                onClick={() => updateLinkTitle(link.id, editLinkTitle)}
                                                disabled={!editLinkTitle.trim()}
                                              >
                                                Save
                                              </Button>
                                              <Button 
                                                size="sm" 
                                                variant="outline"
                                                onClick={() => {
                                                  setEditingLink(null)
                                                  setEditLinkTitle('')
                                                }}
                                              >
                                                Cancel
                                              </Button>
                                            </div>
                                          </div>
                                        ) : (
                                          <>
                                            <h3 
                                              className="font-medium leading-tight mb-1 cursor-pointer hover:text-blue-600 break-words"
                                              onDoubleClick={() => {
                                                console.log('Double-click edit title for link:', link.id)
                                                handleSecurityCheck('edit', 'link', link.id, link.title, () => {
                                                  setEditingLink(link.id)
                                                  setEditLinkTitle(link.title)
                                                })
                                              }}
                                              title="Double-click to edit title"
                                            >
                                              {link.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 break-words mb-1">{link.url}</p>
                                            <p className="text-xs text-gray-400">
                                              Saved on {new Date(link.createdAt).toLocaleDateString()}
                                            </p>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                    
                                    {/* Mobile actions */}
                                    <div className="flex items-center justify-between gap-2">
                                      <Select 
                                        value={link.folderId || 'uncategorized'}
                                        onValueChange={(newFolderId) => moveLink(link.id, newFolderId === 'uncategorized' ? null : newFolderId)}
                                      >
                                        <SelectTrigger className="flex-1 text-sm">
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="uncategorized">Links</SelectItem>
                                          {sortedFolders.map((folder) => (
                                            <SelectItem key={folder.id} value={folder.id}>
                                              {folder.name}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={() => openLink(link.url)}
                                        title="Open link"
                                        className="flex-shrink-0"
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                      </Button>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button variant="outline" size="sm" className="flex-shrink-0">
                                            <MoreVertical className="w-4 h-4" />
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuItem
                                            onClick={() => {
                                              console.log('Edit title clicked for link:', link.id)
                                              handleSecurityCheck('edit', 'link', link.id, link.title, () => {
                                                setEditingLink(link.id)
                                                setEditLinkTitle(link.title)
                                              })
                                            }}
                                          >
                                            <Edit2 className="w-4 h-4 mr-2" />
                                            Edit Title
                                          </DropdownMenuItem>
                                          <DropdownMenuItem
                                            onClick={() => {
                                              handleSecurityCheck('delete', 'link', link.id, link.title, () => deleteLink(link.id))
                                            }}
                                            className="text-red-600"
                                          >
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Delete
                                          </DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </div>
                                  </div>
                                </div>
                              </DraggableLink>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  } else {
                    return (
                      <DraggableFolder 
                        key={folderId} 
                        folderId={folderId}
                        moveFolder={moveFolder}
                        draggedFolder={draggedFolder}
                        setDraggedFolder={setDraggedFolder}
                      >
                        <Card className="cursor-move" id={`folder-${folderId}`}>
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {editingFolderIcon === folderId ? (
                                  <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2 border rounded-lg p-2">
                                      <div className="flex flex-col gap-2">
                                        <Input
                                          placeholder="Search emojis..."
                                          value={emojiSearch}
                                          onChange={(e) => setEmojiSearch(e.target.value)}
                                          className="w-48 h-8"
                                          autoFocus
                                        />
                                        <div className="grid grid-cols-8 gap-1 max-h-32 overflow-y-auto">
                                          {filteredEmojis.length > 0 ? (
                                            filteredEmojis.map((item) => (
                                              <button
                                                key={item.emoji}
                                                onClick={() => {
                                                  updateFolderIcon(folderId, item.emoji)
                                                }}
                                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded text-lg"
                                                title={`Use ${item.emoji} emoji - ${item.keywords.join(', ')}`}
                                              >
                                                {item.emoji}
                                              </button>
                                            ))
                                          ) : (
                                            <div className="col-span-8 text-center text-sm text-gray-500 py-2">
                                              No emojis found
                                            </div>
                                          )}
                                        </div>
                                        {emojiSearch && (
                                          <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => setEmojiSearch('')}
                                            className="text-xs"
                                          >
                                            Clear search
                                          </Button>
                                        )}
                                      </div>
                                      <div className="flex flex-col gap-2 ml-2 border-l pl-2">
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => updateFolderIcon(folderId, '')}
                                        >
                                          Default
                                        </Button>
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          onClick={() => {
                                            setEditingFolderIcon(null)
                                            setNewFolderIcon('')
                                            setEmojiSearch('')
                                          }}
                                        >
                                          Cancel
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <div 
                                      onClick={() => {
                                        console.log('Click to change icon for folder:', folderId)
                                        setEditingFolderIcon(folderId)
                                        setNewFolderIcon('')
                                      }}
                                      className="cursor-pointer hover:scale-110 transition-transform"
                                      title="Click to change icon"
                                    >
                                      {getFolderIcon(folderId)}
                                    </div>
                                    {editingFolder === folderId ? (
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <Input
                                          value={editFolderName}
                                          onChange={(e) => setEditFolderName(e.target.value)}
                                          onKeyPress={(e) => {
                                            if (e.key === 'Enter' && editFolderName.trim()) {
                                              renameFolder(folderId, editFolderName)
                                            }
                                            if (e.key === 'Escape') {
                                              setEditingFolder(null)
                                              setEditFolderName('')
                                            }
                                          }}
                                          onMouseDown={preventDragEvents}
                                          onDragStart={preventDragStart}
                                          className="w-48 min-w-0"
                                          autoFocus
                                          placeholder="Enter folder name"
                                        />
                                        <div className="flex gap-2">
                                          <Button 
                                            size="sm" 
                                            onClick={() => renameFolder(folderId, editFolderName)}
                                            disabled={!editFolderName.trim()}
                                          >
                                            Save
                                          </Button>
                                          <Button 
                                            size="sm" 
                                            variant="outline"
                                            onClick={() => {
                                              setEditingFolder(null)
                                              setEditFolderName('')
                                            }}
                                          >
                                            Cancel
                                          </Button>
                                        </div>
                                      </div>
                                    ) : (
                                      <span 
                                        onDoubleClick={() => {
                                          console.log('Double-click rename for folder:', folderId)
                                          handleSecurityCheck('edit', 'folder', folderId, getFolderName(folderId), () => {
                                            setEditingFolder(folderId)
                                            setEditFolderName(getFolderName(folderId))
                                          })
                                        }}
                                        className="cursor-pointer hover:text-blue-600 text-lg sm:text-xl"
                                        title="Double-click to rename"
                                      >
                                        {getFolderName(folderId)} ({folderLinks.length})
                                      </span>
                                    )}
                                  </>
                                )}
                              </div>
                              {editingFolder !== folderId && editingFolderIcon !== folderId && (
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" title="Folder options">
                                      <MoreVertical className="w-4 h-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                      onClick={() => {
                                        console.log('Rename clicked for folder:', folderId, getFolderName(folderId))
                                        handleSecurityCheck('edit', 'folder', folderId, getFolderName(folderId), () => {
                                          setEditingFolder(folderId)
                                          setEditFolderName(getFolderName(folderId))
                                        })
                                      }}
                                    >
                                      <Edit2 className="w-4 h-4 mr-2" />
                                      Rename
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() => {
                                        handleSecurityCheck('delete', 'folder', folderId, getFolderName(folderId), () => deleteFolder(folderId))
                                      }}
                                      className="text-red-600"
                                    >
                                      <Trash2 className="w-4 h-4 mr-2" />
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              )}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {folderLinks.map((link) => (
                                <DraggableLink 
                                  key={link.id} 
                                  linkId={link.id} 
                                  folderId={folderId}
                                  editingLink={editingLink}
                                  moveLinkWithinFolder={moveLinkWithinFolder}
                                  draggedLink={draggedLink}
                                  setDraggedLink={setDraggedLink}
                                >
                                  {/* Mobile-optimized layout */}
                                  <div className={`border rounded-lg hover:bg-gray-50 transition-colors ${editingLink === link.id ? 'cursor-default' : 'cursor-move'}`}>
                                    {/* Desktop layout */}
                                    <div className="hidden sm:flex items-center justify-between p-4">
                                      <div className="flex items-start gap-3 flex-1 min-w-0">
                                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                                          {link.favicon ? (
                                            <img 
                                              src={link.favicon} 
                                              alt="" 
                                              className="w-4 h-4 object-contain"
                                              onError={(e) => {
                                                e.currentTarget.style.display = 'none'
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                              }}
                                            />
                                          ) : null}
                                          <Globe className={`w-4 h-4 text-gray-400 ${link.favicon ? 'hidden' : ''}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          {editingLink === link.id ? (
                                            <div className="flex items-center gap-2 mb-2">
                                              <Input
                                                value={editLinkTitle}
                                                onChange={(e) => setEditLinkTitle(e.target.value)}
                                                onKeyPress={(e) => {
                                                  if (e.key === 'Enter' && editLinkTitle.trim()) {
                                                    updateLinkTitle(link.id, editLinkTitle)
                                                  }
                                                  if (e.key === 'Escape') {
                                                    setEditingLink(null)
                                                    setEditLinkTitle('')
                                                  }
                                                }}
                                                onMouseDown={preventDragEvents}
                                                onDragStart={preventDragStart}
                                                className="flex-1"
                                                autoFocus
                                                placeholder="Enter link title"
                                              />
                                              <Button 
                                                size="sm" 
                                                onClick={() => updateLinkTitle(link.id, editLinkTitle)}
                                                disabled={!editLinkTitle.trim()}
                                              >
                                                Save
                                              </Button>
                                              <Button 
                                                size="sm" 
                                                variant="outline"
                                                onClick={() => {
                                                  setEditingLink(null)
                                                  setEditLinkTitle('')
                                                }}
                                              >
                                                Cancel
                                              </Button>
                                            </div>
                                          ) : (
                                            <h3 
                                              className="truncate pr-4 cursor-pointer hover:text-blue-600"
                                              onDoubleClick={() => {
                                                console.log('Double-click edit title for link:', link.id)
                                                handleSecurityCheck('edit', 'link', link.id, link.title, () => {
                                                  setEditingLink(link.id)
                                                  setEditLinkTitle(link.title)
                                                })
                                              }}
                                              title="Double-click to edit title"
                                            >
                                              {link.title}
                                            </h3>
                                          )}
                                          <p className="text-sm text-gray-500 truncate pr-4">{link.url}</p>
                                          <p className="text-xs text-gray-400 mt-1">
                                            Saved on {new Date(link.createdAt).toLocaleDateString()}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2 flex-shrink-0">
                                        <Select 
                                          value={link.folderId || 'uncategorized'}
                                          onValueChange={(newFolderId) => moveLink(link.id, newFolderId === 'uncategorized' ? null : newFolderId)}
                                        >
                                          <SelectTrigger className="w-32">
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="uncategorized">Links</SelectItem>
                                            {sortedFolders.map((folder) => (
                                              <SelectItem key={folder.id} value={folder.id}>
                                                {folder.name}
                                              </SelectItem>
                                            ))}
                                          </SelectContent>
                                        </Select>
                                        <Button 
                                          variant="outline" 
                                          size="sm" 
                                          onClick={() => openLink(link.url)}
                                          title="Open link in new tab"
                                        >
                                          <ExternalLink className="w-4 h-4" />
                                        </Button>
                                        <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                            <Button variant="outline" size="sm" title="More options">
                                              <MoreVertical className="w-4 h-4" />
                                            </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                            <DropdownMenuItem
                                              onClick={() => {
                                                console.log('Edit title clicked for link:', link.id)
                                                handleSecurityCheck('edit', 'link', link.id, link.title, () => {
                                                  setEditingLink(link.id)
                                                  setEditLinkTitle(link.title)
                                                })
                                              }}
                                            >
                                              <Edit2 className="w-4 h-4 mr-2" />
                                              Edit Title
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                              onClick={() => {
                                                handleSecurityCheck('delete', 'link', link.id, link.title, () => deleteLink(link.id))
                                              }}
                                              className="text-red-600"
                                            >
                                              <Trash2 className="w-4 h-4 mr-2" />
                                              Delete
                                            </DropdownMenuItem>
                                          </DropdownMenuContent>
                                        </DropdownMenu>
                                      </div>
                                    </div>

                                    {/* Mobile layout */}
                                    <div className="sm:hidden p-3">
                                      <div className="flex items-start gap-3 mb-3">
                                        <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center mt-0.5">
                                          {link.favicon ? (
                                            <img 
                                              src={link.favicon} 
                                              alt="" 
                                              className="w-4 h-4 object-contain"
                                              onError={(e) => {
                                                e.currentTarget.style.display = 'none'
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                              }}
                                            />
                                          ) : null}
                                          <Globe className={`w-4 h-4 text-gray-400 ${link.favicon ? 'hidden' : ''}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          {editingLink === link.id ? (
                                            <div className="space-y-2">
                                              <Input
                                                value={editLinkTitle}
                                                onChange={(e) => setEditLinkTitle(e.target.value)}
                                                onKeyPress={(e) => {
                                                  if (e.key === 'Enter' && editLinkTitle.trim()) {
                                                    updateLinkTitle(link.id, editLinkTitle)
                                                  }
                                                  if (e.key === 'Escape') {
                                                    setEditingLink(null)
                                                    setEditLinkTitle('')
                                                  }
                                                }}
                                                onMouseDown={preventDragEvents}
                                                onDragStart={preventDragStart}
                                                className="w-full"
                                                autoFocus
                                                placeholder="Enter link title"
                                              />
                                              <div className="flex gap-2">
                                                <Button 
                                                  size="sm" 
                                                  onClick={() => updateLinkTitle(link.id, editLinkTitle)}
                                                  disabled={!editLinkTitle.trim()}
                                                >
                                                  Save
                                                </Button>
                                                <Button 
                                                  size="sm" 
                                                  variant="outline"
                                                  onClick={() => {
                                                    setEditingLink(null)
                                                    setEditLinkTitle('')
                                                  }}
                                                >
                                                  Cancel
                                                </Button>
                                              </div>
                                            </div>
                                          ) : (
                                            <>
                                              <h3 
                                                className="font-medium leading-tight mb-1 cursor-pointer hover:text-blue-600 break-words"
                                                onDoubleClick={() => {
                                                  console.log('Double-click edit title for link:', link.id)
                                                  handleSecurityCheck('edit', 'link', link.id, link.title, () => {
                                                    setEditingLink(link.id)
                                                    setEditLinkTitle(link.title)
                                                  })
                                                }}
                                                title="Double-click to edit title"
                                              >
                                                {link.title}
                                              </h3>
                                              <p className="text-sm text-gray-500 break-words mb-1">{link.url}</p>
                                              <p className="text-xs text-gray-400">
                                                Saved on {new Date(link.createdAt).toLocaleDateString()}
                                              </p>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                      
                                      {/* Mobile actions */}
                                      <div className="flex items-center justify-between gap-2">
                                        <Select 
                                          value={link.folderId || 'uncategorized'}
                                          onValueChange={(newFolderId) => moveLink(link.id, newFolderId === 'uncategorized' ? null : newFolderId)}
                                        >
                                          <SelectTrigger className="flex-1 text-sm">
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="uncategorized">Links</SelectItem>
                                            {sortedFolders.map((folder) => (
                                              <SelectItem key={folder.id} value={folder.id}>
                                                {folder.name}
                                              </SelectItem>
                                            ))}
                                          </SelectContent>
                                        </Select>
                                        <Button 
                                          variant="outline" 
                                          size="sm" 
                                          onClick={() => openLink(link.url)}
                                          title="Open link"
                                          className="flex-shrink-0"
                                        >
                                          <ExternalLink className="w-4 h-4" />
                                        </Button>
                                        <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                            <Button variant="outline" size="sm" className="flex-shrink-0">
                                              <MoreVertical className="w-4 h-4" />
                                            </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                            <DropdownMenuItem
                                              onClick={() => {
                                                console.log('Edit title clicked for link:', link.id)
                                                handleSecurityCheck('edit', 'link', link.id, link.title, () => {
                                                  setEditingLink(link.id)
                                                  setEditLinkTitle(link.title)
                                                })
                                              }}
                                            >
                                              <Edit2 className="w-4 h-4 mr-2" />
                                              Edit Title
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                              onClick={() => {
                                                handleSecurityCheck('delete', 'link', link.id, link.title, () => deleteLink(link.id))
                                              }}
                                              className="text-red-600"
                                            >
                                              <Trash2 className="w-4 h-4 mr-2" />
                                              Delete
                                            </DropdownMenuItem>
                                          </DropdownMenuContent>
                                        </DropdownMenu>
                                      </div>
                                    </div>
                                  </div>
                                </DraggableLink>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </DraggableFolder>
                    )
                  }
                })
              })()
            )}
          </div>
        </div>

        {/* Desktop Navigation - Fixed on larger screens */}
        <div className="hidden lg:fixed lg:top-[120px] lg:right-[calc(50vw-32rem-6rem)] lg:flex lg:flex-col lg:gap-1 lg:w-32">
          <div className="space-y-2">
            {/* Quick Add Button */}
            <button
              onClick={scrollToAddLink}
              className="flex items-center gap-2 w-full text-left text-gray-500 hover:text-gray-700 transition-colors text-sm mb-3 pb-2 border-b border-gray-200"
              title="Scroll to Add New Link"
            >
              <Plus className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">Add Link</span>
            </button>

            {/* Uncategorized Links */}
            {linksByFolder['uncategorized'] && linksByFolder['uncategorized'].length > 0 && (
              <button
                onClick={() => scrollToFolder('uncategorized')}
                className="flex items-center gap-2 w-full text-left text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                <Minus className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">Links</span>
              </button>
            )}

            {/* Custom Folders */}
            {sortedFolders
              .filter(folder => linksByFolder[folder.id] && linksByFolder[folder.id].length > 0)
              .map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => scrollToFolder(folder.id)}
                  className="flex items-center gap-2 w-full text-left text-gray-500 hover:text-gray-700 transition-colors text-sm"
                >
                  <Minus className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{folder.name}</span>
                </button>
              ))}
          </div>
        </div>

        {/* Mobile Navigation Button - Fixed trigger button */}
        <button
          className="lg:hidden fixed top-1/2 right-4 transform -translate-y-1/2 z-40 bg-white border border-gray-200 rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-200"
          onClick={() => setIsMobileNavOpen(true)}
          title="Open navigation"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileNavOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Very light background overlay to show content behind */}
            <div 
              className="absolute inset-0 transition-opacity duration-300"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
              onClick={() => setIsMobileNavOpen(false)}
            />
            
            {/* Navigation panel */}
            <div className="absolute right-0 top-0 h-full w-48 bg-white border-l border-gray-200 shadow-xl transform transition-transform duration-300 ease-out">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <button
                  onClick={() => setIsMobileNavOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors ml-auto"
                  title="Close navigation"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Navigation content - styled like desktop version */}
              <div className="p-4 space-y-2">
                {/* Quick Add Button */}
                <button
                  onClick={scrollToAddLink}
                  className="flex items-center gap-2 w-full text-left text-gray-500 hover:text-gray-700 transition-colors text-sm mb-3 pb-2 border-b border-gray-200"
                  title="Scroll to Add New Link"
                >
                  <Plus className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">Add Link</span>
                </button>

                {/* Uncategorized Links */}
                {linksByFolder['uncategorized'] && linksByFolder['uncategorized'].length > 0 && (
                  <button
                    onClick={() => scrollToFolder('uncategorized')}
                    className="flex items-center gap-2 w-full text-left text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    <Minus className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">Links</span>
                  </button>
                )}

                {/* Custom Folders */}
                {sortedFolders
                  .filter(folder => linksByFolder[folder.id] && linksByFolder[folder.id].length > 0)
                  .map((folder) => (
                    <button
                      key={folder.id}
                      onClick={() => scrollToFolder(folder.id)}
                      className="flex items-center gap-2 w-full text-left text-gray-500 hover:text-gray-700 transition-colors text-sm"
                    >
                      <Minus className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{folder.name}</span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Security Check Dialog */}
        <Dialog open={securityCheck.isOpen} onOpenChange={(open) => {
          if (!open) {
            closeSecurityCheck()
          }
        }}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className={`flex items-center gap-2 ${securityCheck.action === 'delete' ? 'text-red-600' : 'text-blue-600'}`}>
                {securityCheck.action === 'delete' ? <Trash2 className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                {securityCheck.action === 'delete' ? 'Confirm Delete' : 'Security Check'}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Security verification required to proceed.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                {securityCheck.action === 'delete' 
                  ? <>Are you sure you want to delete {securityCheck.itemType === 'folder' ? 'the folder' : 'the link'} "<span className="font-medium">{securityCheck.itemName}</span>"?</>
                  : <>Please enter the password to edit {securityCheck.itemType === 'folder' ? 'the folder' : 'the link'} "<span className="font-medium">{securityCheck.itemName}</span>".</>
                }
              </p>
              {securityCheck.action === 'delete' && securityCheck.itemType === 'folder' && (
                <p className="text-xs text-gray-500">
                  All links in this folder will be moved to "Links".
                </p>
              )}
              <div>
                <label htmlFor="security-password" className="block text-sm mb-2">
                  Enter password:
                </label>
                <Input
                  id="security-password"
                  type="password"
                  value={securityPassword}
                  onChange={(e) => setSecurityPassword(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      executeSecurityAction()
                    }
                  }}
                  autoFocus
                  placeholder="Enter password"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  onClick={closeSecurityCheck}
                >
                  Cancel
                </Button>
                <Button 
                  variant={securityCheck.action === 'delete' ? "destructive" : "default"}
                  onClick={executeSecurityAction}
                >
                  {securityCheck.action === 'delete' ? (
                    <>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Authorize
                    </>
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DndProvider>
  )
}