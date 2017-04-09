'use strict';

let textTitle1 = document.querySelector('.field-text__title');

if (window.matchMedia("(min-width: 768px)").matches) {
  textTitle1.innerHTML = 'Представьтесь*';
}
