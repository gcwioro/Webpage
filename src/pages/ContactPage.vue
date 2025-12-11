<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'

const { t } = useI18n()

const contactInfo = {
  email: 'guenther@cwioro.online',
  phone: '+43 676 67 11 259',
  location: 'Villach, Austria',
}

const socialLinks = [
  {
    icon: 'fa-brands fa-linkedin-in',
    url: 'https://linkedin.com/in/guenther-cwioro',
    label: 'LinkedIn',
    color: 'bg-blue-600',
  },
  {
    icon: 'fa-brands fa-github',
    url: 'https://github.com/gcwioro',
    label: 'GitHub',
    color: 'bg-gray-800',
  },
]
</script>

<template>
  <div class="pt-20 min-h-screen bg-gradient-to-br from-background via-white to-blue-50">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold text-gradient mb-4">
            {{ t('contact.title') }}
          </h1>
          <p class="text-xl text-text-secondary max-w-2xl mx-auto">{{ t('contact.subtitle') }}</p>
          <div class="w-20 h-1 bg-gradient-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6 animate-fade-in-left">
            <p class="text-lg text-text-secondary">
              {{ t('contact.description') }}
            </p>

            <div class="space-y-4">
              <a
                :href="`mailto:${contactInfo.email}`"
                class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  class="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <i class="fa-solid fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <div class="text-sm text-text-secondary">{{ t('contact.email') }}</div>
                  <div class="font-medium text-primary">{{ contactInfo.email }}</div>
                </div>
              </a>

              <a
                :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`"
                class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  class="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <i class="fa-solid fa-phone text-white text-xl"></i>
                </div>
                <div>
                  <div class="text-sm text-text-secondary">{{ t('contact.phone') }}</div>
                  <div class="font-medium text-primary">{{ contactInfo.phone }}</div>
                </div>
              </a>

              <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                <div
                  class="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center"
                >
                  <i class="fa-solid fa-location-dot text-white text-xl"></i>
                </div>
                <div>
                  <div class="text-sm text-text-secondary">{{ t('contact.location') }}</div>
                  <div class="font-medium text-primary">{{ contactInfo.location }}</div>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <h3 class="text-lg font-semibold text-primary mb-4">Connect with me</h3>
              <div class="flex gap-3">
                <a
                  v-for="link in socialLinks"
                  :key="link.label"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 flex items-center justify-center rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  :class="link.color"
                  :aria-label="link.label"
                >
                  <i
                    :class="link.icon"
                    class="text-xl"
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div class="animate-fade-in-right">
            <BaseCard
              :hover="false"
              class="p-8"
            >
              <h3 class="text-xl font-bold text-primary mb-6">Send me a message</h3>

              <div class="space-y-6">
                <div class="text-center py-8">
                  <div
                    class="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <i class="fa-solid fa-paper-plane text-3xl text-accent"></i>
                  </div>
                  <p class="text-text-secondary mb-6">
                    Click the button below to open your email client with my address pre-filled.
                  </p>
                  <BaseButton
                    :href="`mailto:${contactInfo.email}?subject=Project Inquiry`"
                    size="lg"
                    class="w-full"
                  >
                    <i class="fa-solid fa-envelope mr-2"></i>
                    {{ t('contact.cta') }}
                  </BaseButton>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
