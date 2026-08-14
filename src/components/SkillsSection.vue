<script setup lang="ts">
import SkillBar from '@/components/SkillBar.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section id="skills" class="section">
    <div class="max-container">
      <h2 class="title">My Skills</h2>
      <p class="description">Skills & Attributes</p>

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
