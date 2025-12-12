<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeoMeta } from '@/seo/meta'
import { useStructuredData } from '@/seo/schema'
import type { Locale } from '@/types/portfolio'

import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

const { locale } = useI18n()
const typedLocale = computed(() => locale.value as Locale)

useSeoMeta(typedLocale)
useStructuredData()
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar class="no-print" />

    <RouterView v-slot="{ Component, route }">
      <Transition
        name="page"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </Transition>
    </RouterView>

    <TheFooter class="no-print" />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.page-enter-active,
.page-leave-active {
  @apply transition-all duration-300 ease-out;
}

.page-enter-from {
  @apply opacity-0 translate-y-4;
}

.page-enter-to {
  @apply opacity-100 translate-y-0;
}

.page-leave-from {
  @apply opacity-100 translate-y-0;
}

.page-leave-to {
  @apply opacity-0 -translate-y-4;
}
</style>
