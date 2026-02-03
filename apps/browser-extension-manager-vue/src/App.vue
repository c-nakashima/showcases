<script setup lang="ts">
import { ref } from "vue";
import data from "../public/data.json";
import { ExtensionCard, ExtensionTabGroup } from "@/components/extension";
import { ExtensionTabId } from "@/types/extension";

// Currently active tabs
const activeTabs = ref<ExtensionTabId[]>(["active"]);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEFBF9]">
    <div class="mx-auto max-w-6xl p-6">
      <!-- Header -->
      <h1 class="flex justify-between bg-white rounded rounded-2xl p-4 mb-16">
        <img
          src="../public/assets/images/logo.svg"
          alt="extensions logo"
          class="w-[180px]"
        />
        <div
          class="bg-neutral-100 rounded rounded-[12px] w-[50px] h-[50px] p-[14px]"
        >
          <img
            src="../public/assets/images/icon-moon.svg"
            alt="extensions logo"
            class="w-[180px]"
          />
        </div>
      </h1>

      <!-- Contents -->
      <header class="mb-6 flex items-center justify-between">
        <h2 class="text-3xl font-semibold">Extension List</h2>
        <ExtensionTabGroup v-model="activeTabs" />
      </header>

      <!-- Grid -->
      <div
        class="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
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
