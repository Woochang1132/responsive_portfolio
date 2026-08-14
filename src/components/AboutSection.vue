<script setup lang="ts">
import MajorCard from '@/components/MajorCard.vue'
import { majors } from '@/data/majors'
</script>

<template>
  <section id="about" class="section max-container">
    <h2 class="title">About me</h2>

    <p>안녕하세요. 웹 개발자(프론트 엔드) 최우창입니다.</p>
    <p>보유하고 있는 기술 스택으로는 Vue.js, Svelte 다루고 있습니다.</p>
    <p>웹 개발자 경력으로 리만 신규 플랫폼(쇼핑몰 구축), 교육 플랫폼 개발 및 운영 경험이 있습니다.</p>
    <p>유지 보수를 고려한 소스 공통화 작업 및 기능 확장에 무리 없는 개발이 가능한 개발자로 성장하고 있습니다.</p>

    <ul class="majors">
      <MajorCard v-for="major in majors" :key="major.title" :major="major" />
    </ul>
  </section>
</template>
