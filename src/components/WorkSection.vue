<script setup lang="ts">
import { computed, ref } from 'vue'

import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/types'

type CategoryKey = 'all' | ProjectCategory

const categories: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'front-end', label: 'Front-end' },
  { key: 'back-end', label: 'Back-end' },
  { key: 'mobile', label: 'Mobile' },
]

const selected = ref<CategoryKey>('all')
const isAnimating = ref(false)
let animationTimer: number | undefined

const filteredProjects = computed(() =>
  selected.value === 'all' ? projects : projects.filter((p) => p.category === selected.value),
)

function countFor(key: CategoryKey): number {
  return key === 'all' ? projects.length : projects.filter((p) => p.category === key).length
}

function selectCategory(key: CategoryKey) {
  if (key === selected.value) return
  selected.value = key
  isAnimating.value = true
  if (animationTimer) window.clearTimeout(animationTimer)
  animationTimer = window.setTimeout(() => {
    isAnimating.value = false
  }, 250)
}
</script>

<template>
  <section id="work" class="section">
    <div class="max-container">
      <header class="section-heading">
        <p class="eyebrow">03 / PROJECTS</p>
        <h2 class="title">코드로 만든 경험들</h2>
        <p class="description">직접 구현하고 개선해 온 프로젝트를 소개합니다.</p>
      </header>

      <ul class="categories">
        <li v-for="category in categories" :key="category.key" :class="`category__${category.key}`">
          <button
            class="category"
            :class="{ 'category--selected': selected === category.key }"
            :aria-pressed="selected === category.key"
            @click="selectCategory(category.key)"
          >
            {{ category.label }}
            <span class="category__count">{{ countFor(category.key) }}</span>
          </button>
        </li>
      </ul>

      <ul class="projects" :class="{ 'anim-out': isAnimating }">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </ul>
      <p v-if="filteredProjects.length === 0" class="projects__empty" role="status">이 분류에는 아직 등록된 프로젝트가 없습니다.</p>
    </div>
  </section>
</template>
