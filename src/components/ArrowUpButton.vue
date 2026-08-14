<script setup lang="ts">
defineProps<{
  opacity: number
}>()
</script>

<template>
  <a class="arrow-up" href="#home" title="back to top" :style="{ opacity }">
    <i class="fa-solid fa-arrow-up"></i>
  </a>
</template>
