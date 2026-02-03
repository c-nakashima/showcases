<!-- /**
 * Base Switcher component
 */ -->
<script setup lang="ts">
/**
 * Switcher base component
 * - isActive: Whether the switch is active or not
 */
interface Props {
  isActive: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="relative inline-block w-11 h-5">
    <input
      :checked="isActive"
      id="switch-component-1"
      type="checkbox"
      class="peer appearance-none w-11 h-6 bg-neutral-300 rounded-full checked:bg-red-700 cursor-pointer transition-colors duration-300"
    />
    <label
      for="switch-component-1"
      class="absolute top-0 left-0 w-6 h-6 bg-white rounded-full border-2 border-neutral-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-red-700 cursor-pointer"
    />
  </div>
</template>
