<!-- /**
 * Base Tab component
 */ -->
<script setup lang="ts">
/**
 * Tab base component
 * - isActive: Whether the switch is active or not
 */
interface Props {
  text: string
  isActive: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'select'): void
}>()
</script>

<template>
  <div
    class="py-2 px-5 rounded-full border hover:cursor-pointer"
    :class="
      isActive
        ? 'bg-red-700 border-red-700 text-white dark:text-neutral-800 dark:bg-red-400 dark:border-red-400 hover:dark:bg-red-500 hover:dark:border-red-500 hover:dark:text-neutral-800 hover:dark:border-neutral-800'
        : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-600 dark:text-white dark:border-neutral-600'
    "
    @click="emit('select')"
  >
    {{ text }}
  </div>
</template>
