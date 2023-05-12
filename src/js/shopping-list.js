const shoppingList = document.querySelector('.shopping-list');
const shoppingListEmptyEl = document.querySelector('.shopping-list-empty');

import Amazon from '../images/amazon.png';
import Apple from '../images/appleshop.png';
import Bookshop from '../images/boockshop.png';
import Trash from '../images/sprite.svg';

//Pagination
const easyPagination = ({
  items,
  rows = 10,
  handlePaginatedItems,
  buttonsWrapper,
  buttonsContainerClass = 'pagination',
  buttonClass = 'page-link',
  nextClass = 'page-link',
  prevClass = 'page-link',
  nextText = '>',
  prevText = '<',
  firstClass = 'page-link',
  firstText = '<<',
  lastClass = 'page-link',
  lastText = '>>',
  activeClass = 'active',
}) => {
  if (!items) {
    console.error('items not defined. Send {items: ...} as a parameter.');
    return false;
  }

  const generateUID = () => {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ('000' + firstPart.toString(36)).slice(-3);
    secondPart = ('000' + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  };

  const createPaginationButtons = ({ wrapper }) => {
    let paginationButtons = document.createElement('div');

    paginationButtons.classList.add(
      'pagination-' + uuid,
      buttonsContainerClass
    );

    let paginationButton = page => {
      let button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add(buttonClass);

      if (currentPage === page) button.classList.add(activeClass);

      button.innerHTML = page;

      button.addEventListener('click', function () {
        currentPage = page;

        self.paginate(currentPage, false);

        let current_btn = getActiveBtn();
        current_btn.classList.remove('active');

        button.classList.add('active');
      });

      return button;
    };

    let prevNextBtns = () => {
      let prevBtn = document.createElement('button');
      prevBtn.setAttribute('type', 'button');
      prevBtn.classList.add('page-link');
      prevBtn.classList.add('prevClass');
      prevBtn.innerHTML = prevText;

      let nextBtn = document.createElement('button');
      nextBtn.setAttribute('type', 'button');
      nextBtn.classList.add('page-link');
      nextBtn.classList.add('nextClass');
      nextBtn.innerHTML = nextText;

      // let firstBtn = document.createElement('button');
      // firstBtn.setAttribute('type', 'button');
      // firstBtn.classList.add('page-link');
      // firstBtn.classList.add('firstClass');
      // firstBtn.innerHTML = firstText;

      // let lastBtn = document.createElement('button');
      // lastBtn.setAttribute('type', 'button');
      // lastBtn.classList.add('page-link');
      // lastBtn.classList.add('lastClass');
      // lastBtn.innerHTML = lastText;

      prevBtn.addEventListener('click', () => {
        self.prev();
      });

      nextBtn.addEventListener('click', () => {
        self.next();
      });

      // firstBtn.addEventListener('click', () => {
      //   self.first();
      // });
      // lastBtn.addEventListener('click', () => {
      //   self.last();
      // });

      return { prevBtn, nextBtn };
    };

    const { prevBtn, nextBtn } = prevNextBtns();

    // paginationButtons.appendChild(firstBtn);
    paginationButtons.appendChild(prevBtn);

    for (let i = 1; i < pageCount + 1; i++) {
      let btn = paginationButton(i);
      paginationButtons.appendChild(btn);
    }

    paginationButtons.appendChild(nextBtn);
    // paginationButtons.appendChild(lastBtn);

    wrapper.appendChild(paginationButtons);
  };

  const getAllBtns = () => {
    return document.querySelectorAll(`.${'pagination-' + uuid} button`);
  };

  const getActiveBtn = () => {
    return document.querySelector(`.${'pagination-' + uuid} button.active`);
  };

  const uuid = generateUID();
  rows = parseInt(rows);
  let currentPage = 1;
  let pageCount = Math.ceil(items.length / rows);
  const hasButtons = typeof buttonsWrapper != 'undefined';

  const self = {
    paginate: (page = 1, loadButtons = true) => {
      page--;

      let start = rows * page;
      let end = start + rows;
      let paginatedItems = items.slice(start, end);

      if (loadButtons && buttonsWrapper)
        createPaginationButtons({
          wrapper: document.querySelector(buttonsWrapper),
        });

      if (handlePaginatedItems) {
        handlePaginatedItems(paginatedItems);
      } else return paginatedItems;
    },
    // first: () => {
    //   if (currentPage === 0) return;
    //   currentPage = 0;
    //   let page = currentPage;
    //   let start = rows * page;
    //   let end = start + rows;
    //   let paginatedItems = items.slice(start, end);

    //   if (hasButtons) {
    //     let current_btn = getActiveBtn();
    //     if (currentPage != 0) {
    //       current_btn.classList.remove('active');
    //       current_btn.nextElementSibling.classList.add('active');
    //     }
    //   }

    //   if (handlePaginatedItems) {
    //     handlePaginatedItems(paginatedItems);
    //   } else return paginatedItems;
    // },
    // last: () => {
    //   if (currentPage === pageCount) return;
    //   currentPage = pageCount - 1;
    //   let page = currentPage;
    //   let start = rows * page;
    //   let end = start + rows;
    //   let paginatedItems = items.slice(start, end);

    //   if (hasButtons) {
    //     let current_btn = getActiveBtn();

    //     current_btn.classList.remove('active');
    //     current_btn.nextElementSibling.classList.add('active');
    //   }

    //   if (handlePaginatedItems) {
    //     handlePaginatedItems(paginatedItems);
    //   } else return paginatedItems;
    // },
    next: () => {
      if (currentPage >= pageCount) return;
      currentPage++;
      let page = currentPage - 1;
      let start = rows * page;
      let end = start + rows;
      let paginatedItems = items.slice(start, end);

      if (hasButtons) {
        let current_btn = getActiveBtn();
        current_btn.classList.remove('active');
        current_btn.nextElementSibling.classList.add('active');
      }

      if (handlePaginatedItems) {
        handlePaginatedItems(paginatedItems);
      } else return paginatedItems;
    },
    prev: () => {
      if (currentPage === 1) return;
      currentPage--;

      let page = currentPage - 1;
      let start = rows * page;
      let end = start + rows;
      let paginatedItems = items.slice(start, end);

      if (hasButtons) {
        let currentButton = getActiveBtn();
        currentButton.classList.remove('active');
        currentButton.previousElementSibling.classList.add('active');
      }

      if (handlePaginatedItems) {
        handlePaginatedItems(paginatedItems);
      } else return paginatedItems;
    },
    changeRows: (newRows = 10) => {
      rows = parseInt(newRows);
      document.querySelector('.pagination-' + uuid).remove();
      self.paginate(currentPage);
    },
    changeItems: newItems => {
      if (!newItems) return false;

      document.querySelector('.pagination-' + uuid)?.remove();

      items = newItems;
      pageCount = Math.ceil(items.length / rows);
      currentPage = 1;

      self.paginate(1);
    },
  };

  return self;
};
//Pagination^^^^^^^^

const paginationEl = document.getElementById('pagination');

let booksArray = JSON.parse(localStorage.getItem('shopping-trash'));

appendShoppingListMarkup();

function createShoppingList(booksArray) {
  return booksArray.reduce((acc, item) => {
    return (
      acc +
      ` <div class="book-card" id="${item._id}">
        <div class="shopping-list-img">
        <img
          class="book-img"
          src="${item.book_image}"
          alt="${item.title}"
          loading="lazy"
        />
      </div>
      <div class="info">
        <div class="first-info-div">
          <div>
            <p class="book-name">${item.title}</p>
            <p class="book-category">${item.list_name}</p>
          </div>
          <button class="remove-book">
            <svg class="trash-icon" width="16" height="16"><use href="${Trash}#trash"></use></svg>
          </button>
        </div>
        <div class="second-info-div">
          <p class="book-description">
           ${item.description}
          </p>
        </div>
        <div class="third-info-div">
          <div>
            <p class="book-author">
            ${item.author}
            </p>
          </div>
          <div class="shop-list-div">
          <ul class="shop-list">
               <li class="shop-item">
              <a class="shop-link" href="${item.buy_links[0].url}" target="_blank"><img class="shop-icon amazon-icon" src="${Amazon}" alt="amazon" width="32" height="11"></a>
              </li>
                <li class="shop-item">
                    <a class="shop-link" href="${item.buy_links[1].url}" target="_blank"><img class="shop-icon" src="${Apple}" alt="apple shop" width="16" height="16"></a>
                  </li>
                    <li class="shop-item">
                        <a class="shop-link" href="${item.buy_links[4].url}" target="_blank" ><img class="shop-icon book-shop-icon" src="${Bookshop}" alt="book shop" width="16" height="16"></a>
                      </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`
    );
  }, '');
}

function displayPagination() {
  let items = booksArray;
  paginationEl.innerHTML = '';
  const pagination = easyPagination({
    items,
    rows: 3,
    buttonsWrapper: '#pagination',
    handlePaginatedItems: items => {
      const list = document.getElementById('list');
      list.innerHTML = ' ';
      list.innerHTML = createShoppingList(items);
    },
  });

  pagination.paginate();
}
function appendShoppingListMarkup() {
  if (booksArray.length !== 0) {
    displayPagination();
    shoppingListisFilled();
  } else {
    shoppingList.innerHTML = '';
    paginationEl.innerHTML = '';
    shoppingListIsEmpty();
  }
}

function shoppingListIsEmpty() {
  shoppingListEmptyEl.classList.remove('shopping-list-filled');
}

function shoppingListisFilled() {
  shoppingListEmptyEl.classList.add('shopping-list-filled');
}
shoppingList.addEventListener('click', removeBook);

function removeBook(e) {

  if (e.target.nodeName === 'BUTTON') {
    let _bookId = e.target.closest('.book-card').id;

    // console.log(_bookId);
    // console.log(booksArray);
    booksArray.splice(
      booksArray.findIndex(item => item._id === _bookId),
      1
    );
    // console.log(booksArray);

    let card = document.getElementById(_bookId);
    // console.log(card);
    card.remove();
    localStorage.setItem('shopping-trash', JSON.stringify(booksArray));
    if (booksArray.length === 0) {
      shoppingListIsEmpty();
    }
    appendShoppingListMarkup();
  }
}
