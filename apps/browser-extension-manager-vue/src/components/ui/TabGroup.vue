<script setup lang="ts">
import { computed } from "vue";
import { Tab } from "@/components/ui";
import type { TabItem } from "@/components/ui";

/**
 * Base Tab Group component
 * - modelValue: active tab ids (v-model)
 * - items: tab item
 */
interface Props {
  modelValue: string;
  items: TabItem[];
}
const props = defineProps<Props>();

// Emits the selected tab id when a tab is clicked (modelValue = activeId),
// then the parent component can react to the tab change.
const emit = defineEmits<{
  (e: "update:modelValue", id: string): void;
}>();

// Currently selected tab Id
// v-model bridge
const activeIds = computed({
  get: () => props.modelValue,
  set: (id: string) => emit("update:modelValue", id),
});

// Toggle a tab when being clicked
const toggleTab = (id: string) => {
  activeIds.value = id;
};
</script>

<template>
  <div class="flex gap-2">
    <Tab
      v-for="item in items"
      :key="item.id"
      :text="item.text"
      :isActive="activeIds === item.id"
      @select="toggleTab(item.id)"
    />
  </div>
</template>
