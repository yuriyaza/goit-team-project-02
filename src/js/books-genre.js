import { BookAPI } from './api';
import { Notify } from 'notiflix';
import { openModalBookDetails } from './modal-window';

const bookApi = new BookAPI();
const spinner = document.querySelector('.spinner');

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

export async function renderSectionBooksGenre(genreName, categoryName) {
  document.querySelector('.books-content').innerHTML = '';
  spinner.classList.remove('visually-hidden');

  const backEndData = await booksGenreGetFromBackend(genreName);
  console.log(backEndData);

  if (backEndData.length === 0) Notify.failure('Books not found');

  const markup = booksGenreCreateMarkup(categoryName, backEndData);
  document.querySelector('.books-content').innerHTML = markup;
  spinner.classList.add('visually-hidden');
  addUserClickListener();
}

async function booksGenreGetFromBackend(genreName) {
  return await bookApi.getCategory(genreName);
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
        <a class="books-genre-link" href="#" data-modal-open>
          <div class="books-card">
            <img class="books-card-title-img" src="${backEndBookList.book_image}" alt="${backEndBookList.title}" loading="lazy">                   
            <a href="#" class="overlay">QUICK VIEW</a>
            </div>
          <div class="books-card-info">
            <h3 class="books-card-title">${backEndBookList.title}</h3>
            <p class="books-card-autor">${backEndBookList.author}</p>
          </div>
        </a> 
      </li>
  `;
}
function addUserClickListener() {
  const categoryEls = document.querySelectorAll('.books-genre-item');
  categoryEls.forEach(categoryEl => {
    categoryEl.addEventListener('click', onUserClick);
  });
}

function onUserClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('books-genre-link')) {
    const bookID = event.target.dataset.id;
    openModalBookDetails(bookID);
  }
}
