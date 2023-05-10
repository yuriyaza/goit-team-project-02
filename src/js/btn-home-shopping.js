// var array = document.querySelectorAll(".header-nav a");
// toggleClass = function () {
//      for (var j = 0; j < array.length; j++) {
//          array[j].classList.remove('header-home-off ');
//          this.classList.add('header-home-off ');
//          }
// };

// for (var j = 0; j < array.length; j++) {
//      array[j].addEventListener('click', toggleClass);
// }


// const menu = document.querySelector('.header-menu');
// const menuItems = document.querySelectorAll('.menuItem');
// const headerNav = document.querySelector('.header-nav');
// const closeIcon = document.querySelector('.header-menu-open ');
// const menuIcon = document.querySelector('.header-menu-closed');
// const headerHomeOn = document.querySelector('.header-home-on ');
// const headerHomeOff = document.querySelector('.header-home-off');

// const headerShoppingOn = document.querySelector('.header-shopping-on');
// const headerShoppingOff = document.querySelector('.header-shopping-off');

// function toggleMenu() {
//   if (menu.classList.contains('showMenu')) {
//     menu.classList.remove('showMenu');
//     closeIcon.style.display = 'block';
//     menuIcon.style.display = 'none';
//   } else {
//     menu.classList.add('showMenu');
//     closeIcon.style.display = 'none';
//     menuIcon.style.display = 'block';
//   }
// }
// function toggleHome() {
//   if (headerShoppingOn.style.display === 'none') {
//     headerShoppingOff.style.display = 'none';
//     headerShoppingOn.style.display ='block';
//     headerHomeOn.style.display = 'none';
//     headerHomeOff.style.display = 'block';
   
//   } else {
//     headerShoppingOn.style.display ='none';
//     headerHomeOff.style.display = 'none';
//     headerShoppingOff.style.display = 'block';
//     headerHomeOn.style.display = 'block';
//   }
// }


// const buttons = [...document.querySelectorAll('.btn')];

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//     document.querySelector('.btn.active').classList.remove('active');
//     button.classList.add('active');
//   })
// })

// console.log(buttons)


// function toggleHome() {
//   if (headerHomeOff.style.display === 'none') {
//     headerHomeOff.style.display = 'block';  
//     headerHomeOn.style.display = 'block';
//     headerShoppingOff.style.display = 'none';
//     headerShoppingOn.style.display = 'none';
//   } else {
//     headerShoppingOn.style.display = 'none';
//     headerHomeOn.style.display = 'block';
//     headerHomeOff.style.display = 'none';
    
//   }
// }
// console.log(toggleHome())
// // closeIcon.addEventListener('click', toggleHome);
// // menuIcon.addEventListener('click', toggleHome);
// // headerHomeOn.addEventListener('click', toggleHome);
// headerHomeOff.addEventListener('click', toggleHome);
// // headerShoppingOn.addEventListener('click', toggleHome);
// headerShoppingOff.addEventListener('click', toggleHome);



// // menuItems.forEach(function (menuItem) {
// //   menuItem.addEventListener('click', toggleMenu);
// // });
// const toggleBtn = document.querySelector('#toggleBtn');
// toggleBtn.addEventListener('click', toggleHome);



