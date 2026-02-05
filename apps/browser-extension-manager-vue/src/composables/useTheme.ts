import { computed, ref, watchEffect } from "vue";
import type { Theme } from "@/types";

// Theme related functions
export function useTheme() {
  const theme = ref<Theme>("light");
  // Flag to see if it is dark mode (for conditions)
  const isDark = computed(() => theme.value === "dark");

  // init: localStorage -> if none, follow OS preference
  const storageKey = "extension-manager:theme";
  const initTheme = () => {
    const savedTheme = localStorage.getItem(storageKey) as Theme | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      theme.value = savedTheme;
      return;
    }

    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    theme.value = prefersDark ? "dark" : "light";
  };

  // Apply the selected theme to <html>
  const apply = (t: Theme) => {
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  // Toggle theme + save
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, theme.value);
  };

  // Whenever theme changes, apply it
  watchEffect(() => apply(theme.value));

  return { theme, isDark, initTheme, toggleTheme };
}
