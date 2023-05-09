import scrollLock from 'scroll-lock';

const openPopUp = document.querySelector('.header-sign-btn');
const closePopUp = document.querySelector('#popup-close');
const popUp = document.querySelector('#popup');
const backdrop = document.querySelector('#popup-container');

openPopUp.addEventListener('click', openAuthPopUp);
closePopUp.addEventListener('click', closeAuthPopUp);
backdrop.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onKeyPress);

// Вішаємо слухача на кнопку Юри ('.header-sign-btn')
// По натисканню відкриваємо модалку, блокуємо скрол под модалкою
// Добавляємо слухача на натискання клавіш, щоб можна було закрити по ESC

function openAuthPopUp(event) {
  event.preventDefault();
  popUp.classList.add('active');
  scrollLock.disablePageScroll(document.body);
  window.addEventListener('keydown', onKeyPress);
}

// При закритті модалки розблоковуємо скрол
// Видаляємо слухача щоб не валявся й не займав пам'ять

function closeAuthPopUp() {
  popUp.classList.remove('active');
  scrollLock.enablePageScroll(document.body);
  window.removeEventListener('keydown', onKeyPress);
}

// Закриваємо модалку по кліку на Backdrop

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeAuthPopUp();
  }
}

// Закриваємо модалку по натисканню на ESC

function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeAuthPopUp();
  }
}

// if (window.location.pathname.includes('partials/authorization.html')) {
// popUp.classList.add('active');
// }
// openPopUp.addEventListener('click', function (e) {
//   e.preventDefault();
//   popUp.classList.add('active');
// });
//
// closePopUp.addEventListener('click', () => {
// window.location.href = '/index.html';
// window.location.href = 'https://yuriyaza.github.io/goit-team-project-02/';
// popUp.classList.remove('active');
// });