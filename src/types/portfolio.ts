export interface Experience {
  id: string
  company: string
  position: string
  positionKey: string
  startDate: string
  endDate: string | null
  descriptionKey: string
  technologies: string[]
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

export interface Project {
  id: string
  titleKey: string
  descriptionKey: string
  technologies: string[]
  url?: string
}

export type Locale = 'de' | 'en'
