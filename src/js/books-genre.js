import { BookAPI } from './api';
import { Notify } from 'notiflix';

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
        <a class="books-genre-link" href="#" data-modal-open data-id=" ">
          <div class="books-card">
            <img class="books-card-title-img" src="${backEndBookList.book_image}" alt="${backEndBookList.title}" loading="lazy">
          </div>
          <div class="books-card-info">
            <h3 class="books-card-title">${backEndBookList.title}</h3>
            <p class="books-card-autor">${backEndBookList.author}</p>
          </div>
        </a> 
      </li>
  `;
}

// function showVisibleBooks() {
//   let booksCountOnScreen = 1;
//   if (window.innerWidth >= 768) booksCountOnScreen = 3;
//   if (window.innerWidth >= 1440) booksCountOnScreen = 5;

//   const booksAll = document.querySelectorAll('.books-genre-item');
//   booksAll.forEach((book, index) => {
//     const rowNumber = Math.floor(index / booksCountOnScreen); // обчислення номеру рядка
//     const bookInRowNumber = index % booksCountOnScreen; // обчислення номеру книги в рядку
//     if (rowNumber === 0 && bookInRowNumber >= booksCountOnScreen) {
//       book.classList.add('visually-hidden'); // приховати книги, які перевищують максимальну кількість на рядку
//     } else {
//       book.classList.remove('visually-hidden'); // ппоказує книги,
//     }
//   });
// }
// showVisibleBooks();
