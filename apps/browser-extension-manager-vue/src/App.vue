<script setup lang="ts">
import { onMounted, ref } from 'vue'
import data from '../public/data.json'
import { ExtensionTabId } from '@/types/extension'
// Composables
import { useTheme } from '@/composables/useTheme'
import { useExtensionsStorage } from '@/composables/useExtensionsStorage'
import { useTabStorage } from '@/composables/useTabStorage'
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

// == Extensions Storage ==
// Extensions Storage related variables/functions
const { extensions, handleRemove, handleToggleActive } =
  useExtensionsStorage(data)

// == Tab Storage ==
// Extensions Storage related variables/functions
const { activeTab, filteredExtensions } = useTabStorage(extensions)

// == Remove Confirmation Modal ==
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
