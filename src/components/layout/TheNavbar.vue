<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute } from 'vue-router'
import { useNavigationStore } from '@/stores/navigationStore'
import { storeToRefs } from 'pinia'
import TheLogo from './TheLogo.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import MobileMenu from './MobileMenu.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()
const route = useRoute()
const navStore = useNavigationStore()
const { mobileMenuOpen } = storeToRefs(navStore)

const scrolled = ref(false)
const activeDropdown = ref<string | null>(null)

const navItems = [
  {
    id: 'about',
    key: 'nav.about',
    to: '/about',
    icon: 'fa-solid fa-user',
    hasDropdown: true,
    dropdownItems: [
      { key: 'nav.technologies', to: '/about#technologies', icon: 'fa-solid fa-code' },
      { key: 'nav.experience', to: '/about#experience', icon: 'fa-solid fa-briefcase' },
    ],
  },
  {
    id: 'services',
    key: 'nav.services',
    to: '/services',
    icon: 'fa-solid fa-cogs',
  },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function openDropdown(id: string) {
  activeDropdown.value = id
}

function closeDropdown() {
  activeDropdown.value = null
}

function isActiveRoute(to: string) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to.split('#')[0])
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <RouterLink
          to="/"
          class="hover:opacity-80 transition-opacity"
        >
          <TheLogo />
        </RouterLink>

        <nav class="hidden md:flex items-center space-x-1">
          <div
            v-for="item in navItems"
            :key="item.id"
            class="relative"
            @mouseenter="item.hasDropdown && openDropdown(item.id)"
            @mouseleave="closeDropdown"
          >
            <RouterLink
              :to="item.to"
              class="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg"
              :class="
                isActiveRoute(item.to)
                  ? 'text-accent bg-accent/10'
                  : 'text-text-secondary hover:text-primary hover:bg-gray-50'
              "
            >
              <i
                :class="item.icon"
                class="text-xs"
              ></i>
              {{ t(item.key) }}
              <i
                v-if="item.hasDropdown"
                class="fa-solid fa-chevron-down text-xs transition-transform duration-200"
                :class="{ 'rotate-180': activeDropdown === item.id }"
              ></i>
            </RouterLink>

            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 -translate-y-2 scale-95"
            >
              <div
                v-if="item.hasDropdown && activeDropdown === item.id"
                class="absolute top-full left-0 pt-2"
              >
                <div
                  class="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] overflow-hidden"
                >
                  <RouterLink
                    v-for="dropdownItem in item.dropdownItems"
                    :key="dropdownItem.to"
                    :to="dropdownItem.to"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                    @click="closeDropdown"
                  >
                    <i
                      :class="dropdownItem.icon"
                      class="w-4 text-accent"
                    ></i>
                    {{ t(dropdownItem.key) }}
                  </RouterLink>
                </div>
              </div>
            </Transition>
          </div>
        </nav>

        <div class="hidden md:flex items-center space-x-3">
          <LanguageSwitcher />
          <RouterLink to="/contact">
            <BaseButton size="sm">
              <i class="fa-solid fa-envelope mr-2"></i>
              {{ t('nav.contact') }}
            </BaseButton>
          </RouterLink>
        </div>

        <button
          class="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
          @click="navStore.toggleMobileMenu()"
        >
          <i
            :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
            class="text-xl"
          ></i>
        </button>
      </div>
    </div>

    <MobileMenu />
  </header>
</template>
