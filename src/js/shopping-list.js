const shoppingList = document.querySelector(".shopping-list");
const shoppingListEmptyEl = document.querySelector(".shopping-list-empty");


import Amazon from './images/amazon.svg';
import Apple from './images/apple.svg';
import Bookshop from './images/bookshop.svg';
import Trash from './images/sprite.svg';



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
  nextText = 'next >',
  prevText = '< prev',
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

      if (currentPage == page) button.classList.add(activeClass);

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
      prevBtn.classList.add(prevClass);
      prevBtn.innerHTML = prevText;

      let nextBtn = document.createElement('button');
      nextBtn.setAttribute('type', 'button');
      nextBtn.classList.add(nextClass);
      nextBtn.innerHTML = nextText;

      let firstBtn = document.createElement('button');
      firstBtn.setAttribute('type', 'button');
      firstBtn.classList.add(firstClass);
      firstBtn.innerHTML = firstText;

      let lastBtn = document.createElement('button');
      lastBtn.setAttribute('type', 'button');
      lastBtn.classList.add(lastClass);
      lastBtn.innerHTML = lastText;

      prevBtn.addEventListener('click', () => {
        self.prev();
      });

      nextBtn.addEventListener('click', () => {
        self.next();
      });

      firstBtn.addEventListener('click', () => {
        self.first();
      });
      lastBtn.addEventListener('click', () => {
        self.last();
      });

      return { prevBtn, nextBtn, firstBtn, lastBtn };
    };

    const { prevBtn, nextBtn, firstBtn, lastBtn } = prevNextBtns();

    paginationButtons.appendChild(firstBtn);
    paginationButtons.appendChild(prevBtn);

    for (let i = 1; i < pageCount + 1; i++) {
      let btn = paginationButton(i);
      paginationButtons.appendChild(btn);
    }

    paginationButtons.appendChild(nextBtn);
    paginationButtons.appendChild(lastBtn);

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
    first: () => {
      if (currentPage === 0) return;
      currentPage = 0;
      let page = currentPage;
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
    last: () => {
      if (currentPage === pageCount - 1) return;
      currentPage = pageCount - 1;
      let page = currentPage;
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

//  строка-приклад, в вигляді якої прийдуть дані з локал сторіджа

let booksData = [
  {
    _id: '642fd89ac8cf5ee957f122cb',
    list_name: 'Trade Fiction Paperback',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Colleen Hoover',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg',
    book_image_width: 322,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/3aa85e47-4df9-53ef-9957-a77753d3502c',
    contributor: 'by Colleen Hoover',
    contributor_note: '',
    created_date: '2023-04-05 22:05:25',
    description:
      'In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1668001225',
    primary_isbn13: '9781668001226',
    publisher: 'Atria',
    rank: 1,
    rank_last_week: 1,
    sunday_review_link: '',
    title: 'IT STARTS WITH US',
    updated_date: '2023-04-05 22:10:15',
    weeks_on_list: 24,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781668001226?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781668001226',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BSTARTS%252BWITH%252BUS%252FColleen%252BHoover%252F9781668001226&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BSTARTS%252BWITH%252BUS%252BColleen%252BHoover',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668001226&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BSTARTS%2BWITH%2BUS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781668001226%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BSTARTS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122cd',
    list_name: 'Trade Fiction Paperback',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Colleen Hoover',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg',
    book_image_width: 319,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/e2a3545e-e9cb-5828-9d97-50a798a0e4f6',
    contributor: 'by Colleen Hoover',
    contributor_note: '',
    created_date: '2023-04-05 22:05:25',
    description:
      'A battered wife raised in a violent home attempts to halt the cycle of abuse.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1501110365',
    primary_isbn13: '9781501110368',
    publisher: 'Atria',
    rank: 3,
    rank_last_week: 2,
    sunday_review_link: '',
    title: 'IT ENDS WITH US',
    updated_date: '2023-04-05 22:10:15',
    weeks_on_list: 100,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781501110368?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501110368',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BENDS%252BWITH%252BUS%252FColleen%252BHoover%252F9781501110368&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BENDS%252BWITH%252BUS%252BColleen%252BHoover',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501110368%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BENDS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122ce',
    list_name: 'Trade Fiction Paperback',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Taylor Jenkins Reid',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781501161933.jpg',
    book_image_width: 315,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/d9511fac-ee44-5a87-9af7-2cd6a6f8f984',
    contributor: 'by Taylor Jenkins Reid',
    contributor_note: '',
    created_date: '2023-04-05 22:05:25',
    description:
      'A movie icon recounts stories of her loves and career to a struggling magazine writer.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1501161938',
    primary_isbn13: '9781501161933',
    publisher: 'Washington Square/Atria',
    rank: 4,
    rank_last_week: 5,
    sunday_review_link: '',
    title: 'THE SEVEN HUSBANDS OF EVELYN HUGO',
    updated_date: '2023-04-05 22:10:15',
    weeks_on_list: 108,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781501161933?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501161933',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSEVEN%252BHUSBANDS%252BOF%252BEVELYN%252BHUGO%252FTaylor%252BJenkins%252BReid%252F9781501161933&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSEVEN%252BHUSBANDS%252BOF%252BEVELYN%252BHUGO%252BTaylor%252BJenkins%252BReid',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501161933&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BSEVEN%2BHUSBANDS%2BOF%2BEVELYN%2BHUGO',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501161933%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSEVEN%2BHUSBANDS%2BOF%2BEVELYN%2BHUGO%2BTaylor%2BJenkins%2BReid%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '642fd89ac8cf5ee957f122cf',
    list_name: 'Trade Fiction Paperback',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1335004882?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Colleen Hoover and Tarryn Fisher',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781335004888.jpg',
    book_image_width: 333,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/584e898d-02af-50fe-87d5-1656a68560d1',
    contributor: 'by Colleen Hoover and Tarryn Fisher',
    contributor_note: '',
    created_date: '2023-04-05 22:05:25',
    description:
      'Questions arise when a pair of lovers try to uncover why they suddenly became strangers.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1335004882',
    primary_isbn13: '9781335004888',
    publisher: 'Canary Street',
    rank: 5,
    rank_last_week: 4,
    sunday_review_link: '',
    title: 'NEVER NEVER',
    updated_date: '2023-04-05 22:10:15',
    weeks_on_list: 5,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1335004882?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781335004888?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781335004888',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FNEVER%252BNEVER%252FColleen%252BHoover%252Band%252BTarryn%252BFisher%252F9781335004888&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DNEVER%252BNEVER%252BColleen%252BHoover%252Band%252BTarryn%252BFisher',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781335004888&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DNEVER%2BNEVER',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781335004888%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DNEVER%2BNEVER%2BColleen%2BHoover%2Band%2BTarryn%2BFisher%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0dc',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:38.946Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Alison Roman',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
    book_image_width: 402,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8',
    contributor: 'by Alison Roman',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1984826395',
    primary_isbn13: '9781984826398',
    publisher: 'Clarkson Potter',
    rank: 3,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'SWEET ENOUGH',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781984826398?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0c2',
    list_name: 'Hardcover Fiction',
    date: '2023-04-09T09:28:40.271Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593243730?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Ann Napolitano',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg',
    book_image_width: 330,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/3b1a624d-7296-5b11-9c41-a473f433c18d',
    contributor: 'by Ann Napolitano',
    contributor_note: '',
    created_date: '2023-04-05 22:05:23',
    description:
      'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593243730',
    primary_isbn13: '9780593243732',
    publisher: 'Dial',
    rank: 3,
    rank_last_week: 4,
    sunday_review_link: '',
    title: 'HELLO BEAUTIFUL',
    updated_date: '2023-04-05 22:10:13',
    weeks_on_list: 3,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593243730?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593243732?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593243732',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHELLO%252BBEAUTIFUL%252FAnn%252BNapolitano%252F9780593243732&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHELLO%252BBEAUTIFUL%252BAnn%252BNapolitano',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593243732&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHELLO%2BBEAUTIFUL',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593243732%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHELLO%2BBEAUTIFUL%2BAnn%2BNapolitano%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a0e0',
    list_name: 'Hardcover Fiction',
    date: '2023-04-09T09:28:39.672Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0525539808?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Lisa Scottoline',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780525539803.jpg',
    book_image_width: 331,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/d5457abe-036c-5071-87e2-30df0ba8136a',
    contributor: 'by Lisa Scottoline',
    contributor_note: '',
    created_date: '2023-04-05 22:05:23',
    description:
      'The lives of a lemon grower, a young lawyer, a new mother and a reclusive goatherd collide in Sicily during the rise of the Mafia.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0525539808',
    primary_isbn13: '9780525539803',
    publisher: 'Putnam',
    rank: 4,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'LOYALTY',
    updated_date: '2023-04-05 22:10:13',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0525539808?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780525539803?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780525539803',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FLOYALTY%252FLisa%252BScottoline%252F9780525539803&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DLOYALTY%252BLisa%252BScottoline',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780525539803&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLOYALTY',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780525539803%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DLOYALTY%2BLisa%2BScottoline%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a0e8',
    list_name: 'Combined Print and E-Book Nonfiction',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/f65a1f09-ba88-56d7-8674-390729e19b89',
    contributor: 'by Prince Harry',
    contributor_note: '',
    created_date: '2023-04-05 22:05:30',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593593804',
    primary_isbn13: '9780593593806',
    publisher: 'Random House',
    rank: 4,
    rank_last_week: 3,
    sunday_review_link: '',
    title: 'SPARE',
    updated_date: '2023-04-05 22:10:19',
    weeks_on_list: 12,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593593806?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593593806',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSPARE%252FPrince%252BHarry%252F9780593593806&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSPARE%252BPrince%252BHarry',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593593806&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSPARE',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593593806%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSPARE%2BPrince%2BHarry%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];

// let booksArray = JSON.parse(JSON.stringify(booksData));

// string for localStorage
let booksString = JSON.stringify(booksData);
localStorage.setItem('books', booksString);

let booksArray = JSON.parse(localStorage.getItem('books'));




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
              <a class="shop-link" target="_blank" href="${item.buy_links[0].url}"><img class="shop-icon amazon-icon" src="${Amazon}" alt="amazon" width="32" height="11"></a>
              </li>
                <li class="shop-item">
                    <a class="shop-link" target="_blank" href="${item.buy_links[1].url}"><img class="shop-icon" src="${Apple}" alt="apple shop" width="16" height="16"></a>
                  </li>
                    <li class="shop-item">
                        <a class="shop-link" target="_blank" href="${item.buy_links[4].url}"><img class="shop-icon" src="${Bookshop}" alt="book shop" width="16" height="16"></a>
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
// shoppingList.addEventListener('click', removeBook);

appendShoppingListMarkup();

function removeBook(event, bookId) {
  event.preventDefault();
  console.log(bookId);
  console.log(booksArray);
  booksArray.splice(
    booksArray.findIndex(item => item._id === bookId),
    1
  );
  console.log(booksArray);

  let card = document.getElementById(bookId);
  console.log(card);
  card.remove();
  localStorage.setItem('books', JSON.stringify(booksArray));
  if (booksArray.length === 0) {
    shoppingListIsEmpty();
  }
  appendShoppingListMarkup();
}
