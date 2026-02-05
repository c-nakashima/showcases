<script setup lang="ts">
/**
 * Header component
 * - isDark: Whether the theme is Dark or not
 */
interface Props {
  isDark: boolean
}
defineProps<Props>()

// When the theme switch button is clicked,
// fire toggle Theme and deliver to the parent component
const emit = defineEmits<{
  (e: 'toggleTheme'): void
}>()

const onToggleTheme = () => emit('toggleTheme')
</script>

<template>
  <!-- Header -->
  <header
    class="flex justify-between bg-white rounded rounded-2xl p-4 mb-16 dark:bg-neutral-800"
  >
    <img
      :src="`/public/assets/images/${isDark ? 'logo-dark' : 'logo'}.svg`"
      alt="extensions logo"
      class="w-[180px]"
    />
    <div
      class="bg-neutral-100 rounded rounded-[12px] w-[50px] h-[50px] p-[14px] cursor-pointer hover:bg-neutral-200 dark:bg-neutral-700 hover:dark:bg-neutral-600"
      @click="onToggleTheme"
      aria-label="Toggle theme"
    >
      <img
        :src="`/public/assets/images/icon-${isDark ? 'sun' : 'moon'}.svg`"
        alt="extensions logo"
        class="w-[180px]"
      />
    </div>
  </header>
</template>
