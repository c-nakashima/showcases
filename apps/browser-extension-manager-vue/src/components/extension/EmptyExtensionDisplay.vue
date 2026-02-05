<script setup lang="ts">
import { computed } from 'vue'
import { ExtensionTabId } from '@/types/extension'

/**
 * Empty Extension Display component
 * - isDark: Whether the theme is Dark or not
 * - activeTab: The currently active tab
 */
interface Props {
  isDark: boolean
  activeTab: ExtensionTabId
}

const props = defineProps<Props>()

// Empty state message
const emptyStateMessage = computed(() => {
  if (props.activeTab === 'inactive') return 'No inactive extensions found'
  if (props.activeTab === 'active') return 'No active extensions found'
  return 'No extensions found'
})
</script>

<template>
  <div
    class="text-neutral-600 text-center dark:text-white rounded-2xl py-20 sm:pt-8 sm:pb-20"
  >
    <div class="flex justify-center items-center p-4">
      <img
        :src="`/public/assets/images/extension-${isDark ? 'white' : 'dark'}.svg`"
        alt="Empty state"
        class="w-[160px] h-[160px] opacity-20 mx-auto"
      />
    </div>
    <p class="text-xl text-neutral-400">
      {{ emptyStateMessage }}
    </p>
  </div>
</template>
