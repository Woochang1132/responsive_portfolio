<script setup lang="ts">
import type { Project } from '@/types'
import { asset } from '@/utils/asset'

defineProps<{
  project: Project
}>()
</script>

<template>
  <li class="project">
    <a :href="project.href" target="_blank" rel="noopener">
      <img :src="asset(project.image)" :alt="project.alt" class="project__img" />
      <div class="project__metadata">
        <h3 class="project__title">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </a>
  </li>
</template>
