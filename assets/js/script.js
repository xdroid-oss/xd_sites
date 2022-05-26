const navMenu = document.getElementById("nav-menu");
const toggle = document.getElementById("nav-toggle");
const main = document.querySelector("main");
const header = document.querySelector("header");

jQuery(document).ready(function () {
   $(".preloader").delay(5000).fadeOut();
});

if (toggle && navMenu) {
   toggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
      main.classList.toggle("main-blur");
   });
}

if (main) {
   main.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      main.classList.remove("main-blur");
   });
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
   link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      main.classList.remove("main-blur");
   })
);

const scrollUp = document.getElementById("scroll-up");
window.onscroll = () => {
   if (window.scrollY > 1) {
      navMenu.classList.remove("show-menu");
      main.classList.remove("main-blur");
   }
};

window.addEventListener("scroll", () => {
   if (window.scrollY > 100) {
      scrollUp.style.display = "flex";
   } else {
      scrollUp.style.display = "none";
   }
});
