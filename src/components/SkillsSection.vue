<script setup lang="ts">
import SkillBar from '@/components/SkillBar.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section id="skills" class="section">
    <div class="max-container">
      <header class="section-heading">
        <p class="eyebrow">02 / TOOLKIT</p>
        <h2 class="title">아이디어를 구현하는 기술</h2>
        <p class="description">인터페이스부터 데이터 연동까지, 개발에 사용하는 도구들입니다.</p>
      </header>

      <div class="skills">
        <section class="skills__coding">
          <h3 class="skills__title">Coding skills</h3>
          <ul>
            <SkillBar v-for="skill in skills" :key="skill.name" :skill="skill" />
          </ul>
        </section>
        <section class="skills__tools">
          <h3 class="skills__title">Tools</h3>
          <ul>
            <li>Vscode</li>
          </ul>
        </section>
        <section class="skills__etc">
          <h3 class="skills__title">Etc</h3>
          <ul>
            <li>Git</li>
            <li>MySQL</li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
