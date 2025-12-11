<script setup lang="ts">
import type { Technology } from '@/types/portfolio'

const {
  name,
  proficiency = 'intermediate',
  icon = undefined,
  size = 'md',
} = defineProps<{
  name: string
  proficiency?: Technology['proficiency']
  icon?: string
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
    :class="[
      {
        'bg-accent/10 text-accent border border-accent/20': proficiency === 'expert',
        'bg-secondary/10 text-secondary border border-secondary/20': proficiency === 'advanced',
        'bg-gray-100 text-text-secondary border border-gray-200': proficiency === 'intermediate',
      },
      {
        'px-2 py-1 text-xs': size === 'sm',
        'px-3 py-1.5 text-sm': size === 'md',
        'px-4 py-2 text-base': size === 'lg',
      },
    ]"
  >
    <i
      v-if="icon"
      :class="[
        icon,
        {
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
        },
      ]"
    ></i>
    {{ name }}
  </span>
</template>
