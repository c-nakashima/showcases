<script setup lang="ts">
import { computed } from 'vue'
import { TabGroup } from '@/components/ui'
import { ExtensionTabId } from '@/types/extension'

/**
 * Extension Tab Group component
 * - modelValue: active tab ids (v-model)
 */
const props = defineProps<{
  modelValue: ExtensionTabId
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: ExtensionTabId): void
}>()

// Tab options
const tabs = [
  { id: 'all', text: 'All' },
  { id: 'active', text: 'Active' },
  { id: 'inactive', text: 'Inactive' },
]

const activeTab = computed({
  get: () => props.modelValue,
  set: (value: ExtensionTabId) => emit('update:modelValue', value),
})
</script>

<template>
  <TabGroup v-model="activeTab" :items="tabs" />
</template>
