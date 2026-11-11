let btn = document.querySelector('.hamburger')
let navbar = document.querySelector('nav')
let ul = document.querySelector('nav ul')
btn.addEventListener('click', function () {
    // navbar.style.display = "flex"

    ul.classList.toggle('active')
    // navbar.style.display='flex';
    navbar.classList.toggle('show')

    // if('click'){
    //     navbar.style.display="flex"
    // }else{
    //     navbar.style.display="none"
    // }
})

function reportWindowSize() {
    if (window.innerWidth > 1370) {
        navbar.classList.remove('show')
        ul.classList.remove('active');
    }
}

window.onresize = reportWindowSize;

// navbar.addEventListener('scroll', function () {
//     navbar.classList.add('box-shadow')
// })