<script setup lang="ts">
import type { Skill } from '@/types'

defineProps<{
  skill: Skill
}>()
</script>

<template>
  <li class="bar">
    <div class="bar__metadata"><span>{{ skill.name }}</span><span>{{ skill.percent }}%</span></div>
    <div class="bar__bg">
      <div class="bar__value" :style="{ width: `${skill.percent}%` }"></div>
    </div>
  </li>
</template>
