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


// Підсвічування активної сторінки в меню

(function setActiveMenuItem() {
  const activePage = document.body.dataset.activePage;
  const homeMenuItem = document.querySelectorAll('[data-home-btn]');
  const shoppingMenuItem = document.querySelectorAll('[data-shopping-btn]');

  if (activePage === 'home') {
    for (const item of shoppingMenuItem) { 
      item.classList.remove('active');
    }
    for (const item of homeMenuItem) { 
      item.classList.add('active');
    }
  } else {
    for (const item of homeMenuItem) {
      item.classList.remove('active');
    }
    for (const item of shoppingMenuItem) {
      item.classList.add('active');
    }
  }
})();

// Зберігання та відображення темної/світлої теми

const localStorageName = 'theme';
let themeName = 'theme-light';

const checkboxEl = document.querySelector('.form-check-input');
checkboxEl.addEventListener('click', onClickFun);

function onClickFun() {
  const checkboxStatus = checkboxEl.checked;
  if (checkboxStatus === true) {
    themeName = 'theme-dark';
    setTheme(themeName);
    return;
  }
  localStorage.removeItem(localStorageName);
  themeName = 'theme-light';
  setTheme(themeName);
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  // console.log('hi im-', themeName); //-  этот консоль потом удали просто показываю что он работает
  // сюда нужно прописать куда применятся стили в themeName (основная отрисовка стилей)
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    checkboxEl.checked = true;
    document.body.classList.add('theme-dark');
    return;
  } else {
    setTheme('theme-light');
    checkboxEl.checked = false;
    document.body.classList.remove('theme-dark');
  }
})();
