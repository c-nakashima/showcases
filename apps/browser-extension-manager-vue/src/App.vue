<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import data from '../public/data.json'
import { Extension, ExtensionTabId } from '@/types/extension'
import { useTheme } from '@/composables/useTheme'
//components
import { ExtensionCard, ExtensionTabGroup } from '@/components/extension'
import { Header } from '@/components/layout'

// Currently active tabs
const activeTab = ref<ExtensionTabId>('active')

// == Switch Theme
// Theme related variables/functions
const { isDark, initTheme, toggleTheme } = useTheme()
// When the component is mounted, initialize the theme
onMounted(() => initTheme())
initTheme()

// == Filter Data to Display
const storageKey = 'extension-manager:extensions'
// Load extensions from localStorage
const loadExtensions = (): Extension[] => {
  // If the window is not defined, return the data
  if (typeof window === 'undefined') return data
  // Try to get the extensions from localStorage
  try {
    const raw = localStorage.getItem(storageKey)
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
// When the tab is changed, filter data to show
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

// When the remove button is clicked, remove the extension from the localStorage
const handleRemove = (name: string) => {
  // Filter the extensions to remove the extension (use item's name as a key)
  extensions.value = extensions.value.filter((item) => item.name !== name)
  // If the window is not defined, save the extensions to the localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem(storageKey, JSON.stringify(extensions.value))
  }
}

// When the component is mounted, load the extensions from the localStorage
onMounted(() => {
  extensions.value = loadExtensions()
})
</script>

<template>
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
        class="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
      >
        <li v-for="item in filteredExtensions" :key="item.name">
          <ExtensionCard
            :logoPath="item.logoPath"
            :name="item.name"
            :description="item.description"
            :isActive="item.isActive"
            @update:isActive="(value) => (item.isActive = value)"
            @remove="handleRemove"
          />
        </li>
      </div>
    </div>
  </div>
</template>
