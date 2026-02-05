<script setup lang="ts">
import { onMounted, ref } from "vue";
import data from "../public/data.json";
import { ExtensionTabId } from "@/types/extension";
import { useTheme } from "@/composables/useTheme";
//components
import { ExtensionCard, ExtensionTabGroup } from "@/components/extension";
import { Header } from "@/components/layout";

// Currently active tabs
const activeTabs = ref<ExtensionTabId[]>(["active"]);
// Theme related variables/functions
const { isDark, initTheme, toggleTheme } = useTheme();
// When the component is mounted, initialize the theme
onMounted(() => initTheme());
initTheme();
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEFBF9] dark:bg-gradient-to-b dark:from-[#04091B] dark:to-[#091540]"
  >
    <div class="mx-auto max-w-6xl p-6">
      <!-- Header -->
      <Header :isDark @toggleTheme="toggleTheme" />

      <!-- Contents -->
      <div
        class="flex flex-col gap-4 mb-6 items-center sm:flex-row sm:justify-between sm:gap-6"
      >
        <h1 class="text-3xl font-semibold dark:text-white">Extension List</h1>
        <ExtensionTabGroup v-model="activeTabs" />
      </div>

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
