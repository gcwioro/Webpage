import type { Experience } from '@/types/portfolio'

export const experiences: Experience[] = [
  {
    id: 'freelance',
    company: 'Freelance',
    position: 'Freelance Software Engineer',
    positionKey: 'experience.positions.freelance.title',
    startDate: '2024',
    endDate: null,
    descriptionKey: 'experience.positions.freelance.description',
    technologies: ['.NET', 'Vue 3', 'TypeScript', 'API Design']
  },
  {
    id: 'autoletter',
    company: 'Autoletter.at',
    position: 'Founder',
    positionKey: 'experience.positions.autoletter.title',
    startDate: '2024',
    endDate: null,
    descriptionKey: 'experience.positions.autoletter.description',
    technologies: ['Full-Stack', 'Startup']
  },
  {
    id: 'timetoact',
    company: 'TimeToAct Group Austria',
    position: 'Senior Full-Stack Developer',
    positionKey: 'experience.positions.timetoact.title',
    startDate: '2024-05',
    endDate: null,
    descriptionKey: 'experience.positions.timetoact.description',
    technologies: ['.NET', 'Vue 3', 'TypeScript', 'DDD']
  },
  {
    id: 'trustbit',
    company: 'Trustbit GmbH',
    position: 'Senior Full-Stack Developer',
    positionKey: 'experience.positions.trustbit.title',
    startDate: '2022-05',
    endDate: '2024-05',
    descriptionKey: 'experience.positions.trustbit.description',
    technologies: ['C#', '.NET', 'Vue 3', 'TypeScript', 'DDD']
  },
  {
    id: 'kickscale',
    company: 'Kickscale GmbH',
    position: 'Lead Developer',
    positionKey: 'experience.positions.kickscale.title',
    startDate: '2021-04',
    endDate: '2022-04',
    descriptionKey: 'experience.positions.kickscale.description',
    technologies: ['React', 'TypeScript', 'Firebase', 'GitHub Actions']
  },
  {
    id: 'hex',
    company: 'Hex GmbH',
    position: 'Software Engineer',
    positionKey: 'experience.positions.hex.title',
    startDate: '2019-03',
    endDate: '2021-03',
    descriptionKey: 'experience.positions.hex.description',
    technologies: ['.NET Core', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'GCP']
  }
]
