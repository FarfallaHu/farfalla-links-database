// 混合数据管理：静态数据（所有人可见） + localStorage（个人数据）

import { localLinks, localFolders, LocalLink, LocalFolder } from '../data/localData'

const STORAGE_KEYS = {
  LINKS: 'farfalla_user_links',
  FOLDERS: 'farfalla_user_folders',
  DELETED_LINKS: 'farfalla_deleted_links',
  DELETED_FOLDERS: 'farfalla_deleted_folders'
}

// 获取 localStorage 中的数据
function getLocalStorage<T>(key: string): T[] {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return []
  }
}

// 保存到 localStorage
function setLocalStorage<T>(key: string, data: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

// 获取所有链接（静态数据 + 用户添加的）
export function getAllLinks(): LocalLink[] {
  const userLinks = getLocalStorage<LocalLink>(STORAGE_KEYS.LINKS)
  const deletedLinkIds = getLocalStorage<string>(STORAGE_KEYS.DELETED_LINKS)

  // 过滤掉被删除的静态链接
  const filteredStaticLinks = localLinks.filter(link => !deletedLinkIds.includes(link.id))

  // 合并静态链接和用户添加的链接
  return [...filteredStaticLinks, ...userLinks]
}

// 获取所有文件夹（静态数据 + 用户添加的）
export function getAllFolders(): LocalFolder[] {
  const userFolders = getLocalStorage<LocalFolder>(STORAGE_KEYS.FOLDERS)
  const deletedFolderIds = getLocalStorage<string>(STORAGE_KEYS.DELETED_FOLDERS)

  // 过滤掉被删除的静态文件夹
  const filteredStaticFolders = localFolders.filter(folder => !deletedFolderIds.includes(folder.id))

  // 合并静态文件夹和用户添加的文件夹
  return [...filteredStaticFolders, ...userFolders]
}

// 添加新链接（保存到 localStorage）
export function addLink(link: Omit<LocalLink, 'id' | 'createdAt'>): LocalLink {
  const userLinks = getLocalStorage<LocalLink>(STORAGE_KEYS.LINKS)

  const newLink: LocalLink = {
    ...link,
    id: `user-link-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString()
  }

  userLinks.push(newLink)
  setLocalStorage(STORAGE_KEYS.LINKS, userLinks)

  return newLink
}

// 添加新文件夹（保存到 localStorage）
export function addFolder(folder: Omit<LocalFolder, 'id' | 'createdAt'>): LocalFolder {
  const userFolders = getLocalStorage<LocalFolder>(STORAGE_KEYS.FOLDERS)

  const newFolder: LocalFolder = {
    ...folder,
    id: `user-folder-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString()
  }

  userFolders.push(newFolder)
  setLocalStorage(STORAGE_KEYS.FOLDERS, userFolders)

  return newFolder
}

// 更新链接
export function updateLink(linkId: string, updates: Partial<LocalLink>): LocalLink | null {
  const userLinks = getLocalStorage<LocalLink>(STORAGE_KEYS.LINKS)

  // 检查是否是用户添加的链接
  const userLinkIndex = userLinks.findIndex(link => link.id === linkId)

  if (userLinkIndex !== -1) {
    // 更新用户添加的链接
    userLinks[userLinkIndex] = { ...userLinks[userLinkIndex], ...updates }
    setLocalStorage(STORAGE_KEYS.LINKS, userLinks)
    return userLinks[userLinkIndex]
  } else {
    // 更新静态链接：需要在 localStorage 中创建一个修改后的版本
    const staticLink = localLinks.find(link => link.id === linkId)
    if (staticLink) {
      const updatedLink = { ...staticLink, ...updates }
      userLinks.push(updatedLink)
      setLocalStorage(STORAGE_KEYS.LINKS, userLinks)

      // 标记原始静态链接为已删除
      const deletedLinkIds = getLocalStorage<string>(STORAGE_KEYS.DELETED_LINKS)
      deletedLinkIds.push(linkId)
      setLocalStorage(STORAGE_KEYS.DELETED_LINKS, deletedLinkIds)

      return updatedLink
    }
  }

  return null
}

// 更新文件夹
export function updateFolder(folderId: string, updates: Partial<LocalFolder>): LocalFolder | null {
  const userFolders = getLocalStorage<LocalFolder>(STORAGE_KEYS.FOLDERS)

  // 检查是否是用户添加的文件夹
  const userFolderIndex = userFolders.findIndex(folder => folder.id === folderId)

  if (userFolderIndex !== -1) {
    // 更新用户添加的文件夹
    userFolders[userFolderIndex] = { ...userFolders[userFolderIndex], ...updates }
    setLocalStorage(STORAGE_KEYS.FOLDERS, userFolders)
    return userFolders[userFolderIndex]
  } else {
    // 更新静态文件夹：需要在 localStorage 中创建一个修改后的版本
    const staticFolder = localFolders.find(folder => folder.id === folderId)
    if (staticFolder) {
      const updatedFolder = { ...staticFolder, ...updates }
      userFolders.push(updatedFolder)
      setLocalStorage(STORAGE_KEYS.FOLDERS, userFolders)

      // 标记原始静态文件夹为已删除
      const deletedFolderIds = getLocalStorage<string>(STORAGE_KEYS.DELETED_FOLDERS)
      deletedFolderIds.push(folderId)
      setLocalStorage(STORAGE_KEYS.DELETED_FOLDERS, deletedFolderIds)

      return updatedFolder
    }
  }

  return null
}

// 删除链接
export function deleteLink(linkId: string): boolean {
  const userLinks = getLocalStorage<LocalLink>(STORAGE_KEYS.LINKS)

  // 检查是否是用户添加的链接
  const userLinkIndex = userLinks.findIndex(link => link.id === linkId)

  if (userLinkIndex !== -1) {
    // 删除用户添加的链接
    userLinks.splice(userLinkIndex, 1)
    setLocalStorage(STORAGE_KEYS.LINKS, userLinks)
    return true
  } else {
    // 删除静态链接：标记为已删除
    const deletedLinkIds = getLocalStorage<string>(STORAGE_KEYS.DELETED_LINKS)
    if (!deletedLinkIds.includes(linkId)) {
      deletedLinkIds.push(linkId)
      setLocalStorage(STORAGE_KEYS.DELETED_LINKS, deletedLinkIds)
      return true
    }
  }

  return false
}

// 删除文件夹
export function deleteFolder(folderId: string): boolean {
  const userFolders = getLocalStorage<LocalFolder>(STORAGE_KEYS.FOLDERS)

  // 检查是否是用户添加的文件夹
  const userFolderIndex = userFolders.findIndex(folder => folder.id === folderId)

  if (userFolderIndex !== -1) {
    // 删除用户添加的文件夹
    userFolders.splice(userFolderIndex, 1)
    setLocalStorage(STORAGE_KEYS.FOLDERS, userFolders)
    return true
  } else {
    // 删除静态文件夹：标记为已删除
    const deletedFolderIds = getLocalStorage<string>(STORAGE_KEYS.DELETED_FOLDERS)
    if (!deletedFolderIds.includes(folderId)) {
      deletedFolderIds.push(folderId)
      setLocalStorage(STORAGE_KEYS.DELETED_FOLDERS, deletedFolderIds)
      return true
    }
  }

  return false
}

// 批量更新链接顺序
export function updateLinksOrder(updates: Array<{ id: string; order: number }>): void {
  updates.forEach(({ id, order }) => {
    updateLink(id, { order })
  })
}

// 批量更新文件夹顺序
export function updateFoldersOrder(updates: Array<{ id: string; order: number }>): void {
  updates.forEach(({ id, order }) => {
    updateFolder(id, { order })
  })
}

// 清除所有用户数据（重置到静态数据）
export function resetToStaticData(): void {
  localStorage.removeItem(STORAGE_KEYS.LINKS)
  localStorage.removeItem(STORAGE_KEYS.FOLDERS)
  localStorage.removeItem(STORAGE_KEYS.DELETED_LINKS)
  localStorage.removeItem(STORAGE_KEYS.DELETED_FOLDERS)
}
