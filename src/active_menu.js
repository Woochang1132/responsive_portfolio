// 구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver를 사용해서 모든 섹션들을 관찰해야 한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 색션 : 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택
// 마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택


const sectionIds = [
    '#home', 
    '#about', 
    '#skills', 
    '#work', 
    '#testimonial', 
    '#contact'
];

//const homeSection = document.querySelector('#home');
//const homeMenu = document.querySelector('[href="#home"]')

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);

let activeNavItem = navItems[0];

const options = {
    rootMargin : '-20px 0px 0px 0px',
    threshold: [0 , 0.98]
};
const observer = new IntersectionObserver(observerCallback, options);
//section 요소들을 관찰해줘 요청한 상태 그에 따른 callback값이 넘어오게 된다.
sections.forEach(section => observer.observe(section));

function observerCallback(entries){
    let selectLastOne;
    entries.forEach((entry) => {
        // 해당 target의 id에 해당하는 배열의 index 값을 반환한다.
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting
        selectLastOne = 
        index === sectionIds.length -1 && 
        entry.isIntersecting && 
        entry.intersectionRatio >= 0.95;
    
    });
    console.log("visibleSections >> ", visibleSections);
    console.log("무조건 라스트 selectLastone", selectLastOne);

    const navIndex = selectLastOne ? sectionIds.length - 1 
    : findFirstIntersecting(visibleSections); 

    selectNavItem(navIndex);
    // boolean 값을 매개변수로 전달한다.
    // 배당 배열에서 먼저 나온 true가 나온 index를 찾는다?
}

function findFirstIntersecting(intersections){
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0
}

function selectNavItem(index){
    const navItem = navItems[index];
    if(!navItem){
        return;
    }
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
}