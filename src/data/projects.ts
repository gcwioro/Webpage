import type { Project } from '@/types/portfolio'

export interface ProjectDetail extends Project {
  fullDescriptionKey: string
  highlights?: string[]
  year: string
  role: string
  awards?: { titleKey: string; descriptionKey: string; logo?: string }[]
  links?: { label: string; url: string }[]
  badge?: { type: 'isef' | 'award'; label: string }
}

export const projects: ProjectDetail[] = [
  {
    id: 'adhoc-routing',
    titleKey: 'projects.adhoc.title',
    descriptionKey: 'projects.adhoc.description',
    fullDescriptionKey: 'projects.adhoc.fullDescription',
    technologies: ['C++', 'ROS', 'Linux', 'Network Programming', 'Layer 2'],
    year: '2014',
    role: 'Lead Developer (High School)',
    badge: { type: 'isef', label: 'Intel ISEF Finalist' },
    awards: [
      {
        titleKey: 'projects.adhoc.awards.jugendinnovativ.title',
        descriptionKey: 'projects.adhoc.awards.jugendinnovativ.description',
        logo: '/images/jugendinnovativ-logo.png',
      },
      {
        titleKey: 'projects.adhoc.awards.isef.title',
        descriptionKey: 'projects.adhoc.awards.isef.description',
        logo: '/images/intel-isef-logo.png',
      },
    ],
    links: [
      { label: 'ROS Wiki', url: 'https://wiki.ros.org/adhoc_communication' },
      { label: 'GitHub', url: 'https://github.com/aau-ros/adhoc_communication' },
      { label: 'NES Award Article', url: 'https://nes.aau.at/?p=6419' },
    ],
    highlights: [
      'projects.adhoc.highlights.0',
      'projects.adhoc.highlights.1',
      'projects.adhoc.highlights.2',
      'projects.adhoc.highlights.3',
    ],
  },
  {
    id: 'autoletter',
    titleKey: 'projects.autoletter.title',
    descriptionKey: 'projects.autoletter.description',
    fullDescriptionKey: 'projects.autoletter.fullDescription',
    technologies: ['Vue 3', 'TypeScript', '.NET', 'C#', 'PostgreSQL', 'Docker'],
    url: 'https://autoletter.at',
    year: '2024',
    role: 'Founder & Full-Stack Developer',
    highlights: [
      'projects.autoletter.highlights.0',
      'projects.autoletter.highlights.1',
      'projects.autoletter.highlights.2',
    ],
  },
  {
    id: 'noborder',
    titleKey: 'projects.noborder.title',
    descriptionKey: 'projects.noborder.description',
    fullDescriptionKey: 'projects.noborder.fullDescription',
    technologies: ['.NET', 'Vue 3', 'TypeScript', 'REST APIs', 'SQL Server'],
    year: '2024',
    role: 'Senior Full-Stack Developer',
    highlights: [
      'projects.noborder.highlights.0',
      'projects.noborder.highlights.1',
      'projects.noborder.highlights.2',
    ],
  },
  {
    id: 'trustbit-ddd',
    titleKey: 'projects.trustbit.title',
    descriptionKey: 'projects.trustbit.description',
    fullDescriptionKey: 'projects.trustbit.fullDescription',
    technologies: ['C#', '.NET', 'Vue 3', 'TypeScript', 'DDD', 'Event Sourcing', 'CQRS'],
    year: '2022-2024',
    role: 'Senior Full-Stack Developer',
    highlights: [
      'projects.trustbit.highlights.0',
      'projects.trustbit.highlights.1',
      'projects.trustbit.highlights.2',
    ],
  },
  {
    id: 'kickscale',
    titleKey: 'projects.kickscale.title',
    descriptionKey: 'projects.kickscale.description',
    fullDescriptionKey: 'projects.kickscale.fullDescription',
    technologies: [
      'React',
      'TypeScript',
      'Firebase',
      'Node.js',
      'Cloud Functions',
      'GitHub Actions',
    ],
    year: '2021-2022',
    role: 'Lead Developer',
    highlights: [
      'projects.kickscale.highlights.0',
      'projects.kickscale.highlights.1',
      'projects.kickscale.highlights.2',
    ],
  },
  {
    id: 'saraas',
    titleKey: 'projects.saraas.title',
    descriptionKey: 'projects.saraas.description',
    fullDescriptionKey: 'projects.saraas.fullDescription',
    technologies: ['Optimization', 'Algorithms', 'Scheduling', 'Routing', 'SaaS'],
    year: '2018-2019',
    role: 'Co-Founder & Developer',
    links: [
      { label: 'arXiv Paper', url: 'https://arxiv.org/abs/1805.00448' },
      {
        label: 'University Project Page',
        url: 'https://campus.uni-klu.ac.at/cris/project/0f4de0c66b0c7bfb016b0ce750980002',
      },
    ],
    highlights: [
      'projects.saraas.highlights.0',
      'projects.saraas.highlights.1',
      'projects.saraas.highlights.2',
    ],
  },
  {
    id: 'satalia-vrp',
    titleKey: 'projects.satalia.title',
    descriptionKey: 'projects.satalia.description',
    fullDescriptionKey: 'projects.satalia.fullDescription',
    technologies: ['Java 8', 'Optimization', 'Algorithms', 'Heuristics', 'VRP'],
    year: '2016-2017',
    role: 'Backend Developer',
    highlights: [
      'projects.satalia.highlights.0',
      'projects.satalia.highlights.1',
      'projects.satalia.highlights.2',
    ],
  },
  {
    id: 'bitmoving-video',
    titleKey: 'projects.bitmoving.title',
    descriptionKey: 'projects.bitmoving.description',
    fullDescriptionKey: 'projects.bitmoving.fullDescription',
    technologies: ['Java', 'Python', 'C++', 'MPEG-DASH', 'HLS', 'Cloud Encoding'],
    year: '2014-2015',
    role: 'Software Developer',
    highlights: [
      'projects.bitmoving.highlights.0',
      'projects.bitmoving.highlights.1',
      'projects.bitmoving.highlights.2',
    ],
  },
  {
    id: 'hex-optimization',
    titleKey: 'projects.optimization.title',
    descriptionKey: 'projects.optimization.description',
    fullDescriptionKey: 'projects.optimization.fullDescription',
    technologies: ['.NET Core', 'GCP', 'Kubernetes', 'Docker', 'Microservices'],
    year: '2019-2021',
    role: 'Software Engineer',
    highlights: [
      'projects.optimization.highlights.0',
      'projects.optimization.highlights.1',
      'projects.optimization.highlights.2',
    ],
  },
]

export function getProjectById(id: string): ProjectDetail | undefined {
  return projects.find((p) => p.id === id)
}
