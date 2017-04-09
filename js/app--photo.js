'use strict';


// текст под "фото и видео"

let photoPromo = document.querySelector('.promo__text--fix');

if (window.matchMedia("(min-width: 768px)").matches) {
  photoPromo.innerHTML = `Не можете решиться на путешестиве из-за курса? <br>
    фотографии помогут вам забыть о политике и экономике`;
}
