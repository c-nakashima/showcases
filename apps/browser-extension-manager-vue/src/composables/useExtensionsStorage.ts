import { onMounted, ref } from 'vue'
import type { Extension } from '@/types'

// Extensions Storage related functions
export function useExtensionsStorage(initialData: Extension[]) {
  const ExtensionStorageKey = 'extension-manager:extensions'

  // == Load Extensions from localStorage ==
  const loadExtensions = (fallback: Extension[]): Extension[] => {
    // If the window is not defined, return the data
    if (typeof window === 'undefined') return fallback
    // Try to get the extensions from localStorage
    try {
      const raw = localStorage.getItem(ExtensionStorageKey)
      // If the extensions are not found, return the data
      if (!raw) return fallback
      // Parse the extensions from the localStorage
      const parsed = JSON.parse(raw)
      return Array.isArray(parsed) ? parsed : fallback
    } catch {
      return fallback
    }
  }
  const extensions = ref<Extension[]>(loadExtensions(initialData))

  // == Load Extensions ==
  // When the component is mounted, load the extensions from the localStorage
  onMounted(() => {
    extensions.value = loadExtensions(initialData)
  })

  // == Save Extensions ==
  const saveExtensions = (newExtensions: Extension[]) => {
    extensions.value = newExtensions
    if (typeof window !== 'undefined') {
      localStorage.setItem(ExtensionStorageKey, JSON.stringify(newExtensions))
    }
  }

  // == Remove Extension ==
  // When the remove button is clicked, remove the extension from the localStorage
  const handleRemove = (name: string) => {
    // Filter the extensions to remove the extension (use item's name as a key)
    saveExtensions(extensions.value.filter((item) => item.name !== name))
  }

  // == Toggle Extension ==
  const handleToggleActive = (name: string, isActive: boolean) => {
    const updated = extensions.value.map((item) =>
      item.name === name ? { ...item, isActive } : item,
    )
    saveExtensions(updated)
  }

  return { extensions, handleRemove, handleToggleActive }
}
