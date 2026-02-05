<script setup lang="ts">
import { Card, Switcher } from '@/components/ui'
import { RemoveButton } from '@/components/extension'

/**
 * Extension card component
 * - logoPath: Extension logo image path
 * - name: Extension name
 * - description: Description text
 * - isActive: Whether the extension is enabled (toggle state)
 */
interface Props {
  logoPath: string
  extensionName: string
  description: string
  isActive: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:isActive', value: boolean): void
  (e: 'remove', name: string): void
}>()
</script>

<template>
  <Card
    class="h-[200px] bg-white border norder-neutral-200 dark:bg-neutral-800 dark:border-neutral-600"
  >
    <template #header>
      <div class="flex gap-4">
        <img
          class="min-w-[60px] min-h-[60px] w-[60px] h-[60px]"
          :src="logoPath"
          alt="Extension logo"
        />
        <div>
          <div class="font-bold text-xl mb-2 dark:text-white">
            {{ extensionName }}
          </div>
          <p class="text-neutral-600 text-base font-sans dark:text-neutral-300">
            {{ description }}
          </p>
        </div>
      </div>
    </template>

    <template #footer-left>
      <RemoveButton @remove="emit('remove', extensionName)" />
    </template>

    <template #footer-right>
      <Switcher
        :isActive="isActive"
        @update:isActive="emit('update:isActive', $event)"
      />
    </template>
  </Card>
</template>
