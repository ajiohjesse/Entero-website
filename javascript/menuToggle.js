const menu = document.querySelector("#menuBars");
const menuLinks = document.querySelector(".links-container");
const close = document.querySelector("#menuClose");

menu.addEventListener("click", function() {
  menuLinks.classList.toggle("active")
  menu.classList.toggle("vanish")
  close.classList.toggle("show")
});

close.addEventListener("click", function() {
  menuLinks.classList.toggle("active")
  menu.classList.toggle("vanish")
  close.classList.toggle("show")
});

