<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { educations } from '@/data/education'
</script>

<template>
  <section
    id="education"
    class="py-20 bg-gray-50"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading title-key="education.title" />

      <div class="max-w-3xl mx-auto">
        <div class="space-y-8">
          <div
            v-for="(education, index) in educations"
            :key="index"
            class="p-6 bg-white rounded-lg shadow-md"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold text-text-primary">
                {{ education.institution }}
              </h3>
              <div class="text-sm text-text-secondary">
                {{ education.startDate }} - {{ education.endDate }}
              </div>
            </div>
            <p class="mt-2 text-text-secondary">
              {{ education.degree }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
