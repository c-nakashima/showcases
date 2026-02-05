<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import data from '../public/data.json'
import { Extension, ExtensionTabId } from '@/types/extension'
import { useTheme } from '@/composables/useTheme'
//components
import {
  ExtensionCard,
  ExtensionTabGroup,
  ConfirmRemovalModal,
  EmptyExtensionDisplay,
} from '@/components/extension'
import { Header } from '@/components/layout'

// == Switch Theme
// Theme related variables/functions
const { isDark, initTheme, toggleTheme } = useTheme()
// When the component is mounted, initialize the theme
onMounted(() => initTheme())
initTheme()

// == Filter Extensions to Display ==
const ExtensionStorageKey = 'extension-manager:extensions'
// Load extensions from localStorage
const loadExtensions = (): Extension[] => {
  // If the window is not defined, return the data
  if (typeof window === 'undefined') return data
  // Try to get the extensions from localStorage
  try {
    const raw = localStorage.getItem(ExtensionStorageKey)
    // If the extensions are not found, return the data
    if (!raw) return data
    // Parse the extensions from the localStorage
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : data
  } catch {
    return data
  }
}
const extensions = ref<Extension[]>(loadExtensions())

// == Load Extensions ==
// When the component is mounted, load the extensions from the localStorage
onMounted(() => {
  extensions.value = loadExtensions()
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
  const next = extensions.value.map((item) =>
    item.name === name ? { ...item, isActive } : item,
  )
  saveExtensions(next)
}

// == Tab Change Handling ==
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

// == Remove Modal ==
const isModalOpen = ref(false)
const selectedExtensionName = ref('')

const openModal = (extensionName: string) => {
  selectedExtensionName.value = extensionName
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedExtensionName.value = ''
}

// after the confirm button is clicked, remove the extension from the localStorage
const confirmRemove = (extensionName: string) => {
  handleRemove(extensionName)
  closeModal()
}
</script>

<template>
  <!-- Remove Modal -->
  <ConfirmRemovalModal
    :isOpen="isModalOpen"
    :extensionName="selectedExtensionName"
    @close="closeModal"
    @confirm="confirmRemove"
  />
  <div
    class="min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEFBF9] dark:bg-gradient-to-b dark:from-[#04091B] dark:to-[#091540]"
  >
    <div class="mx-auto max-w-6xl p-6">
      <!-- Header -->
      <Header :isDark="isDark" @toggleTheme="toggleTheme" />

      <!-- Contents -->
      <div
        class="flex flex-col gap-4 mb-6 items-center sm:flex-row sm:justify-between sm:gap-6"
      >
        <h1 class="text-3xl font-semibold dark:text-white">Extension List</h1>
        <ExtensionTabGroup v-model="activeTab" />
      </div>

      <!-- Grid -->
      <div
        v-if="filteredExtensions.length > 0"
        class="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
      >
        <li v-for="item in filteredExtensions" :key="item.name">
          <ExtensionCard
            :logoPath="item.logoPath"
            :extensionName="item.name"
            :description="item.description"
            :isActive="item.isActive"
            @update:isActive="(value) => handleToggleActive(item.name, value)"
            @remove="openModal"
          />
        </li>
      </div>
      <EmptyExtensionDisplay v-else :isDark="isDark" :activeTab="activeTab" />
    </div>
  </div>
</template>
