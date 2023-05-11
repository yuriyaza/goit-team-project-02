const menu = document.querySelector('.header-menu');
const menuItems = document.querySelectorAll('.menuItem');

const closeIcon = document.querySelector('.header-menu-open ');
const menuIcon = document.querySelector('.header-menu-closed');

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

closeIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
