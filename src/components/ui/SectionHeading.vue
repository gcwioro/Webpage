<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const {
  titleKey,
  subtitleKey = undefined
} = defineProps<{
  titleKey: string
  subtitleKey?: string
}>()
</script>

<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-3">{{ t(titleKey) }}</h2>
    <p v-if="subtitleKey" class="text-text-secondary text-lg">{{ t(subtitleKey) }}</p>
    <div class="w-20 h-1 bg-gradient-accent mx-auto mt-4 rounded-full"></div>
  </div>
</template>
