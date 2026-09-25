export type ProjectCategory = 'front-end' | 'back-end' | 'mobile'

export interface Project {
  id: number
  title: string
  description: string
  href?: string
  detail?: {
    overview: string
    role: string
    document: string
    features: { title: string; description: string; image: string; page: number }[]
  }
  image: string
  alt: string
  category: ProjectCategory
}

export interface Skill {
  name: string
  percent: number
}

export interface Major {
  icon: string
  title: string
  stack: string
}
