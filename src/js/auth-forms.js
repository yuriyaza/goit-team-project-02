import scrollLock from 'scroll-lock';

// Открытие 1 модалки

const popUp1 = document.querySelector('#popup-1');
const backdrop1 = document.querySelector('#popup-container-1');
const openPopUp1 = document.querySelector('.header-sign-btn');
const closePopUp1 = document.querySelector('#popup-close-1');
const switchPupUp1 = document.querySelector('#switch-button-1');
const openPopUpMenu = document.querySelector('.header-sign-open-menu');

openPopUpMenu.addEventListener('click', openAuthPopUp1);
openPopUp1.addEventListener('click', openAuthPopUp1);
closePopUp1.addEventListener('click', closeAuthPopUp);
switchPupUp1.addEventListener('click', switchAuthPopUp1);
backdrop1.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onKeyPress);

function openAuthPopUp1(event) {
  try {
    event.preventDefault();
  } catch {}
  popUp1.classList.add('active');
  scrollLock.disablePageScroll(document.body);
  window.addEventListener('keydown', onKeyPress);
}

function switchAuthPopUp1() {
  closeAuthPopUp();
  openAuthPopUp2();
}

// Открытие 2 модалки

const popUp2 = document.querySelector('#popup-2');
const backdrop2 = document.querySelector('#popup-container-2');
const closePopUp2 = document.querySelector('#popup-close-2');
const switchPupUp2 = document.querySelector('#switch-button-2');

closePopUp2.addEventListener('click', closeAuthPopUp);
switchPupUp2.addEventListener('click', switchAuthPopUp2);
backdrop2.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onKeyPress);

function openAuthPopUp2(event) {
  try {
    event.preventDefault();
  } catch {}
  popUp2.classList.add('active');
  scrollLock.disablePageScroll(document.body);
  window.addEventListener('keydown', onKeyPress);
}

function switchAuthPopUp2() {
  closeAuthPopUp();
  openAuthPopUp1();
}

// Общие функции

export function closeAuthPopUp() {
  popUp1.classList.remove('active');
  popUp2.classList.remove('active');
  scrollLock.enablePageScroll(document.body);
  window.removeEventListener('keydown', onKeyPress);
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeAuthPopUp();
  }
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeAuthPopUp();
  }
}

// Вариант новый

// import scrollLock from 'scroll-lock';

// const openPopUp = document.querySelector('.header-sign-btn');
// const closePopUp = document.querySelector('#popup-close');
// const popUp = document.querySelector('#popup');
// const backdrop = document.querySelector('#popup-container');

// openPopUp.addEventListener('click', openAuthPopUp);
// closePopUp.addEventListener('click', closeAuthPopUp);
// backdrop.addEventListener('click', onBackdropClick);
// window.addEventListener('keydown', onKeyPress);

// // Вішаємо слухача на кнопку Юри ('.header-sign-btn')
// // По натисканню відкриваємо модалку, блокуємо скрол под модалкою
// // Добавляємо слухача на натискання клавіш, щоб можна було закрити по ESC

// function openAuthPopUp(event) {
//   event.preventDefault();
//   popUp.classList.add('active');
//   scrollLock.disablePageScroll(document.body);
//   window.addEventListener('keydown', onKeyPress);
// }

// // При закритті модалки розблоковуємо скрол
// // Видаляємо слухача щоб не валявся й не займав пам'ять

// function closeAuthPopUp() {
//   popUp.classList.remove('active');
//   scrollLock.enablePageScroll(document.body);
//   window.removeEventListener('keydown', onKeyPress);
// }

// // Закриваємо модалку по кліку на Backdrop

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     closeAuthPopUp();
//   }
// }

// // Закриваємо модалку по натисканню на ESC

// function onKeyPress(event) {
//   if (event.code === 'Escape') {
//     closeAuthPopUp();
//   }
// }

// Вариант старый

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
