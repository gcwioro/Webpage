<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { experiences } from '@/data/experience'
</script>

<template>
  <section id="experience" class="py-20 bg-background">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading title-key="experience.title" subtitle-key="experience.subtitle" />

      <div class="max-w-3xl mx-auto">
        <TimelineItem
          v-for="exp in experiences"
          :key="exp.id"
          :company="exp.company"
          :position-key="exp.positionKey"
          :start-date="exp.startDate"
          :end-date="exp.endDate"
          :description-key="exp.descriptionKey"
          :technologies="exp.technologies"
        />
      </div>
    </div>
  </section>
</template>
