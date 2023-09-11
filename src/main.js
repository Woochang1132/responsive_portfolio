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


