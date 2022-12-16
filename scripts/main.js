var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})

const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('header__toggle'),
    closeMenu = document.getElementById('header__close')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})