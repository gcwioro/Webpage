<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScrollTo } from '@/composables/useScrollTo'

const { t } = useI18n()
const { scrollToTop } = useScrollTo()

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    icon: 'fa-brands fa-linkedin-in',
    url: 'https://linkedin.com/in/guenther-cwioro',
    label: 'LinkedIn',
  },
  { icon: 'fa-brands fa-github', url: 'https://github.com/gcwioro', label: 'GitHub' },
]
</script>

<template>
  <footer class="bg-primary text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex flex-col items-center md:items-start gap-3">
          <div class="text-2xl font-bold">
            <span class="text-white">&lt;G</span><span class="text-gradient">Dev</span
            ><span class="text-white">/&gt;</span>
          </div>
          <p class="text-gray-400 text-sm">{{ t('footer.built_with') }}</p>
        </div>

        <div class="flex items-center gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-accent transition-colors"
            :aria-label="link.label"
          >
            <i :class="link.icon"></i>
          </a>
        </div>

        <button
          @click="scrollToTop"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-accent transition-colors"
          aria-label="Back to top"
        >
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>

      <div class="mt-8 pt-8 border-t border-white/10 text-center">
        <p class="text-gray-400 text-sm">
          &copy; {{ currentYear }} Günther Cwioro. {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>
