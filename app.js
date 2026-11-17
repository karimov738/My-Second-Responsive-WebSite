
// ======= Navbar code =========

let btn = document.querySelector('.hamburger')
let navbar = document.querySelector('nav')
let ul = document.querySelector('nav ul')
let headerTop = document.querySelector('.navbar')

// debugger

btn.addEventListener('click', function () {

    ul.classList.toggle('active')
    navbar.classList.toggle('show')
})

window.addEventListener('scroll', function () {     // при каждом скроле роликом мыши, выполняется эта функция 

    if (window.scrollY > 0) {
        headerTop.style.boxShadow = '0px 5px 20px 1px #08274d';
        navbar.style.boxShadow = '0px 5px 20px -10px #08274d';
    } else {
        headerTop.style.boxShadow = 'none';
    }
})

function reportWindowSize() {
    if (window.innerWidth > 1370) {
        navbar.classList.remove('show')
        ul.classList.remove('active');
    }
}

window.onresize = reportWindowSize;

// ============ Our-clients Slider code ===============

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.clients .dots');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
});

generateSlideBtns(slides, dotsContainer, 'index')

const dots = document.querySelectorAll('.dot')

let cDot = document.querySelectorAll('.dot')
cDot[0].classList.add('active')

// dotsContainer.addEventListener('click', function (event) {
//     clickBtn(event)
// })


dotsContainer.addEventListener('click', (event) => clickBtn(event, slides, dots))

// ============== PLANS SLIDER CODE ================

const planSlides = document.querySelectorAll('.plan-slide')
const btnsContainer = document.querySelector('.plans .dots')

planSlides.forEach(function (p_slide, p_index) {
    p_slide.style.left = `${p_index * 100}%`
})

generateSlideBtns(planSlides, btnsContainer, 'pIndex')
let pDots = document.querySelectorAll('.dot')

btnsContainer.addEventListener('click', (p_event) => clickBtn(p_event, planSlides, pDots, 'pindex'))

let dot = document.querySelectorAll('.dot')
dot[0].classList.add('active')


// ================= GLOBAL FUNCTIONS ===================

function generateSlideBtns(slides = [], btnContainer, key) {
    //debugger
    let result = ''     // по началу мы имеем пустой result
    //debugger

    for (let i = 0; i < slides.length; i++) {       // длина наших слайдов 3, если i меньше длины слайдов выполнить код ниже
        //debugger
        result += `<div class="dot" data-${key}="${i}"></div>`      // если условие сверху выполяются, в result добавляется html: конетейнер "dot" с data-set(key) и индекс
        //debugger        // фунция выполняется несколько раз пока условие не будет равна false
    }

    let dots = document.querySelector('dot')



    //debugger
    btnContainer.innerHTML = result;        //  потом мы пихаем в контейнер dots все содержимое переменной result 
    // и все содержимое по сути добавится в html, но в браузере
    //debugger
}


function clickBtn(e, slides, dots, key = 'index') {
    //debugger
    if (e.target.classList.contains('dot')) {
        //debugger
        const index = Number(e.target.dataset[key])
        //debugger
        slides.forEach(function (slide, slideIndex) {
            //debugger
            slide.style.left = `${(slideIndex - index) * 100}%`
            //debugger
        });
        //debugger
        dots.forEach(function (dot) {
            //debugger
            dot.classList.remove('active')
            //ebugger
        });
        //debugger
        e.target.classList.add('active')

        //debugger
    }
    //debugger
}
// debugger
// const t = e;
// debugger
// const t1 = e.target;
// debugger
// const t2 = e.target.classList;       //  вот так надо разбираться в коде
// debugger
// const t3 = e.target.classList.contains('dot');
// debugger


// =========================== WALL OF SHAME ============================

// let pCounter = 0

// nextPlan.addEventListener("click", function () {
//     pCounter++
//     pCarousel()
// })

// prevPlan.addEventListener("click", function () {
//     pCounter--
//     pCarousel()
// })

// function pCarousel() {
//     if (pCounter < planSlides.length - 1) {
//         nextPlan.style.display = "block"
//     } else {
//         nextPlan.style.display = "none"
//     }

//     if (pCounter > 0) {
//         prevPlan.style.display = "block"
//     } else {
//         prevPlan.style.display = "none"
//     }

//     planSlides.forEach(function (p_slides, p_index) {
//         // counter = 1 | index = 0 | left = 0 => left = -100%    // its more good way 
//         p_slides.style.left = `${(-1 * pCounter + p_index) * 100}%`
//     })
// }

// prevPlan.style.display = "none";