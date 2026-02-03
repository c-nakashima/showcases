<!-- /**
 * Base Tab component
 */ -->
<script setup lang="ts">
/**
 * Tab base component
 * - isActive: Whether the switch is active or not
 */
interface Props {
  text: string;
  isActive: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: "select"): void;
}>();
</script>

<template>
  <div
    class="bg-white border border-neutral-300 text-neutral-700 py-2 px-5 rounded-full hover:cursor-pointer"
    :class="
      isActive
        ? 'bg-red-700 text-white'
        : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50'
    "
    @click="emit('select')"
  >
    {{ text }}
  </div>
</template>
