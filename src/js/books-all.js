// const btn = document.querySelector('.see-more');
// const cards = Array.from(document.querySelectorAll('.books-all-item'))

// function openCatalog() {
//     btn.addEventListener('click', () => {
//         cards.forEach(item => item.classList.remove('hidden'));
        
//     })
// }

// function response1() {
//     if(window.innerWidth > 1439) {
//         cards.forEach((item, index) =>{
//             item.classList.add('hidden')
//             if (index <= 4) {
//                 item.classList.remove('hidden')
//             } 
//             openCatalog()
//         })
//     }
// }


// ===== Отримання даних із сервера та створення динамічної розмітки =====

import { BookAPI } from './api';
import { Notify } from 'notiflix';

const bookApi = new BookAPI();
const spinner = document.querySelector('.spinner');

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });
window.addEventListener('resize', hideInvisibleBooks);

export async function renderSectionBooksAll() {
  document.querySelector('.books-content').innerHTML = '';
  spinner.classList.remove('visually-hidden');
  
  const backEndData = await booksAllGetFromBackend();
  if (backEndData.length === 0) Notify.failure('Books not found');
  const markup = booksAllCreateMarkup(backEndData);
  document.querySelector('.books-content').innerHTML = markup;
  hideInvisibleBooks();
  
  spinner.classList.add('visually-hidden');
}

async function booksAllGetFromBackend() {
  return await bookApi.getTopBooks();
}

function booksAllCreateMarkup(backEndCategories) {
  let markup = '';
  markup += `
  <h1 class="books-all-title">Best Sellers <span class="colortext">Books</span></h1>
  `;
  markup += backEndCategories.map(booksAllCreateOneCategory).join('');
  return markup;
}

function booksAllCreateOneCategory(bookCategory) {
  return `
        <h3 class="books-all-menu">${bookCategory.list_name}</h3>
        <ul class="books-all">
          <li class="books-all-item" data-book-sequence="0">
            <a class="books-all-link" href="#" data-modal-open data-id=" ">
            <img class="books-all-image" src="${bookCategory.books[0].book_image}" alt="${bookCategory.books[0].title}" loading="lazy">
            <div class="books-info">
              <p class="info-item">${bookCategory.books[0].title}</p>
              <p class="info-detail-item">${bookCategory.books[0].author}</p>
            </div>
            </a>
          </li>
          <li data-book-sequence="1">
            <a class="books-all-link" href="#" data-modal-open data-id=" ">
            <img class="books-all-image" src="${bookCategory.books[1].book_image}" alt="${bookCategory.books[1].title}" loading="lazy">
            <div class="books-info">
              <p class="info-item">${bookCategory.books[1].title}</p>
              <p class="info-detail-item">${bookCategory.books[1].author}</p>
            </div>
          </li>
          <li data-book-sequence="2">
            <a class="books-all-link" href="#" data-modal-open data-id=" ">
            <img class="books-all-image" src="${bookCategory.books[2].book_image}" alt="${bookCategory.books[2].title}" loading="lazy">
            <div class="books-info">
              <p class="info-item">${bookCategory.books[2].title}</p>
              <p class="info-detail-item">${bookCategory.books[2].author}</p>
            </div>
          </li>
          <li data-book-sequence="3">
            <a class="books-all-link" href="#" data-modal-open data-id=" ">
            <img class="books-all-image" src="${bookCategory.books[3].book_image}" alt="${bookCategory.books[3].title}" loading="lazy">
            <div class="books-info">
              <p class="info-item">${bookCategory.books[3].title}</p>
              <p class="info-detail-item">${bookCategory.books[3].author}</p>
            </div>
            </a>
          </li>
          <li data-book-sequence="4">
            <a class="books-all-link" href="#" data-modal-open data-id=" ">
            <div class="books-all-overlay">
              <img class="books-all-image" src="${bookCategory.books[4].book_image}" alt="${bookCategory.books[4].title}" loading="lazy">
              <p class="overlay">QUICK VIEW</p>
            </div>
          </div>  
            <div class="books-info">
              <p class="info-item">${bookCategory.books[4].title}</p>
              <p class="info-detail-item">${bookCategory.books[4].author}</p>
            </div>
          </li>
        </ul>
        <div class="loading">
          <button class="see-more" type="button">SEE MORE</button>
        </div>
      </li>
    </ul>
  `;
}

function hideInvisibleBooks() {
  booksCountOnScreen = 1;
  if (window.innerWidth >= 768) booksCountOnScreen = 3;
  if (window.innerWidth >= 1440) booksCountOnScreen = 5;

  const booksVisible = document.querySelectorAll('[data-book-sequence]');
  booksVisible.forEach(book => {
    if (book.dataset.bookSequence >= booksCountOnScreen) {
      book.classList.add('visually-hidden');
    } else book.classList.remove('visually-hidden');
  });
}

// ===== Кінець блоку отримання даних із сервера та створення динамічної розмітки =====
