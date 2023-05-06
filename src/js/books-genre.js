import { BookAPI } from './api';



catBooksEl = document.querySelector('.books-genre');
const api = new BookAPI();



async function getData() {
    console.log('local storage');
    const category = await api.getCategory();
    localStorage.setItem('books-genre', JSON.stringify(category));
}
getData();


// ===== Отримання даних із сервера та створення динамічної розмітки =====

import { Notify } from 'notiflix';
import { BookAPI } from './api';
const bookApi = new BookAPI();

export async function renderSectionBooksGenre(genreName) {
  const backEndData = await booksGenreGetFromBackend(genreName);
  console.log(backEndData);
  const markup = booksGenreCreateMarkup(genreName, backEndData);
  document.querySelector('.books-content').innerHTML = markup;
}

async function booksGenreGetFromBackend(genreName) {
  return await bookApi.getCategory(genreName);
}

function booksGenreCreateMarkup(genreName, backEndBookList) {
  const genreNameByWord = genreName.split(' ');
  const genreNameFirstWords = genreNameByWord
    .slice(0, genreNameByWord.length-1)
    .join(' ');
  const genreNameLastWords = genreNameByWord
    .slice(genreNameByWord.length-1)
    .join(' ');
  
  let markup = '';
  markup += `
    <h1 class="books-genre-title">${genreNameFirstWords}&nbsp;<span class="books-genre-title-attribute">${genreNameLastWords}</span></h1>
    <ul class="books-genre-card-conteiner">
  `;
  markup += backEndBookList.map(booksGenreCreateOneCard).join('');
  markup += `
    </ul>
  `;
  return markup;
}

function booksGenreCreateOneCard(backEndBookList) {
  return `
      <li class="books-genre-item">
        <a href="#" class="books-genre-link" rel=" " data-id=" ">
          <div class="books-card">
            <img class="books-card-title-img" src="${backEndBookList.book_image}" alt="${backEndBookList.title}" width="" height="" loading="lazy">
          </div>
          <div class="books-card-info">
            <h3 class="books-card-title">${backEndBookList.title}</h3>
            <p class="books-card-autor">${backEndBookList.author}</p>
          </div>
        </a> 
      </li>
  `;
}

// Перевірка роботи
// renderSectionBooksGenre('Audio Fiction');

// ===== Кінець блоку отримання даних із сервера та створення динамічної розмітки =====
