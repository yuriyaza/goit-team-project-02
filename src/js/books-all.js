

// ===== Отримання даних із сервера та створення динамічної розмітки =====

import { BookAPI } from './api';
import { Notify } from 'notiflix';
import { seeMoreFunc } from './categories-list';
import { renderSectionBooksGenre } from './books-genre';
import { openModalBookDetails } from './modal-window';

const bookApi = new BookAPI();

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });
window.addEventListener('resize', hideInvisibleBooks);

export async function renderSectionBooksAll() {
  document.querySelector('.books-content').innerHTML = '';

  const backEndData = loadFromLocalStorage();
  // const backEndData = await bookApi.getTopBooks();
  if (backEndData.length === 0) Notify.failure('Books not found');
  
  const markup = booksAllCreateMarkup(backEndData);
  document.querySelector('.books-content').innerHTML = markup;
  hideInvisibleBooks();
  
  window.scrollTo(0, 0);
  addUserClickListener();
}
function loadFromLocalStorage() {
    const savedData = localStorage.getItem("top-books");
    const parsedData = JSON.parse(savedData);
    return parsedData;
}
function booksAllCreateMarkup(backEndCategories) {
  let markup = '';
  markup += `
    <h1 class="books-all-title">Best Sellers <span class="colortext">Books</span></h1>
    <ul class="books-all-category-list">
  `;
  markup += backEndCategories.map(booksAllCreateOneCategory).join('');
  markup += `
    </ul>
  `;
  return markup;
}

function booksAllCreateOneCategory(bookCategory) {
  return `
    <li class="books-all-category-item">
      <h2 class="books-all-menu">${bookCategory.list_name}</h3>
      <ul class="books-all">
        <li class="books-all-item" data-book-sequence="0">
          <div class="books-all-wrapp" data-action="quick-view" data-id="${bookCategory.books[0]._id}">
            <img class="books-all-image" src="${bookCategory.books[0].book_image}" alt="${bookCategory.books[0].title}" loading="lazy">
            <div class="quick-view">QUICK VIEW</div>
          </div>
          <div class="books-info">
            <p class="info-item">${bookCategory.books[0].title}</p>
            <p class="info-detail-item">${bookCategory.books[0].author}</p>
          </div>
        </li>
        <li class="books-all-item" data-book-sequence="1">
          <div class="books-all-wrapp" data-action="quick-view" data-id="${bookCategory.books[1]._id}">
            <img class="books-all-image" src="${bookCategory.books[1].book_image}" alt="${bookCategory.books[1].title}" loading="lazy">
            <div class="quick-view">QUICK VIEW</div>
          </div>
          <div class="books-info">
            <p class="info-item">${bookCategory.books[1].title}</p>
            <p class="info-detail-item">${bookCategory.books[1].author}</p>
          </div>
        </li>
        <li class="books-all-item" data-book-sequence="2">
          <div class="books-all-wrapp" data-action="quick-view" data-id="${bookCategory.books[2]._id}"> 
            <img class="books-all-image" src="${bookCategory.books[2].book_image}" alt="${bookCategory.books[2].title}" loading="lazy">
            <div class="quick-view">QUICK VIEW</div>
          </div>
          <div class="books-info">
            <p class="info-item">${bookCategory.books[2].title}</p>
            <p class="info-detail-item">${bookCategory.books[2].author}</p>
          </div>
        </li>
        <li class="books-all-item" data-book-sequence="3">
          <div class="books-all-wrapp" data-action="quick-view" data-id="${bookCategory.books[3]._id}"> 
            <img class="books-all-image" src="${bookCategory.books[3].book_image}" alt="${bookCategory.books[3].title}" loading="lazy">
            <div class="quick-view">QUICK VIEW</div>
          </div>
          <div class="books-info">
            <p class="info-item">${bookCategory.books[3].title}</p>
            <p class="info-detail-item">${bookCategory.books[3].author}</p>
          </div>
        </li>
        <li class="books-all-item" data-book-sequence="4">
          <div class="books-all-wrapp" data-action="quick-view" data-id="${bookCategory.books[4]._id}"> 
            <img class="books-all-image" src="${bookCategory.books[4].book_image}" alt="${bookCategory.books[4].title}" loading="lazy"> 
            <div class="quick-view">QUICK VIEW</div>
          </div>
          <div class="books-info">
            <p class="info-item">${bookCategory.books[4].title}</p>
            <p class="info-detail-item">${bookCategory.books[4].author}</p>
          </div>
        </li>
      </ul>
      <div class="loading">
        <button class="see-more" type="button" data-section="${bookCategory.list_name}">SEE MORE</button>
      </div>
    </li>
  `;
}

function hideInvisibleBooks() {
  let booksCountOnScreen = 1;
  if (window.innerWidth >= 768) booksCountOnScreen = 3;
  if (window.innerWidth >= 1440) booksCountOnScreen = 5;

  let booksVisible = document.querySelectorAll('[data-book-sequence]');
  booksVisible.forEach(book => {
    if (book.dataset.bookSequence >= booksCountOnScreen) {
      book.classList.add('visually-hidden');
    } else book.classList.remove('visually-hidden');
  });
}

// ===== Кінець блоку отримання даних із сервера та створення динамічної розмітки =====
// Вішаємо загального слухача подій на секцію (слухаємо всі натискання)

function addUserClickListener() {
  const categoryEl = document.querySelector('.books-all-category-list');
  categoryEl.addEventListener('click', onUserClick);
}

function onUserClick(event) {
  // Якщо користувач натиснув на книгу - викликаємо модальне вікно

  if (event.target.parentNode.dataset.action === 'quick-view') {
    const bookID = event.target.parentNode.dataset.id;
    openModalBookDetails(bookID);
  }

  // Якщо користувач натиснув на кнопку "See More" - викликаємо функцію що рендерить секцію Олега

  if (event.target.classList.contains('see-more')) {
    const section = event.target.dataset.section;
    seeMoreFunc(section);
    const url = section.split(' ').join('%20');
    renderSectionBooksGenre(url, section);
  }
}
