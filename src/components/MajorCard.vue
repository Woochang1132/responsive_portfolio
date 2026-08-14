<script setup lang="ts">
import type { Major } from '@/types'

defineProps<{
  major: Major
}>()
</script>

<template>
  <li class="major">
    <i :class="['major__icon', major.icon]"></i>
    <p class="major__title">{{ major.title }}</p>
    <p>{{ major.stack }}</p>
  </li>
</template>
