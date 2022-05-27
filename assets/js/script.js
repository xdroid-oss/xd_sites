const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const content = document.querySelectorAll("section");

jQuery(document).ready(function () {
   $(".preloader").delay(1000).fadeOut();
});

const showMenu = () => {
   navMenu.classList.toggle("show-menu");
   content.forEach((section) => section.classList.toggle("main-blur"));
};

navToggle.addEventListener("click", showMenu);

const closeMenu = () => {
   navMenu.classList.remove("show-menu");
   content.forEach((section) => section.classList.remove("main-blur"));
};

content.forEach((section) => section.addEventListener("click", closeMenu));

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) => link.addEventListener("click", closeMenu));

const scrollBtn = document.getElementById("scroll-up");
window.onscroll = () => {
   if (window.scrollY > 1) {
      closeMenu();
   }
};

window.addEventListener("scroll", () => {
   if (window.scrollY > 100) {
      scrollBtn.style.display = "flex";
   } else {
      scrollBtn.style.display = "none";
   }
});
