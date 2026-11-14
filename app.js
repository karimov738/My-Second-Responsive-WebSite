
// ======= Navbar code =========

let btn = document.querySelector('.hamburger')
let navbar = document.querySelector('nav')
let ul = document.querySelector('nav ul')
let headerTop = document.querySelector('.navbar')

// debugger

/*  box-shadow: 50px 5px 20px 1px #08274d;
    border: 2px solid #1a4478;
*/
btn.addEventListener('click', function () {
    // navbar.style.display = "flex"

    ul.classList.toggle('active')
    // navbar.style.display='flex';
    navbar.classList.toggle('show')

    // if('click'){
    // }else{
    //     navbar.style.display="none"
    //     navbar.style.display="flex"
    // }
})

window.addEventListener('scroll', function () {     // при каждом скроле роликом мыши, выполняется эта функция 

    if (window.scrollY > 0) {
        headerTop.style.boxShadow = '0px 5px 20px 1px #08274d';
        navbar.style.boxShadow = '0px 5px 20px 1px #08274d';
    } else {
        headerTop.style.boxShadow = 'none';
        // navbar.style.boxShadow = 'none';
    }


    // const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // headerTop.classList.toggle('nav-box-shadow')




})

function reportWindowSize() {
    if (window.innerWidth > 1370) {
        navbar.classList.remove('show')
        ul.classList.remove('active');
    }

    // clientsWidthSize()
}

window.onresize = reportWindowSize;


// ============ Our-clients Slider code ===============

const slides = document.querySelectorAll('.slide');
const button = document.querySelector('.dots');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let result = '';

for (let i = 0; i < slides.length; i++) {
    result += `<div class="dot" data-index="${i}"></div>`;
}

button.innerHTML = result;

const dots = document.querySelectorAll('.dot');

button.addEventListener('click', function (e) {

    if (e.target.classList.contains('dot')) {

        const index = Number(e.target.dataset.index);

        slides.forEach(function (slide, slideIndex) {

            slide.style.left = `${(slideIndex - index) * 100}%`;

        });

        dots.forEach(function (dot) {
            dot.classList.remove('active');
        });

        e.target.classList.add('active');
    }

});



// ============== Plans Slider code ================

const planSlides = document.querySelectorAll('.plan-slide')
const prevPlan = document.querySelector('.prevPlan')
const nextPlan = document.querySelector('.nextPlan')

planSlides.forEach(function (p_slide, p_index) {
    p_slide.style.left = `${p_index * 100}%`
})

let pCounter = 0

nextPlan.addEventListener("click", function () {
    pCounter++
    pCarousel()
})

prevPlan.addEventListener("click", function () {
    pCounter--
    pCarousel()
})

function pCarousel() {
    if (pCounter < planSlides.length - 1) {
        nextPlan.style.display = "block"
    } else {
        nextPlan.style.display = "none"
    }

    if (pCounter > 0) {
        prevPlan.style.display = "block"
    } else {
        prevPlan.style.display = "none"
    }

    planSlides.forEach(function (p_slides, p_index) {
        // counter = 1 | index = 0 | left = 0 => left = -100%    // its more good way 
        p_slides.style.left = `${(-1 * pCounter + p_index) * 100}%`
    })
}

prevPlan.style.display = "none";
