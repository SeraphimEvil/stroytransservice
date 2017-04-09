'use strict';


// включение мобильного меню

let mobileMenuOpen = document.querySelector('.page-header__toggle');
let mobileMenuClose = document.querySelector('.main-nav__close');
let mobilemenu = document.querySelector('.main-nav');

mobileMenuOpen.addEventListener('click', function() {
  mobilemenu.style.top = "0px";
})

mobileMenuClose.addEventListener('click', function() {
  mobilemenu.style.top = "-250px";
})


// замена текста в html

// причина №3
let reason3 = document.querySelector('.reason--close .reason__text');

if (window.matchMedia("(min-width: 768px)").matches) {
  reason3.innerHTML = 'все достопримеча-тельности находятся очень близко';
}

// текст "заинтересовались"?
let search = document.querySelector('.search__text');

if (window.matchMedia("(min-width: 768px)").matches) {
  search.innerHTML = `Укажите предполагаемые даты поездки <br>
    и мы покажем вам лучшие предложения гостиниц в седоне`;
}
