export type ProjectCategory = 'front-end' | 'back-end' | 'mobile'

export interface Project {
  id: number
  title: string
  description: string
  href?: string
  cover?: { eyebrow: string; title: string; caption: string }
  label?: string
  actionLabel?: string
  detail?: {
    overview: string
    role: string
    document?: string
    officialUrl?: string
    facts?: { label: string; value: string }[]
    sections?: { title: string; description: string }[]
    notice?: string
    features?: { title: string; description: string; image: string; page: number }[]
  }
  image?: string
  alt?: string
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
