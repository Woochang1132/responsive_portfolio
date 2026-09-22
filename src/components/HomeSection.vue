<script setup lang="ts">
defineProps<{ homeOpacity: number }>()
</script>

<template>
  <section id="home" aria-labelledby="home-title">
    <div class="home__container">
      <div class="home__intro">
        <p class="eyebrow">FRONT-END DEVELOPER · CHOI WOOCHANG</p>
        <h2 id="home-title" class="home__title">복잡한 기능을<br /><strong class="home__title--strong">명확한 경험으로.</strong></h2>
        <p class="home__description">안녕하세요, 프론트엔드 개발자 최우창입니다.<br />실시간 영상부터 데이터 대시보드까지,<br class="desktop-break" /> 사용자가 마주하는 화면을 설계하고 구현합니다.</p>
        <div class="home__actions">
          <a class="home__contact" href="#work">프로젝트 살펴보기 <span aria-hidden="true">↗</span></a>
          <a class="home__secondary" href="#testimonial">개발 이력 보기 <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <aside class="home__profile" aria-label="주요 개발 분야">
        <div class="home__profile-top"><span>DEVELOPMENT FOCUS</span><span aria-hidden="true">↗</span></div>
        <p class="home__profile-title">화면 너머의<br />동작까지 생각합니다.</p>
        <ul class="home__focus">
          <li><span class="home__focus-number">01</span><div><strong>Real-time experiences</strong><p>WebRTC · HLS.js · Canvas</p></div></li>
          <li><span class="home__focus-number">02</span><div><strong>Data into interfaces</strong><p>모니터링 대시보드 · 차트 시각화</p></div></li>
          <li><span class="home__focus-number">03</span><div><strong>Everyday operations</strong><p>커머스 백오피스 · 교육 플랫폼</p></div></li>
        </ul>
        <div class="home__profile-bottom"><span>Vue.js</span><span>Svelte</span><span>TypeScript</span></div>
      </aside>
    </div>
    <div class="home__footnote"><span>INTERFACES WITH PURPOSE</span><a href="#about">나의 개발 이야기 <span aria-hidden="true">↓</span></a></div>
  </section>
</template>
