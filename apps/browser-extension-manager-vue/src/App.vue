<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import data from '../public/data.json'
import { ExtensionTabId } from '@/types/extension'
import { useTheme } from '@/composables/useTheme'
import { useExtensionsStorage } from '@/composables/useExtensionsStorage'
//components
import {
  ExtensionCard,
  ExtensionTabGroup,
  ConfirmRemovalModal,
  EmptyExtensionDisplay,
} from '@/components/extension'
import { Header } from '@/components/layout'

const { extensions, handleRemove, handleToggleActive } =
  useExtensionsStorage(data)

// == Switch Theme
// Theme related variables/functions
const { isDark, initTheme, toggleTheme } = useTheme()
// When the component is mounted, initialize the theme
onMounted(() => initTheme())
initTheme()

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
  <!-- Remove Confirmation Modal -->
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
