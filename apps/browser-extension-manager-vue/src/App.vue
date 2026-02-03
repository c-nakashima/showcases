<script setup lang="ts">
import { Card } from "@/components/ui";
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-6xl p-6">
      <!-- Header -->
      <header class="mb-6 flex items-center justify-between">
        <h1 class="text-xl font-semibold">Extension List</h1>
      </header>

      <!-- Grid -->
      <div
        class="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
      >
        <Card
          logoPath="../../../public/assets/images/icon-moon.svg"
          name="JSONWizard"
          description="Formats, validates, and prettifies JSON responses in-browser."
          :isActive="true"
        />
      </div>
    </div>
  </div>
</template>
