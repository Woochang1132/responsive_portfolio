export type ProjectCategory = 'front-end' | 'back-end' | 'mobile'

export interface Project {
  id: number
  title: string
  description: string
  href: string
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
