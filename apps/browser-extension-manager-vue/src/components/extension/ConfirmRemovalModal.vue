<script setup lang="ts">
import { Modal, Button } from '@/components/ui'
/**
 * Confirm Removal Modal component
 * for extension card components when they are clicked on the remove button
 * - isOpen: Whether the modal is open or not
 * - extensionName: The name of the extension to be removed
 */
interface Props {
  isOpen: boolean
  extensionName: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm', extensionName: string): void
}>()

// after the confirm button is clicked, remove the extension from the localStorage
const confirm = () => {
  emit('confirm', props.extensionName)
}
</script>

<template>
  <Modal :isOpen="isOpen" @close="emit('close')">
    <h2 class="text-lg font-semibold mb-2">Remove Extension</h2>
    <p class="text-sm text-neutral-600 mb-4">
      Remove <strong>{{ extensionName }}</strong> from the list?
    </p>
    <div class="flex gap-2 justify-end">
      <Button
        class="border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
        text="Cancel"
        @click="emit('close')"
      />
      <Button
        class="bg-red-600 text-white hover:bg-red-700"
        text="Confirm Removal"
        @click="confirm"
      />
    </div>
  </Modal>
</template>
