const menu = document.querySelector('.header-menu');
const menuItems = document.querySelectorAll('.menuItem');
// const headerNav = document.querySelector('.header-nav');
const closeIcon = document.querySelector('.header-menu-open ');
const menuIcon = document.querySelector('.header-menu-closed');
// const headerHomeOn = document.querySelector('.header-home-on ');
// const headerHomeOff = document.querySelector('.header-home-off');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  }
}

// function toggleHome() {
//   if (headerHomeOff.classList.contains('showMenu')) {
//     headerHomeOff.classList.remove('showMenu');
//     headerHomeOff.style.display = 'block';
//     headerHomeOn.style.display = 'none';
//   } else {
//     headerHomeOff.classList.add('showMenu');
//     headerHomeOff.style.display = 'none';
//     headerHomeOn.style.display = 'block';
//   }
// }

closeIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);
// headerHomeOn.addEventListener('click', toggleHome);
// headerHomeOff.addEventListener('click', toggleHome);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
