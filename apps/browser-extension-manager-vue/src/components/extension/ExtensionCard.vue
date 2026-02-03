<script setup lang="ts">
import { Card, Button } from "@/components/ui";

/**
 * Extension card component
 * - logoPath: Extension logo image path
 * - name: Extension name
 * - description: Description text
 * - isActive: Whether the extension is enabled (toggle state)
 */
interface Props {
  logoPath: string;
  name: string;
  description: string;
  isActive: boolean;
}

defineProps<Props>();
</script>

<template>
  <Card class="h-[200px] bg-white">
    <template #header>
      <div class="flex gap-4">
        <img
          class="min-w-[60px] min-h-[60px] w-[60px] h-[60px]"
          :src="logoPath"
          alt="Extension logo"
        />
        <div>
          <div class="font-bold text-xl mb-2">{{ name }}</div>
          <p class="text-neutral-600 text-base font-sans">
            {{ description }}
          </p>
        </div>
      </div>
    </template>

    <template #footer-left>
      <Button text="Remove" />
    </template>

    <template #footer-right>
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
  </Card>
</template>
