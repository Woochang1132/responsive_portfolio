import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Home 섹션을 아래로 스크롤시 투명하게 처리하고, arrow-up 버튼은 절반 이상
 * 스크롤됐을 때부터 나타나게 한다. (기존 main.js의 두 번째 동작을 그대로 포팅)
 */
export function useHomeFade() {
  const homeOpacity = ref(1)
  const arrowOpacity = ref(0)
  let homeHeight = 1

  function onScroll() {
    const ratio = window.scrollY / homeHeight
    homeOpacity.value = 1 - ratio
    arrowOpacity.value = ratio >= 0.5 ? 1 : 0
  }

  onMounted(() => {
    const home = document.querySelector<HTMLElement>('.home__container')
    homeHeight = home?.offsetHeight ?? 1
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { homeOpacity, arrowOpacity }
}
