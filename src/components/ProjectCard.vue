<script setup lang="ts">
import type { Project } from '@/types';
import { asset } from '@/utils/asset';
import ProjectDetail from '@/components/ProjectDetail.vue';
import { ref } from 'vue';

const detailView = ref<InstanceType<typeof ProjectDetail>>();

defineProps<{
  project: Project;
}>();
</script>

<template>
  <li class="project">
    <button
      v-if="project.detail"
      class="project__open"
      @click="detailView?.open()"
      :aria-label="`${project.title} ${project.actionLabel ?? '프로젝트 상세 보기'}`"
    >
      <img
        v-if="project.image"
        :src="asset(project.image)"
        :alt="project.alt"
        class="project__img"
        loading="lazy"
      />
      <div v-else-if="project.cover" class="project__text-cover" aria-hidden="true">
        <span>{{ project.cover.eyebrow }}</span>
        <strong>{{ project.cover.title }}</strong>
        <small>{{ project.cover.caption }}</small>
      </div>
      <div class="project__summary">
        <span class="project__label">{{ project.label ?? 'FRONT-END · 화면 앵커라이브' }}</span>
        <h3 class="project__title">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <span class="project__action"
          >{{ project.actionLabel ?? '프로젝트 상세 보기' }} <span aria-hidden="true">↗</span></span
        >
      </div>
    </button>
    <a v-else :href="project.href" target="_blank" rel="noopener">
      <img
        v-if="project.image"
        :src="asset(project.image)"
        :alt="project.alt"
        class="project__img"
        loading="lazy"
      />
      <div class="project__metadata">
        <h3 class="project__title">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </a>
    <ProjectDetail v-if="project.detail" ref="detailView" :project="project" />
  </li>
</template>
