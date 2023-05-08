const closePopUp = document.querySelector('#popup-close');
const popUp = document.querySelector('#popup');

if (window.location.pathname.includes('partials/authorization.html')) {
  popUp.classList.add('active');
}
// openPopUp.addEventListener('click', function (e) {
//   e.preventDefault();
//   popUp.classList.add('active');
// });

closePopUp.addEventListener('click', () => {
  window.location.href = '/';
  popUp.classList.remove('active');
});
