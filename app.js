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