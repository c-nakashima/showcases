<script setup lang="ts">
import data from "../public/data.json";
import { ExtensionCard } from "@/components/extension";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEFBF9]">
    <div class="mx-auto max-w-6xl p-6">
      <!-- Header -->
      <header class="mb-6 flex items-center justify-between">
        <h1 class="text-3xl font-semibold">Extension List</h1>
      </header>

      <!-- Grid -->
      <div
        class="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
      >
        <li v-for="item in data">
          <ExtensionCard
            :logoPath="item.logoPath"
            :name="item.name"
            :description="item.description"
            :isActive="item.isActive"
          />
        </li>
      </div>
    </div>
  </div>
</template>
