import { computed, ref, watch, type Ref } from 'vue'
import type { Extension, ExtensionTabId } from '@/types'

// Extensions Storage related functions
export function useTabStorage(extensions: Ref<Extension[]>) {
  const TabStorageKey = 'extension-manager:tab'
  // Load the currently active tab from the localStorage
  const loadActiveTab = (): ExtensionTabId => {
    if (typeof window === 'undefined') return 'active'
    const saved = localStorage.getItem(TabStorageKey)
    if (saved === 'all' || saved === 'active' || saved === 'inactive') {
      return saved
    }
    return 'active'
  }

  // Currently active tab
  const activeTab = ref<ExtensionTabId>(loadActiveTab())

  // When the tab is changed, filter the extensions to show
  const filteredExtensions = computed(() => {
    if (activeTab.value === 'all') {
      return extensions.value
    } else if (activeTab.value === 'active') {
      return extensions.value.filter((e) => e.isActive)
    } else if (activeTab.value === 'inactive') {
      return extensions.value.filter((e) => !e.isActive)
    }
    return extensions.value
  })

  // When the tab is changed, save the currently active tab to the localStorage
  watch(activeTab, (value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(TabStorageKey, value)
    }
  })

  return { activeTab, filteredExtensions }
}
