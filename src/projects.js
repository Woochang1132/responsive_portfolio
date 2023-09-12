'use strict';

// 프로젝트 필터링 관련 로직 처리

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if(filter == null){
        return;
    }
    handleAtvieSelection(event.target);
    filterProjects(filter);
});

function handleAtvieSelection(target){
    // Active 메뉴 재설정
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.target.classList.add('category--selected');
}

function filterProjects(filter){
        // 프로젝트 필터링
    //console.log("filter >>> ", filter)
   projectContainer.classList.add('anim-out');

   projects.forEach(project => {
       //console.log("project >>>> ", project.dataset.type);

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

