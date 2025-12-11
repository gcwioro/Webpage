<script setup lang="ts">
const {
  variant = 'primary',
  size = 'md',
  href = undefined
} = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    :class="[
      {
        'bg-primary text-white hover:bg-secondary': variant === 'primary',
        'bg-accent text-white hover:bg-blue-600': variant === 'secondary',
        'border-2 border-primary text-primary hover:bg-primary hover:text-white': variant === 'outline'
      },
      {
        'px-4 py-2 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg'
      }
    ]"
  >
    <slot />
  </component>
</template>
