<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useNavigationStore } from '@/stores/navigationStore'
import { useLocale } from '@/i18n'
import { storeToRefs } from 'pinia'

const { t } = useI18n()
const { locale, toggleLocale } = useLocale()
const navStore = useNavigationStore()
const { mobileMenuOpen } = storeToRefs(navStore)

const expandedSection = ref<string | null>(null)

const navItems = [
  {
    id: 'home',
    key: 'nav.home',
    to: '/',
    icon: 'fa-solid fa-home'
  },
  {
    id: 'about',
    key: 'nav.about',
    to: '/about',
    icon: 'fa-solid fa-user',
    subItems: [
      { key: 'nav.technologies', to: '/about#technologies', icon: 'fa-solid fa-code' },
      { key: 'nav.experience', to: '/about#experience', icon: 'fa-solid fa-briefcase' }
    ]
  },
  {
    id: 'services',
    key: 'nav.services',
    to: '/services',
    icon: 'fa-solid fa-cogs'
  },
  {
    id: 'projects',
    key: 'nav.projects',
    to: '/projects',
    icon: 'fa-solid fa-folder-open'
  },
  {
    id: 'contact',
    key: 'nav.contact',
    to: '/contact',
    icon: 'fa-solid fa-envelope'
  }
]

function toggleSection(id: string) {
  expandedSection.value = expandedSection.value === id ? null : id
}

function handleNavigation() {
  navStore.closeMobileMenu()
  expandedSection.value = null
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 max-h-[80vh] overflow-y-auto"
    >
      <nav class="flex flex-col p-4 space-y-1">
        <template v-for="item in navItems" :key="item.id">
          <div v-if="item.subItems">
            <button
              @click="toggleSection(item.id)"
              class="w-full flex items-center justify-between px-4 py-3 text-left text-text hover:bg-gray-50 rounded-lg transition-colors"
            >
              <span class="flex items-center gap-3">
                <i :class="item.icon" class="w-5 text-accent"></i>
                {{ t(item.key) }}
              </span>
              <i
                class="fa-solid fa-chevron-down text-xs text-text-secondary transition-transform duration-200"
                :class="{ 'rotate-180': expandedSection === item.id }"
              ></i>
            </button>

            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-40"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 max-h-40"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-if="expandedSection === item.id"
                class="overflow-hidden ml-4 border-l-2 border-accent/20"
              >
                <RouterLink
                  :to="item.to"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                  @click="handleNavigation"
                >
                  <i :class="item.icon" class="w-4 text-accent"></i>
                  {{ t('nav.overview') }}
                </RouterLink>
                <RouterLink
                  v-for="subItem in item.subItems"
                  :key="subItem.to"
                  :to="subItem.to"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                  @click="handleNavigation"
                >
                  <i :class="subItem.icon" class="w-4 text-accent"></i>
                  {{ t(subItem.key) }}
                </RouterLink>
              </div>
            </Transition>
          </div>

          <RouterLink
            v-else
            :to="item.to"
            class="flex items-center gap-3 px-4 py-3 text-left text-text hover:bg-gray-50 rounded-lg transition-colors"
            @click="handleNavigation"
          >
            <i :class="item.icon" class="w-5 text-accent"></i>
            {{ t(item.key) }}
          </RouterLink>
        </template>

        <div class="pt-3 border-t border-gray-100 mt-3">
          <button
            @click="toggleLocale"
            class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors"
          >
            <i class="fa-solid fa-globe"></i>
            <span>{{ locale === 'de' ? 'English' : 'Deutsch' }}</span>
          </button>
        </div>
      </nav>
    </div>
  </Transition>
</template>
