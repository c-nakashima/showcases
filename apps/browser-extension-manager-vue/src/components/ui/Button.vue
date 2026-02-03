<script setup lang="ts">
/**
 * Base Button component
 * - text: Button text
 */
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<template>
  <button
    className="bg-white border border-neutral-300 text-neutral-700
            py-2 px-4 rounded-full
            hover:bg-neutral-50 transition"
  >
    {{ text }}
  </button>
</template>
