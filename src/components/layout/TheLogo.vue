<script setup lang="ts">
import { useScrollTo } from '@/composables/useScrollTo'

const { scrollToTop } = useScrollTo()
</script>

<template>
  <button
    @click="scrollToTop"
    class="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
  >
    <span class="text-primary">&lt;G</span><span class="text-gradient">Dev</span
    ><span class="text-primary">/&gt;</span>
  </button>
</template>
