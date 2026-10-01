<script setup lang="ts">
import Button from 'primevue/button'
import { useDarkMode } from '@/composables/useDarkMode'
const { isDark, toggle } = useDarkMode()
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <Button label="Probando PrimeVue 4" />
  <h1 class="text-3xl font-bold text-primary">Tailwind + PrimeVue</h1>
  <Button label="Normal" />
  <Button label="Pisado con Tailwind" class="ml-4 rounded-full bg-red-500 border-red-500" />
  <Button
    :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
    :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
    severity="secondary"
    rounded
    text
    @click="toggle"
  />
</template>

<style scoped></style>
