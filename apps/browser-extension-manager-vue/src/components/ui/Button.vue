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
s

<template>
  <button class="py-2 px-4 rounded rounded-full">
    {{ text }}
  </button>
</template>
