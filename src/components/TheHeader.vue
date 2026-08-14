<script setup lang="ts">
import { ref } from 'vue'

import { useHeaderScroll } from '@/composables/useHeaderScroll'
import { asset } from '@/utils/asset'

defineProps<{
  activeId: string
}>()

const { isDark } = useHeaderScroll()
const isMenuOpen = ref(false)

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'My work' },
  { id: 'testimonial', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Navbar 메뉴 클릭 시 메뉴를 자동으로 닫아줌
function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header" :class="{ 'header--dark': isDark }">
    <div class="header__logo">
      <img class="header__logo__img" :src="asset('images/gifts.png')" alt="logo" />
      <h1 class="header__logo__title"><a href="#">Woochang</a></h1>
    </div>
    <nav class="header__nav">
      <ul class="header__menu" :class="{ open: isMenuOpen }" @click="closeMenu">
        <li v-for="item in menuItems" :key="item.id">
          <a
            class="header__menu__item"
            :class="{ active: activeId === item.id }"
            :href="`#${item.id}`"
          >{{ item.label }}</a>
        </li>
      </ul>
    </nav>
    <button class="header__toggle" aria-label="navigation menu toggle" @click="toggleMenu">
      <i class="fa-solid fa-bars"></i>
    </button>
  </header>
</template>
