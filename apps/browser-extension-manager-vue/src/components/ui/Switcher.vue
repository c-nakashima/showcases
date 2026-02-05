<!-- /**
 * Base Switcher component
 */ -->
<script setup lang="ts">
import { computed } from "vue";
/**
 * Switcher base component
 * - isActive: Whether the switch is active or not
 * - label: Accessible label for the input
 */
interface Props {
  isActive: boolean;
  label?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:isActive", value: boolean): void;
}>();

const inputId = `switcher-${Math.random().toString(36).slice(2, 9)}`;
const ariaLabel = computed(() => props.label ?? "Toggle");

const handleChange = (event: Event) => {
  emit("update:isActive", (event.target as HTMLInputElement).checked);
};
</script>

<template>
  <div class="relative inline-block w-11 h-5">
    <input
      :checked="props.isActive"
      :id="inputId"
      :aria-label="ariaLabel"
      type="checkbox"
      class="peer appearance-none w-11 h-6 rounded-full bg-neutral-300 checked:bg-red-700 cursor-pointer transition-colors duration-300 checked:dark:bg-red-400 dark:bg-neutral-600"
      @change="handleChange"
    />
    <label
      :for="inputId"
      class="absolute top-0 left-0 w-6 h-6 bg-white rounded-full border-2 border-neutral-300 dark:border-neutral-600 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-red-700 peer-checked:dark:border-red-400 cursor-pointer"
    />
  </div>
</template>
