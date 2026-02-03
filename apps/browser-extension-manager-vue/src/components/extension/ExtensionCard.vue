<script setup lang="ts">
import { Card, Button, Switcher } from "@/components/ui";

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
      <Switcher :isActive="isActive" />
    </template>
  </Card>
</template>
