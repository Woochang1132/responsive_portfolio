<script setup lang="ts">
import MajorCard from '@/components/MajorCard.vue'
import { majors } from '@/data/majors'
</script>

<template>
  <section id="about" class="section max-container">
    <div class="about__intro">
      <header class="section-heading">
        <p class="eyebrow">01 / ABOUT</p>
        <h2 class="title">기능을 구현하고,<br />경험을 다듬습니다.</h2>
      </header>
      <div class="about__copy">
        <p>Vue.js와 Svelte를 중심으로 웹 인터페이스를 개발하는 최우창입니다.</p>
        <p>증권방송, 화상회의, 성능 모니터링, 커머스와 교육 플랫폼에서 화면 구현부터 API 연동, 재생 오류 대응까지 다양한 문제를 해결해 왔습니다.</p>
        <p>유지보수를 고려한 공통화와 확장 가능한 구조를 고민하며, 실제 사용 환경에서 안정적으로 동작하는 서비스를 만들어갑니다.</p>
      </div>
    </div>
    <ul class="majors"><MajorCard v-for="major in majors" :key="major.title" :major="major" /></ul>
  </section>
</template>
