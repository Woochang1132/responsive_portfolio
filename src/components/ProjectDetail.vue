<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import type { Project } from '@/types'
import { asset } from '@/utils/asset'

defineProps<{ project: Project }>()
const dialog = ref<HTMLDialogElement>()
let previousOverflow: string | undefined

function restoreScroll() {
  if (previousOverflow !== undefined) document.body.style.overflow = previousOverflow
  previousOverflow = undefined
}

function open() {
  if (!dialog.value || dialog.value.open) return
  previousOverflow = document.body.style.overflow
  dialog.value.showModal()
  dialog.value.scrollTop = 0
  document.body.style.overflow = 'hidden'
}

onBeforeUnmount(restoreScroll)
defineExpose({ open })
</script>

<template>
  <dialog ref="dialog" class="project-detail" :aria-labelledby="`project-heading-${project.id}`" @close="restoreScroll" @click="($event.target === dialog) && dialog?.close()">
    <article v-if="project.detail" class="project-detail__content">
      <div class="project-detail__top">
        <span class="eyebrow">PROJECT ARCHIVE</span>
        <button class="project-detail__close" autofocus @click="dialog?.close()" aria-label="프로젝트 상세 닫기">닫기 <span aria-hidden="true">×</span></button>
      </div>
      <h2 :id="`project-heading-${project.id}`" class="title">{{ project.title }}</h2>
      <p class="project-detail__subtitle">{{ project.description }}</p>
      <p class="project-detail__overview">{{ project.detail.overview }}</p>
      <dl class="project-detail__facts">
        <div><dt>참여 역할</dt><dd>{{ project.detail.role }}</dd></div>
        <div v-if="project.detail.document"><dt>프로젝트 자료</dt><dd>개발 당시 화면 및 기능 설명서</dd></div>
        <div v-for="fact in project.detail.facts" :key="fact.label"><dt>{{ fact.label }}</dt><dd>{{ fact.value }}</dd></div>
      </dl>
      <a v-if="project.detail.document" class="project-detail__document" :href="asset(project.detail.document)" target="_blank" rel="noopener">화면·기능 설명서 PDF 보기 <span aria-hidden="true">↗</span><span class="sr-only"> (새 탭)</span></a>
      <div v-if="project.detail.officialUrl">
        <a class="project-detail__document" :href="project.detail.officialUrl" target="_blank" rel="noopener">공식 제품 소개 <span aria-hidden="true">↗</span><span class="sr-only"> (새 탭)</span></a>
        <p class="project-detail__note">제품 전반을 소개하는 공식 사이트입니다. 개인의 구현 범위를 나타내는 링크가 아닙니다.</p>
      </div>
      <section v-if="project.detail.sections?.length" class="project-detail__contribution" aria-label="참여 내용">
        <h3>참여 내용</h3>
        <section v-for="(section, index) in project.detail.sections" :key="section.title" class="project-detail__entry">
          <span class="project-detail__number" aria-hidden="true">0{{ index + 1 }}</span>
          <div><h4>{{ section.title }}</h4><p>{{ section.description }}</p></div>
        </section>
      </section>
      <p v-if="project.detail.notice" class="project-detail__notice">{{ project.detail.notice }}</p>
      <section v-if="project.detail.features?.length" class="project-detail__screens" aria-label="주요 화면과 서비스 기능">
        <h3>주요 화면과 서비스 기능</h3>
        <p class="project-detail__note">설명서에 수록된 개발 당시 화면입니다. 아래 내용은 서비스의 기능을 소개합니다.</p>
        <figure v-for="(feature, index) in project.detail.features" :key="feature.title" class="project-detail__feature">
          <figcaption>
            <span class="project-detail__number">0{{ index + 1 }}</span>
            <div><h4>{{ feature.title }}</h4><p>{{ feature.description }}</p></div>
          </figcaption>
          <a :href="asset(feature.image)" target="_blank" rel="noopener" :aria-label="`${feature.title} 화면 크게 보기 (새 탭)`">
            <img :src="asset(feature.image)" :alt="`${feature.title} — 설명서 ${feature.page}페이지`" loading="lazy" />
          </a>
          <p class="project-detail__source">설명서 {{ feature.page }}p · 화면을 선택하면 크게 볼 수 있습니다.</p>
        </figure>
      </section>
    </article>
  </dialog>
</template>
