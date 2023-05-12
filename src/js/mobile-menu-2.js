import scrollLock from 'scroll-lock';

const menu = document.querySelector('.header-menu');
const menuItems = document.querySelectorAll('.menuItem');

const closeIcon = document.querySelector('.header-menu-open');
const closeIconShopping = document.querySelector('.header-menu-open-shopping');
const menuIcon = document.querySelector('.header-menu-closed');
const menuIconShopping = document.querySelector('.header-menu-closed-shopping');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    scrollLock.enablePageScroll(document.body);
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    scrollLock.disablePageScroll(document.body);
  }
}

// Close mobile menu on device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', onChangeOrientation);
function onChangeOrientation(event) {
  const menuIsOpen = menu.className.includes('showMenu');
  if (!event.matches || !menuIsOpen) return;
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    scrollLock.enablePageScroll(document.body);
}

closeIcon.addEventListener('click', toggleMenu);
closeIconShopping.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);
menuIconShopping.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});
