<script setup lang="ts">
import { asset } from '@/utils/asset'
</script>

<template>
  <section id="testimonial" class="section max-container">
    <h2 class="title">Experience</h2>
    <p class="description">about Woochang's career</p>
    <ul class="testimonials">
      <li class="testimonial">
        <img :src="asset('images/jobs/softbridge_c.png')" alt="people01" class="testimonial__img" />
        <div class="testimonial__bubble">
          <ul class="testimonial__list">
            <li><span class="project-name">&nbsp;&nbsp;&nbsp;프로젝트: 리만 글로벌 전환 플랫폼(쇼핑몰) &nbsp;&nbsp;&nbsp; 기간: 2024.06.03 - 2025.01.01&nbsp;&nbsp;&nbsp;&nbsp;협력사: 리만코리아</span></li>
            <li>회원 목록 조회, 상세, 활동 로그 조회 기능, 등급 관리</li>
            <li>주문 목록 및 상세 정보 조회 UI 구현, 주문 상태 변경</li>
            <li>상품 등록/수정/삭제 화면 구성 및 기능 추가</li>
            <li><span class="project-name">&nbsp;&nbsp;&nbsp;프로젝트: 리만 아카데미 &nbsp;&nbsp;&nbsp; 기간: 2024.01.29 - 2024.05.31&nbsp;&nbsp;&nbsp;&nbsp;협력사: 리만코리아</span></li>
            <li>교육 콘텐츠 업로드 및 스트리밍 재생 기능을 구현(HLS.js 활용)</li>
            <li>플랫폼 내 회원 관리 기능 구축 완료</li>
            <li>회원별 교육 진척도 데이터를 기반으로 통계 차트를 활용하여 학습 현황 표출 완료</li>
            <li><span class="project-name">&nbsp;&nbsp;&nbsp;프로젝트: Mate 화상회의&nbsp;&nbsp;&nbsp; 기간: 2023.01.09 - 2023.08.31&nbsp;&nbsp;&nbsp;&nbsp;협력사: 소프트브리지</span></li>
            <li>상담사와 학생 간 1:1 화상 상담 기능 개발(WebRTC 기반 커뮤니케이션 로직 구현 및 UI 연동)</li>
            <li>1:N 방송 구현</li>
            <li><span class="project-name">&nbsp;&nbsp;&nbsp;프로젝트: 비대면 라이프 서비스 플랫폼(2차년도)&nbsp;&nbsp;&nbsp; 기간: 2022.04.15 - 2022.12.30&nbsp;&nbsp;&nbsp;&nbsp;협력사: LGU+</span></li>
            <li>WebRTC기반 화상회의 실시간 영상(local, remote stream 적용)</li>
            <li>화상회의 회원가입 및 프로필 관리 기능 개발</li>
            <li>실시간 번역 google API 활용하여 개발 </li>
          </ul>
        </div>
      </li>
      <li class="testimonial">
        <img :src="asset('images/koearEducation.jpg')" alt="experience_period" class="testimonial__img" />
        <div class="testimonial__bubble">
          <ul class="testimonial__list">
            <li>SW개발자 양성 과정으로 JAVA, Thymeleaf, SpringBoot를 활용한 단계 별 프로젝트를 수행</li>
            <li>온라인 쇼핑몰 회원가입 및 회원관리 담당</li>
            <li>상품등록 및 장바구니 기능 담당</li>
            <li>Oracle DB를 활용한 설계 담당</li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>
