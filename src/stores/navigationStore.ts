import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const activeSection = ref('hero')
  const mobileMenuOpen = ref(false)

  function setActiveSection(section: string) {
    activeSection.value = section
  }

  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  function closeMobileMenu() {
    mobileMenuOpen.value = false
  }

  return {
    activeSection,
    mobileMenuOpen,
    setActiveSection,
    toggleMobileMenu,
    closeMobileMenu
  }
})
