import { onMounted, onUnmounted, ref } from 'vue'

/**
 * 스크롤되는 Y 좌표가 헤더 자체 높이보다 크면 dark 스타일을 적용한다.
 * (기존 main.js의 첫 번째 동작을 그대로 포팅)
 */
export function useHeaderScroll() {
  const isDark = ref(false)
  let headerHeight = 0

  function onScroll() {
    isDark.value = window.scrollY > headerHeight
  }

  onMounted(() => {
    const header = document.querySelector('.header')
    headerHeight = header?.getBoundingClientRect().height ?? 0
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { isDark }
}
