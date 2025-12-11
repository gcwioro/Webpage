import type { Service } from '@/types/portfolio'

export const services: Service[] = [
  {
    id: 'backend',
    titleKey: 'services.backend.title',
    descriptionKey: 'services.backend.description',
    icon: 'fa-solid fa-server',
  },
  {
    id: 'frontend',
    titleKey: 'services.frontend.title',
    descriptionKey: 'services.frontend.description',
    icon: 'fa-solid fa-desktop',
  },
  {
    id: 'architecture',
    titleKey: 'services.architecture.title',
    descriptionKey: 'services.architecture.description',
    icon: 'fa-solid fa-sitemap',
  },
  {
    id: 'consulting',
    titleKey: 'services.consulting.title',
    descriptionKey: 'services.consulting.description',
    icon: 'fa-solid fa-comments',
  },
]
