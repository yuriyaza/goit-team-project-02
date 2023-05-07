const openPopUp = document.querySelector('.header-sign-open');
const closePopUp = document.querySelector('#popup-close');
const popUp = document.querySelector('#popup');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
});
