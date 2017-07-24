var menu = document.querySelector(".main-nav__navigation");
var menu_btn = document.querySelector(".main-nav__menu-btn");


if (menu.classList.contains("main-nav__navigation--nojs")) {
    menu.classList.remove("main-nav__navigation--nojs");
    menu_btn.classList.remove("main-nav__menu-btn--nojs");
};
menu_btn.addEventListener("click", function(event) {
  event.preventDefault();
      menu.classList.toggle("main-nav__navigation--active");
      menu_btn.classList.toggle("main-nav__menu-btn--active");
});
