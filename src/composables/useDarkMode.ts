import { ref } from 'vue'

const DARK_CLASS = 'dark'
const STORAGE_KEY = 'theme'

const isDark = ref(document.documentElement.classList.contains(DARK_CLASS))

export function useDarkMode() {
  function toggle() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle(DARK_CLASS, isDark.value)
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }

  return { isDark, toggle }
}
