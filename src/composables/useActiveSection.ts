import { onMounted, onUnmounted, ref } from 'vue'

/**
 * IntersectionObserver로 모든 섹션을 관찰해서, 현재 보여지는 섹션에 해당하는
 * 네비 아이템을 활성화한다. (기존 active_menu.js를 그대로 포팅)
 *
 * 규칙:
 * - 다수의 섹션이 동시에 보인다면, sectionIds 순서상 가장 첫 번째 섹션을 선택한다.
 * - 단, 마지막 섹션(footer/contact)이 95% 이상 보인다면 그 섹션을 강제로 선택한다.
 *   (naive하게 "첫 번째로 보이는 섹션"만 쓰면 페이지 맨 아래에서 마지막 네비가
 *   활성화되지 않는 문제가 있어서 별도로 처리)
 */
export function useActiveSection(sectionIds: string[]) {
  const activeId = ref(sectionIds[0]?.replace('#', '') ?? '')
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const sections = sectionIds.map((id) => document.querySelector<HTMLElement>(id))
    const visibleSections = sectionIds.map(() => false)

    observer = new IntersectionObserver(
      (entries) => {
        let selectLastOne = false

        entries.forEach((entry) => {
          const index = sectionIds.indexOf(`#${entry.target.id}`)
          if (index === -1) return

          visibleSections[index] = entry.isIntersecting

          if (
            index === sectionIds.length - 1 &&
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.95
          ) {
            selectLastOne = true
          }
        })

        const navIndex = selectLastOne
          ? sectionIds.length - 1
          : findFirstIntersecting(visibleSections)

        activeId.value = sectionIds[navIndex].replace('#', '')
      },
      {
        rootMargin: '-20px 0px 0px 0px',
        threshold: [0, 0.98],
      },
    )

    sections.forEach((section) => section && observer!.observe(section))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeId }
}

function findFirstIntersecting(intersections: boolean[]): number {
  const index = intersections.indexOf(true)
  return index >= 0 ? index : 0
}
