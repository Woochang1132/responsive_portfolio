<script setup lang="ts">
const experiences = [
  {
    id: 'anchor-live',
    name: '앵커라이브 2.0',
    summary: '증권방송 플랫폼 개발 및 운영',
    start: '2025-10-15',
    end: '2026-07-25',
    technologies: ['Vue.js', 'HLS.js', 'Web Worker', 'Canvas'],
    tasks: [
      'PC·모바일 방송 시청 UI 구현 — 영상 영역의 16:9 비율 유지 및 레터박스 처리',
      '모바일 화면에서 방송 영상과 채팅을 함께 확인할 수 있도록 영역 배치 및 레이아웃 조정',
      'HLS.js 버퍼 설정 및 서버 캐시 정책 조정을 통한 방송 영상 재생 오류 해결',
      'HLS.js의 ABR(적응형 비트레이트) 기능을 활용한 자동 화질 전환 적용 — 네트워크 대역폭에 맞춰 재생 화질을 조절해 버퍼링 최소화',
      'Web Worker 기반 연산 분리 및 Canvas 기반 화면 공유·방송자 영상 합성 구현',
    ],
  },
  {
    id: 'teamstone',
    name: '팀스톤 시스템 성능 관제 솔루션',
    summary: 'Kubernetes 모니터링 대시보드 개발',
    start: '2025-03-25',
    end: '2026-09-21',
    technologies: ['Svelte', 'Kubernetes'],
    tasks: [
      'Svelte 기반 성능 모니터링 위젯 개발 — 성능 데이터 조회 API 연동 및 차트·테이블 시각화',
      '사용자 맞춤형 대시보드 구현 — 관리자·사용자가 필요한 위젯을 추가·제거하고 위치를 조정하는 화면 구성 기능 개발',
      '성능 차트 표시 오류 수정 — 지표별 값의 표시 범위 조정 및 음수 값이 비정상적으로 표시되는 오류 해결',
      '설정된 조회 주기에 따른 성능 분석 결과 조회 및 리포트 화면 구현',
    ],
  },
  {
    id: 'riman-global',
    name: '리만 글로벌',
    summary: '백오피스 시스템 전면 개편',
    start: '2024-06-12',
    end: '2025-02-25',
    technologies: ['Vue.js', 'Quasar'],
    tasks: [
      'Vue.js 및 Quasar 기반 쇼핑몰 백오피스 화면·기능 개발',
      '회원 검색·조건별 필터 및 상세 정보 조회 화면 구현, 회원 등급 변경 API 연동',
      '회원 승급·삭제 등 관리자 주요 작업에 대한 감사 로그 조회 화면 구현 — 작업 이력을 통한 변경 내역 추적 지원',
      '상품 관리 UI 구현 — 화장품 이미지 업로드 및 가격·수량 등 상품 정보 입력·등록 기능 개발',
      '주문 관리 UI 구현 — 주문 목록·상세 정보 조회 및 고객 1:1 문의에 따른 관리자 주문 상태 변경 기능 개발',
      '배송 상태 조회 화면 및 배송 대상별 운송장 번호 입력·등록 API 연동 구현',
      '배너·팝업 관리 UI 구현 — 이미지 업로드, 연결 URL 입력 및 노출 여부·기간 설정 기능 개발',
    ],
  },
  {
    id: 'riman-academy',
    name: '리만 아카데미',
    summary: 'LMS · Learning Management System',
    start: '2024-01-22',
    end: '2024-06-07',
    technologies: ['HLS.js', 'Chart.js'],
    tasks: [
      '교육팀의 교육 영상 업로드 UI 및 HLS.js를 활용한 수강자용 스트리밍 재생 기능 구현',
      '영상 로딩·재생 오류 처리 및 재시도 로직을 구현해 수강 중 재생 중단에 대응',
      '회원별 교육 진척도 조회 API를 연동하고, Chart.js를 활용해 교육팀이 회원별 학습 진행 현황을 확인할 수 있는 차트 UI 구현',
    ],
  },
  {
    id: 'mate',
    name: 'Mate 화상회의',
    summary: '모바일 1:1 화상 상담',
    start: '2023-02-08',
    end: '2023-09-25',
    technologies: ['모바일 미디어'],
    tasks: [
      '모바일 전용 1:1 화상 상담 기능 개발 — 상담사·학생 간 영상 연결 및 상담 입장·진행·종료 상태에 따른 UI 구현',
      '다양한 모바일 기기에서 전·후면 카메라의 초기 스트림을 확보하기 위한 미디어 획득 로직 개선',
    ],
  },
  {
    id: 'meet-u',
    name: 'Meet U',
    summary: '화상회의 서비스 플랫폼 · LGU+',
    start: '2022-01-17',
    end: '2023-01-31',
    technologies: ['WebRTC', 'Janus', 'MediaPipe', 'Canvas', 'Web Speech API'],
    tasks: [
      'Janus 기반 WebRTC 화상회의 개발 — 카메라·마이크 미디어 획득, 스트림 송출·수신, 참가자 입·퇴장에 따른 영상 UI 및 스트림 상태 관리',
      'MediaPipe로 카메라 영상의 인물과 배경을 분리하고, Canvas로 인물 영상과 가상 배경을 합성하는 기능 구현',
      'Web Speech API 기반 음성 인식 및 화상회의 실시간 자막 표시 기능 구현',
    ],
  },
];

const formatDate = (date: string) => date.replaceAll('-', '.');
</script>

<template>
  <section
    id="testimonial"
    class="section max-container experience"
    aria-labelledby="experience-title"
  >
    <header class="experience__header">
      <p class="eyebrow">04 / EXPERIENCE</p>
      <h2 id="experience-title" class="title">Experience</h2>
      <p class="description experience__description">
        프로젝트로 쌓아온 프론트엔드 개발 경험
      </p>
    </header>

    <ol class="experience__timeline">
      <li
        v-for="experience in experiences"
        :key="experience.id"
        class="experience__item"
      >
        <div class="experience__period" aria-label="프로젝트 기간">
          <time :datetime="experience.start">{{
            formatDate(experience.start)
          }}</time>
          <span class="experience__period-separator">—</span>
          <time :datetime="experience.end">{{
            formatDate(experience.end)
          }}</time>
        </div>
        <article
          class="experience__card"
          :aria-labelledby="`${experience.id}-title`"
        >
          <h3 :id="`${experience.id}-title`" class="experience__name">
            {{ experience.name }}
          </h3>
          <p class="experience__summary">{{ experience.summary }}</p>
          <ul class="experience__tags" aria-label="관련 기술 및 분야">
            <li v-for="technology in experience.technologies" :key="technology">
              {{ technology }}
            </li>
          </ul>
          <ul class="experience__tasks">
            <li v-for="task in experience.tasks" :key="task">{{ task }}</li>
          </ul>
        </article>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.experience {
  color: var(--color-primary);
  scroll-margin-top: 5rem;
}

.experience__header {
  margin-bottom: 3.5rem;
}

.experience__description {
  color: var(--color-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  word-break: keep-all;
}

.experience__timeline {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
}

.experience__item {
  position: relative;
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr);
  gap: 2.5rem;
  padding-bottom: 2rem;
}

.experience__item::before {
  content: '';
  position: absolute;
  top: 2rem;
  bottom: -2rem;
  left: 10rem;
  width: 1px;
  background: var(--color-border);
}

.experience__item::after {
  content: '';
  position: absolute;
  top: 2rem;
  left: calc(10rem - 4px);
  width: 9px;
  height: 9px;
  border: 2px solid var(--color-accent-ink);
  border-radius: 50%;
  background: var(--color-white);
  box-shadow: 0 0 0 5px var(--color-accent-soft);
}

.experience__item:last-child {
  padding-bottom: 0;
}

.experience__item:last-child::before {
  display: none;
}

.experience__period {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1.6rem;
  color: var(--color-muted);
  font-size: 0.85rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 1.6;
}

.experience__period-separator {
  color: #85939e;
  font-weight: 400;
}

.experience__card {
  min-width: 0;
  padding: 1.75rem 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  background: var(--color-white);
  box-shadow: var(--shadow-card);
}

.experience__name {
  font-size: 1.3rem;
  line-height: 1.5;
  letter-spacing: -0.035em;
  word-break: keep-all;
  overflow-wrap: anywhere;
}

.experience__summary {
  margin-top: 0.35rem;
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  word-break: keep-all;
  overflow-wrap: anywhere;
}

.experience__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
}

.experience__tags li {
  padding: 0.25rem 0.65rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-accent-soft);
  color: var(--color-accent-ink);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
}

.experience__tasks {
  display: grid;
  gap: 0.7rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid #edf0f3;
}

.experience__tasks li {
  position: relative;
  padding-left: 1rem;
  color: #414c5b;
  font-size: 0.925rem;
  line-height: 1.85;
  word-break: keep-all;
  overflow-wrap: anywhere;
}

.experience__tasks li::before {
  content: '';
  position: absolute;
  top: 0.75em;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-accent-ink);
}

@media (max-width: 768px) {
  .experience__header {
    margin-bottom: 2rem;
  }

  .experience__item {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
    padding-left: 1.25rem;
  }

  .experience__item::before {
    top: 0.6rem;
    bottom: -0.6rem;
    left: 0;
  }

  .experience__item::after {
    top: 0.6rem;
    left: -4px;
  }

  .experience__period {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-top: 0;
    font-size: 0.8rem;
  }

  .experience__card {
    padding: 1.4rem;
  }

  .experience__name {
    font-size: 1.15rem;
  }
}

@media (max-width: 480px) {
  .experience {
    padding: 3rem 1.25rem;
  }

  .experience__card {
    padding: 1.15rem;
  }
}
</style>
