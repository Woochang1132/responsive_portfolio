<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import TypeIt from 'typeit'

defineProps<{
  homeOpacity: number
}>()

let typeItInstance: TypeIt | undefined

onMounted(() => {
  typeItInstance = new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
  })
    .pause(1000)
    .move(null, { to: 'END' })
    .delete()
    .type('Front-end Engineer')
    .pause(1000)
    .delete()
    .go()
})

onUnmounted(() => {
  typeItInstance?.destroy()
})
</script>

<template>
  <section id="home">
    <div class="home__container" :style="{ opacity: homeOpacity }">
      <h2 class="home__title" aria-label="Hello, I'm Dream Coder Woochang">
        Hello <br />
        I'm
        <strong class="home__title--strong">Choi Woochang</strong>
      </h2>
      <p class="home__description">Vue.js, Svelte, HTML5, CSS3, JavaScript</p>
      <a class="home__contact" href="#contact">Contact me</a>
    </div>
  </section>
</template>
