import type { Technology } from '@/types/portfolio'

export interface TechnologyWithIcon extends Technology {
  icon: string
  iconType: 'devicon' | 'fontawesome'
}

export const technologies: TechnologyWithIcon[] = [
  { name: 'Vue.js', category: 'frontend', proficiency: 'expert', icon: 'devicon-vuejs-plain colored', iconType: 'devicon' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'expert', icon: 'devicon-typescript-plain colored', iconType: 'devicon' },
  { name: 'React', category: 'frontend', proficiency: 'advanced', icon: 'devicon-react-original colored', iconType: 'devicon' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'expert', icon: 'devicon-tailwindcss-original colored', iconType: 'devicon' },
  { name: 'JavaScript', category: 'frontend', proficiency: 'expert', icon: 'devicon-javascript-plain colored', iconType: 'devicon' },
  { name: 'HTML5', category: 'frontend', proficiency: 'expert', icon: 'devicon-html5-plain colored', iconType: 'devicon' },
  { name: 'CSS3', category: 'frontend', proficiency: 'expert', icon: 'devicon-css3-plain colored', iconType: 'devicon' },

  { name: '.NET / C#', category: 'backend', proficiency: 'expert', icon: 'devicon-dotnetcore-plain colored', iconType: 'devicon' },
  { name: 'Node.js', category: 'backend', proficiency: 'advanced', icon: 'devicon-nodejs-plain colored', iconType: 'devicon' },
  { name: 'Firebase', category: 'backend', proficiency: 'advanced', icon: 'devicon-firebase-plain colored', iconType: 'devicon' },
  { name: 'MongoDB', category: 'backend', proficiency: 'advanced', icon: 'devicon-mongodb-plain colored', iconType: 'devicon' },
  { name: 'PostgreSQL', category: 'backend', proficiency: 'advanced', icon: 'devicon-postgresql-plain colored', iconType: 'devicon' },
  { name: 'Redis', category: 'backend', proficiency: 'intermediate', icon: 'devicon-redis-plain colored', iconType: 'devicon' },

  { name: 'Google Cloud', category: 'cloud', proficiency: 'advanced', icon: 'devicon-googlecloud-plain colored', iconType: 'devicon' },
  { name: 'Docker', category: 'cloud', proficiency: 'advanced', icon: 'devicon-docker-plain colored', iconType: 'devicon' },
  { name: 'Kubernetes', category: 'cloud', proficiency: 'intermediate', icon: 'devicon-kubernetes-plain colored', iconType: 'devicon' },
  { name: 'GitHub Actions', category: 'cloud', proficiency: 'advanced', icon: 'devicon-githubactions-plain colored', iconType: 'devicon' },
  { name: 'Azure', category: 'cloud', proficiency: 'intermediate', icon: 'devicon-azure-plain colored', iconType: 'devicon' },
  { name: 'Git', category: 'cloud', proficiency: 'expert', icon: 'devicon-git-plain colored', iconType: 'devicon' },

  { name: 'Domain-Driven Design', category: 'methods', proficiency: 'expert', icon: 'fa-solid fa-sitemap', iconType: 'fontawesome' },
  { name: 'System Architecture', category: 'methods', proficiency: 'expert', icon: 'fa-solid fa-diagram-project', iconType: 'fontawesome' },
  { name: 'Microservices', category: 'methods', proficiency: 'advanced', icon: 'fa-solid fa-cubes', iconType: 'fontawesome' },
  { name: 'Unit Testing', category: 'methods', proficiency: 'expert', icon: 'fa-solid fa-vial', iconType: 'fontawesome' },
  { name: 'Agile/Scrum', category: 'methods', proficiency: 'expert', icon: 'fa-solid fa-arrows-spin', iconType: 'fontawesome' }
]

export function getTechnologiesByCategory(category: TechnologyWithIcon['category']): TechnologyWithIcon[] {
  return technologies.filter(t => t.category === category)
}
