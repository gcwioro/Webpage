<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import { services } from '@/data/services'
</script>

<template>
  <section id="services" class="py-20 bg-background">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading title-key="services.title" subtitle-key="services.subtitle" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :title-key="service.titleKey"
          :description-key="service.descriptionKey"
          :icon="service.icon"
        />
      </div>
    </div>
  </section>
</template>
