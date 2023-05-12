import { BookAPI } from './api';
import { Notify } from 'notiflix';
import { openModalBookDetails } from './modal-window';

const bookApi = new BookAPI();

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

export async function renderSectionBooksGenre(genreName, categoryName) {
  document.querySelector('.books-content').innerHTML = '';

  const backEndData = await bookApi.getCategory(genreName);
  if (backEndData.length === 0) Notify.failure('Books not found');

  const markup = booksGenreCreateMarkup(categoryName, backEndData);
  document.querySelector('.books-content').innerHTML = markup;

  window.scrollTo(0, 0);
  addUserClickListener();
}

function booksGenreCreateMarkup(genreName, backEndBookList) {
  const genreNameByWord = genreName.split(' ');
  const genreNameFirstWords = genreNameByWord
    .slice(0, genreNameByWord.length - 1)
    .join(' ');
  const genreNameLastWords = genreNameByWord
    .slice(genreNameByWord.length - 1)
    .join(' ');

  let markup = '';
  markup += `
    <h1 class="books-genre-title">${genreNameFirstWords}&nbsp;<span class="books-genre-title-attribute">${genreNameLastWords}</span></h1>
    <ul class="books-genre-card-container">
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
          <div class="books-card" data-action="quick-view" data-id="${backEndBookList._id}">
            <img class="books-card-title-img" src="${backEndBookList.book_image}" alt="${backEndBookList.title}" loading="lazy">                   
            <div class="quick-view">QUICK VIEW</div>
          </div>
          <div class="books-card-info">
            <h3 class="books-card-title">${backEndBookList.title}</h3>
            <p class="books-card-autor">${backEndBookList.author}</p>
          </div>
      </li>
  `;
}
function addUserClickListener() {
  const categoryEls = document.querySelectorAll('.books-genre-card-container');
  categoryEls.forEach(categoryEl => {
    categoryEl.addEventListener('click', onUserClick);
  });
}

function onUserClick(event) {
  if (event.target.parentNode.dataset.action === 'quick-view') {
    const bookID = event.target.parentNode.dataset.id;
    openModalBookDetails(bookID);
  }
}
