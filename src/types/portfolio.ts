export interface Experience {
  id: string
  company: string
  position: string
  positionKey: string
  startDate: string
  endDate: string | null
  descriptionKey: string
  technologies: string[]
  fullDescriptionKey?: string
  highlights?: string[]
  awards?: { titleKey: string; descriptionKey: string; logo?: string }[]
  links?: { label: string; url: string }[]
  badge?: { type: 'isef' | 'award'; label: string }
}

export interface Education {
  institution: string
  degree: string
  startDate: string
  endDate: string
}

export interface Service {
  id: string
  titleKey: string
  descriptionKey: string
  icon: string
}

export interface Technology {
  name: string
  category: 'frontend' | 'backend' | 'cloud' | 'methods'
  icon?: string
  proficiency: 'expert' | 'advanced' | 'intermediate'
}

export type Locale = 'de' | 'en'
