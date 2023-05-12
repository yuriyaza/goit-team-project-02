(function ($) {
  $.switcher = function (filter) {
    var $haul = $('input[type=checkbox]');

    if (filter !== undefined && filter.length) {
      $haul = $haul.filter(filter);
    }

    $haul.each(function () {
      var $checkbox = $(this).hide(),
        $switcher = $(document.createElement('div'))
          .addClass('ui-switcher')
          .attr('aria-checked', $checkbox.is(':checked'));

      toggleSwitch = function (e) {
        if (e.target.type === undefined) {
          $checkbox.trigger(e.type);
        }
        document.body.classList.toggle('theme-dark');
        $switcher.attr('aria-checked', $checkbox.is(':checked'));
      };

      $switcher.on('click', toggleSwitch);

      $switcher.insertBefore($checkbox);
    });
  };
})(jQuery);

// document.body.classList.toggle('theme-light');
// let changeThemeButtons = document.querySelectorAll('.switch'); // Помещаем кнопки смены темы в переменную

// changeThemeButtons.forEach(button => {
//     button.addEventListener('click', function () { // К каждой добавляем обработчик событий на клик
//         let theme = this.dataset.theme; // Помещаем в переменную название темы из атрибута data-theme
//         applyTheme(theme); // Вызываем функцию, которая меняет тему и передаем в нее её название
//     });
// });

// function applyTheme(themeName) {
//     document.querySelector('[title="theme"]').setAttribute('href',`sass/theme-${themeName}.scss`); // Помещаем путь к файлу темы в пустой link в head
//     changeThemeButtons.forEach(button => {
//         button.style.display = 'block'; // Показываем все кнопки смены темы
//     });
//     // document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрываем кнопку для активной темы
// }

//  // функція для встановлення певної теми/колірної схеми
//  function setTheme(themeName) {
//     localStorage.setItem('theme', themeName);
//     document.documentElement.className = themeName;
// }

// // функція для перемикання між світлою та темною темами
// function toggleTheme() {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-light');
//     } else {
//         setTheme('theme-dark');
//     }
// }

// // Негайно викликана функція для встановлення теми під час початкового завантаження
// (function () {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-dark');
//         document.getElementById('slider').checked = false;
//     } else {
//         setTheme('theme-light');
//       document.getElementById('slider').checked = true;
//     }
// })();

(function setActiveMenuItem() {
  const activePage = document.body.dataset.activePage;
  const homeMenuItem = document.querySelector('[data-home-btn]');
  const shoppingMenuItem = document.querySelector('[data-shopping-btn]');

  if (activePage === 'home') {
    shoppingMenuItem.classList.remove('active');
    homeMenuItem.classList.add('active');
  } else {
    homeMenuItem.classList.remove('active');
    shoppingMenuItem.classList.add('active');
  }
})();
