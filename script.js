// =======================
// Rolagem suave
// =======================
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =======================
// Efeito typing
// =======================
const typing = document.querySelector(".typing");
const text = "Desenvolvedor Front-end 🚀";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typing.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);


const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); 


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


