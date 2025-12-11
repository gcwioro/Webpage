<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'

const { t } = useI18n()

const contactInfo = {
  email: 'guenther@cwioro.online',
  phone: '+43 676 67 11 259',
  location: 'Villach, Austria',
}
</script>

<template>
  <section
    id="contact"
    class="py-20 bg-background"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title-key="contact.title"
        subtitle-key="contact.subtitle"
      />

      <div class="max-w-2xl mx-auto">
        <p class="text-center text-text-secondary mb-10">
          {{ t('contact.description') }}
        </p>

        <BaseCard
          :hover="false"
          class="text-center"
        >
          <div class="space-y-6">
            <div class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <i class="fa-solid fa-envelope text-accent text-xl"></i>
              </div>
              <span class="text-sm text-text-secondary">{{ t('contact.email') }}</span>
              <a
                :href="`mailto:${contactInfo.email}`"
                class="text-primary font-medium hover:text-accent transition-colors"
              >
                {{ contactInfo.email }}
              </a>
            </div>

            <div class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <i class="fa-solid fa-phone text-accent text-xl"></i>
              </div>
              <span class="text-sm text-text-secondary">{{ t('contact.phone') }}</span>
              <a
                :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`"
                class="text-primary font-medium hover:text-accent transition-colors"
              >
                {{ contactInfo.phone }}
              </a>
            </div>

            <div class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <i class="fa-solid fa-location-dot text-accent text-xl"></i>
              </div>
              <span class="text-sm text-text-secondary">{{ t('contact.location') }}</span>
              <span class="text-primary font-medium">{{ contactInfo.location }}</span>
            </div>

            <div class="pt-6">
              <BaseButton
                :href="`mailto:${contactInfo.email}`"
                size="lg"
              >
                <i class="fa-solid fa-paper-plane mr-2"></i>
                {{ t('contact.cta') }}
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
