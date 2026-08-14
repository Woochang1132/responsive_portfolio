<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import ArrowUpButton from '@/components/ArrowUpButton.vue'
import ContactFooter from '@/components/ContactFooter.vue'
import HomeSection from '@/components/HomeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import TestimonialSection from '@/components/TestimonialSection.vue'
import TheHeader from '@/components/TheHeader.vue'
import WorkSection from '@/components/WorkSection.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useHomeFade } from '@/composables/useHomeFade'

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonial', '#contact']

const { activeId } = useActiveSection(sectionIds)
const { homeOpacity, arrowOpacity } = useHomeFade()
</script>

<template>
  <TheHeader :active-id="activeId" />

  <main>
    <HomeSection :home-opacity="homeOpacity" />
    <AboutSection />
    <SkillsSection />
    <WorkSection />
    <TestimonialSection />

    <aside>
      <ArrowUpButton :opacity="arrowOpacity" />
    </aside>
  </main>

  <ContactFooter />
</template>
