<script setup lang="ts">
import { useLocale } from '@/i18n'

const { locale, toggleLocale } = useLocale()
</script>

<template>
  <button
    @click="toggleLocale"
    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-text-secondary"
  >
    <i class="fa-solid fa-globe"></i>
    <span class="uppercase">{{ locale }}</span>
  </button>
</template>
