/**
 * public/ 아래 정적 에셋의 URL을 Vite의 base(GitHub Pages 서브패스 `/responsive_portfolio/`)를
 * 반영해서 만들어준다. index.html 안의 참조와 달리, 컴포넌트/데이터 안의 문자열 경로는
 * Vite가 자동으로 base를 붙여주지 않기 때문에 이 헬퍼를 통해 명시적으로 처리한다.
 *
 * 예) asset('images/gifts.png') -> '/responsive_portfolio/images/gifts.png'
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
