<script setup lang="ts">
import { ref } from "vue";
import { TabGroup } from "@/components/ui";
import { ExtensionTabId } from "@/types/extension";

/**
 * Extension Tab Group component
 * - modelValue: active tab ids (v-model)
 */
defineProps<{
  modelValue: ExtensionTabId[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: ExtensionTabId[]): void;
}>();

// Tab options
const tabs = [
  { id: "all", text: "All" },
  { id: "active", text: "Active" },
  { id: "inactive", text: "Inactive" },
];

// Currently active tabs
const activeTabs = ref<string[]>(["active"]);
</script>

<template>
  <TabGroup v-model="activeTabs" :items="tabs" />
</template>
