import { useHead } from '@unhead/vue'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Günther Cwioro',
  jobTitle: 'Full-Stack Software Engineer',
  email: 'guenther@cwioro.online',
  telephone: '+43 676 67 11 259',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Meister Friedrich Straße 22/1',
    addressLocality: 'Villach',
    postalCode: '9500',
    addressCountry: 'Austria'
  },
  url: 'https://cwioro.online',
  sameAs: [
    'https://linkedin.com/in/guenther-cwioro',
    'https://github.com/gcwioro'
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Alpen-Adria University of Klagenfurt'
  },
  knowsAbout: [
    'Vue.js',
    '.NET',
    'TypeScript',
    'System Architecture',
    'Domain-Driven Design',
    'Cloud Computing',
    'API Design'
  ]
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Günther Cwioro - Software Development',
  description: 'Freelance Full-Stack Software Development Services',
  provider: {
    '@type': 'Person',
    name: 'Günther Cwioro'
  },
  areaServed: ['Austria', 'Europe'],
  serviceType: [
    'Software Development',
    'Backend Development',
    'Frontend Development',
    'System Architecture',
    'Technical Consulting'
  ],
  url: 'https://cwioro.online'
}

export function useStructuredData() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(personSchema)
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(professionalServiceSchema)
      }
    ]
  })
}
