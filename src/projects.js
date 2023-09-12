'use strict';

// 프로젝트 필터링 관련 로직 처리

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');
const active = document.querySelector('.category--selected');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if(filter == null){
        return;
    }
    handleAtvieSelection(event.target);
    filterProjects(filter);
});


 // Active 메뉴 재설정
function handleAtvieSelection(target){
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

// 프로젝트 필터링
function filterProjects(filter){
   projectContainer.classList.add('anim-out');

   projects.forEach(project => {
       if(filter === 'all' || filter === project.dataset.type){
           project.style.display = 'block';
       }else{
           project.style.display = 'none';
       }
   });
   setTimeout(() => {
       projectContainer.classList.remove('anim-out')
   }, 250)
}

