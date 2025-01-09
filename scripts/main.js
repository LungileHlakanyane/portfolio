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

// Preloader logic
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});


toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

// Typing animation logic
const typingText = document.querySelector('.typing-text');
const text = "I am Lungile Vincent Hlakanyane"; // Text to be animated

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust typing speed
    } else {
        setTimeout(() => {
            typingText.textContent = ""; // Clear text for loop
            index = 0;
            typeEffect();
        }, 2000); // Pause before restarting
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);

