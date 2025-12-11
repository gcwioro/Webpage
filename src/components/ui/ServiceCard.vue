<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseCard from './BaseCard.vue'

const { t } = useI18n()

const {
  titleKey,
  descriptionKey,
  icon
} = defineProps<{
  titleKey: string
  descriptionKey: string
  icon: string
}>()
</script>

<template>
  <BaseCard class="text-center">
    <div class="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
      <i :class="icon" class="text-2xl text-accent"></i>
    </div>
    <h3 class="text-lg font-semibold text-primary mb-2">{{ t(titleKey) }}</h3>
    <p class="text-text-secondary text-sm">{{ t(descriptionKey) }}</p>
  </BaseCard>
</template>
