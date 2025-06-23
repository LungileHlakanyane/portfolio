// Preloader logic
window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
});

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

// Typing animation
const typingText = document.querySelector('.typing-text');
const text = "I am Lungile Vincent Hlakanyane";

let index = 0;
function typeEffect() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingText.textContent = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}



document.addEventListener('DOMContentLoaded', typeEffect);