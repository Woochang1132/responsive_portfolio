/* 솔루션 전 직접 활용한 코드
const header = document.querySelector('.header');

console.log("header height", header.getBoundingClientRect().height)



$(window).scroll(function(){
    console.log("$(window).scrollTop() >>> " , $(window).scrollTop())

    if($(window).scrollTop() >header.getBoundingClientRect().height){
        header.style.backgroundColor = "red";
    }else{
        header.style.backgroundColor = "black";
    }
});
 */

// 스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!(dark style)

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
})

// 스크롤을 진행할 수록 home Section의 요소의 투명도가 달라질 수 있도록

/* 먼저 적용해본 내용
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

console.log("home.getBoundingClientRect() >>> " , home.getBoundingClientRect())
console.log("homeHeight >>>", homeHeight)


document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    if(window.scrollY > homeHeight/3){
        home.classList.remove('home--dark');
        home.classList.add('home--middleDark');
    }
    if(window.scrollY > homeHeight/2){
        home.classList.remove('home--middleDark');
        home.classList.add('home--dark')
    }
    if(window.scrollY > homeHeight){
        home.classList.remove('home--middleDark');
        home.classList.remove('home--dark');
    }
})
*/

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
/*
    if(window.scrollY / homeHeight == 0 ){
        home.style.opacity = 1;
    }else if(window.scrollY/homeHeight == 0.5){
        home.style.opacity = 0.5;
    }else if(window.scrollY/homeHeight == 1){
        home.style.opacity = 0;
    }
*/
home.style.opacity = 1 - window.scrollY / homeHeight;

});