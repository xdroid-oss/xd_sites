const navMenu = document.getElementById("nav-menu");
const toggle = document.getElementById("nav-toggle");
const main = document.querySelector("main");
const header = document.querySelector("header");

$(document).ready(function(){
   $(".preloader").fadeOut();
})

const showMenu = (toggleId, navId, mainId) => {
   if (toggle && navMenu) {
      toggle.addEventListener("click", () => {
         navMenu.classList.toggle("show-menu");
         main.classList.toggle("main-blur");
      });
   }

   if (main) {
      main.addEventListener("click", () => {
         navMenu.classList.remove("show-menu");
      });
   }
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
   link.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
   })
);

window.onscroll = () => {
   if (window.scrollY > 1) {
      navMenu.classList.remove("show-menu");
   }
};
