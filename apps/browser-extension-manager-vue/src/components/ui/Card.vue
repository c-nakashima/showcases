<script setup lang="ts">
/**
 * Props definition for the extension card component
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
  <div
    class="flex flex-col justify-between rounded rounded-[20px] overflow-hidden shadow-md max-w-[382px] min-h-[200px] h-[200px] p-5"
  >
    <div class="flex gap-4">
      <div
        class="rounded rounded-[10px] bg-[#F1C0E8] min-w-[60px] min-h-[60px] w-[60px] h-[60px] p-4"
      >
        <img class="w-full" :src="logoPath" alt="Sunset in the mountains" />
      </div>
      <div>
        <div class="font-bold text-xl mb-2">{{ name }}</div>
        <p class="text-neutral-600 text-base font-sans">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <button
        className="bg-white border border-neutral-300 text-neutral-700
            py-2 px-4 rounded-full
            hover:bg-neutral-50 transition"
      >
        Remove
      </button>

      <div class="relative inline-block w-11 h-5">
        <input
          :checked="isActive"
          id="switch-component-1"
          type="checkbox"
          class="peer appearance-none w-11 h-6 bg-neutral-300 rounded-full checked:bg-red-700 cursor-pointer transition-colors duration-300"
        />
        <label
          for="switch-component-1"
          class="absolute top-0 left-0 w-6 h-6 bg-white rounded-full border border-2 border-neutral-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-red-700 cursor-pointer"
        >
        </label>
      </div>
    </div>
  </div>
</template>
