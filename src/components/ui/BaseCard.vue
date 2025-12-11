<script setup lang="ts">
const {
  hover = true
} = defineProps<{
  hover?: boolean
}>()
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
    :class="{ 'hover:shadow-md hover:border-gray-200 transition-all duration-300': hover }"
  >
    <slot />
  </div>
</template>
