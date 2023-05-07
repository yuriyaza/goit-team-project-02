const shoppingList = document.querySelector(".shopping-list");
const shoppingListEmptyEl = document.querySelector(".shopping-list-empty");

//  строка-приклад, в вигляді якої прийдуть дані з локал сторіджа

let booksData = [
  {
    _id: "642fd89ac8cf5ee957f122cb",
    list_name: "Trade Fiction Paperback",
    date: "2023-04-07T08:46:57.000Z",
    age_group: "",
    amazon_product_url: "https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20",
    article_chapter_link: "",
    author: "Colleen Hoover",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg",
    book_image_width: 322,
    book_image_height: 500,
    book_review_link: "",
    book_uri: "nyt://book/3aa85e47-4df9-53ef-9957-a77753d3502c",
    contributor: "by Colleen Hoover",
    contributor_note: "",
    created_date: "2023-04-05 22:05:25",
    description:
      "In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.",
    first_chapter_link: "",
    price: "0.00",
    primary_isbn10: "1668001225",
    primary_isbn13: "9781668001226",
    publisher: "Atria",
    rank: 1,
    rank_last_week: 1,
    sunday_review_link: "",
    title: "IT STARTS WITH US",
    updated_date: "2023-04-05 22:10:15",
    weeks_on_list: 24,
    buy_links: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20",
      },
      {
        name: "Apple Books",
        url: "https://goto.applebooks.apple/9781668001226?at=10lIEQ",
      },
      {
        name: "Barnes and Noble",
        url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781668001226",
      },
      {
        name: "Books-A-Million",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BSTARTS%252BWITH%252BUS%252FColleen%252BHoover%252F9781668001226&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BSTARTS%252BWITH%252BUS%252BColleen%252BHoover",
      },
      {
        name: "Bookshop",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668001226&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BSTARTS%2BWITH%2BUS",
      },
      {
        name: "IndieBound",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781668001226%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BSTARTS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT",
      },
    ],
    __v: 0,
  },
  {
    _id: "642fd89ac8cf5ee957f122cd",
    list_name: "Trade Fiction Paperback",
    date: "2023-04-07T08:46:57.000Z",
    age_group: "",
    amazon_product_url:
      "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
    article_chapter_link: "",
    author: "Colleen Hoover",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
    book_image_width: 319,
    book_image_height: 495,
    book_review_link: "",
    book_uri: "nyt://book/e2a3545e-e9cb-5828-9d97-50a798a0e4f6",
    contributor: "by Colleen Hoover",
    contributor_note: "",
    created_date: "2023-04-05 22:05:25",
    description:
      "A battered wife raised in a violent home attempts to halt the cycle of abuse.",
    first_chapter_link: "",
    price: "0.00",
    primary_isbn10: "1501110365",
    primary_isbn13: "9781501110368",
    publisher: "Atria",
    rank: 3,
    rank_last_week: 2,
    sunday_review_link: "",
    title: "IT ENDS WITH US",
    updated_date: "2023-04-05 22:10:15",
    weeks_on_list: 100,
    buy_links: [
      {
        name: "Amazon",
        url: "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
      },
      {
        name: "Apple Books",
        url: "https://goto.applebooks.apple/9781501110368?at=10lIEQ",
      },
      {
        name: "Barnes and Noble",
        url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501110368",
      },
      {
        name: "Books-A-Million",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BENDS%252BWITH%252BUS%252FColleen%252BHoover%252F9781501110368&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BENDS%252BWITH%252BUS%252BColleen%252BHoover",
      },
      {
        name: "Bookshop",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS",
      },
      {
        name: "IndieBound",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501110368%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BENDS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT",
      },
    ],
    __v: 0,
  },
  {
    _id: "642fd89ac8cf5ee957f122ce",
    list_name: "Trade Fiction Paperback",
    date: "2023-04-07T08:46:57.000Z",
    age_group: "",
    amazon_product_url: "https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20",
    article_chapter_link: "",
    author: "Taylor Jenkins Reid",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781501161933.jpg",
    book_image_width: 315,
    book_image_height: 500,
    book_review_link: "",
    book_uri: "nyt://book/d9511fac-ee44-5a87-9af7-2cd6a6f8f984",
    contributor: "by Taylor Jenkins Reid",
    contributor_note: "",
    created_date: "2023-04-05 22:05:25",
    description:
      "A movie icon recounts stories of her loves and career to a struggling magazine writer.",
    first_chapter_link: "",
    price: "0.00",
    primary_isbn10: "1501161938",
    primary_isbn13: "9781501161933",
    publisher: "Washington Square/Atria",
    rank: 4,
    rank_last_week: 5,
    sunday_review_link: "",
    title: "THE SEVEN HUSBANDS OF EVELYN HUGO",
    updated_date: "2023-04-05 22:10:15",
    weeks_on_list: 108,
    buy_links: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20",
      },
      {
        name: "Apple Books",
        url: "https://goto.applebooks.apple/9781501161933?at=10lIEQ",
      },
      {
        name: "Barnes and Noble",
        url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501161933",
      },
      {
        name: "Books-A-Million",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSEVEN%252BHUSBANDS%252BOF%252BEVELYN%252BHUGO%252FTaylor%252BJenkins%252BReid%252F9781501161933&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSEVEN%252BHUSBANDS%252BOF%252BEVELYN%252BHUGO%252BTaylor%252BJenkins%252BReid",
      },
      {
        name: "Bookshop",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501161933&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BSEVEN%2BHUSBANDS%2BOF%2BEVELYN%2BHUGO",
      },
      {
        name: "IndieBound",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501161933%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSEVEN%2BHUSBANDS%2BOF%2BEVELYN%2BHUGO%2BTaylor%2BJenkins%2BReid%26aff%3DNYT",
      },
    ],
    __v: 0,
  },
  {
    _id: "642fd89ac8cf5ee957f122cf",
    list_name: "Trade Fiction Paperback",
    date: "2023-04-07T08:46:57.000Z",
    age_group: "",
    amazon_product_url: "https://www.amazon.com/dp/1335004882?tag=NYTBSREV-20",
    article_chapter_link: "",
    author: "Colleen Hoover and Tarryn Fisher",
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9781335004888.jpg",
    book_image_width: 333,
    book_image_height: 500,
    book_review_link: "",
    book_uri: "nyt://book/584e898d-02af-50fe-87d5-1656a68560d1",
    contributor: "by Colleen Hoover and Tarryn Fisher",
    contributor_note: "",
    created_date: "2023-04-05 22:05:25",
    description:
      "Questions arise when a pair of lovers try to uncover why they suddenly became strangers.",
    first_chapter_link: "",
    price: "0.00",
    primary_isbn10: "1335004882",
    primary_isbn13: "9781335004888",
    publisher: "Canary Street",
    rank: 5,
    rank_last_week: 4,
    sunday_review_link: "",
    title: "NEVER NEVER",
    updated_date: "2023-04-05 22:10:15",
    weeks_on_list: 5,
    buy_links: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/dp/1335004882?tag=NYTBSREV-20",
      },
      {
        name: "Apple Books",
        url: "https://goto.applebooks.apple/9781335004888?at=10lIEQ",
      },
      {
        name: "Barnes and Noble",
        url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781335004888",
      },
      {
        name: "Books-A-Million",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FNEVER%252BNEVER%252FColleen%252BHoover%252Band%252BTarryn%252BFisher%252F9781335004888&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DNEVER%252BNEVER%252BColleen%252BHoover%252Band%252BTarryn%252BFisher",
      },
      {
        name: "Bookshop",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781335004888&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DNEVER%2BNEVER",
      },
      {
        name: "IndieBound",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781335004888%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DNEVER%2BNEVER%2BColleen%2BHoover%2Band%2BTarryn%2BFisher%26aff%3DNYT",
      },
    ],
    __v: 0,
  },
];

// let booksArray = JSON.parse(JSON.stringify(booksData));

// string for localStorage
let booksString = JSON.stringify(booksData);
localStorage.setItem("books", booksString);

let booksArray = JSON.parse(localStorage.getItem("books"));
appendShoppingListMarkup(booksArray);

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
            <svg class="trash-icon" width="16" height="16"><use href="./images/sprite.svg#trash"></use></svg>
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
              <a class="shop-link" href="${item.buy_links[0].url}"><img class="shop-icon" src="./images/amazon.svg" alt="amazon" width="32" height="11"></a>
              </li>
              <li>
                <li class="shop-item">
                    <a class="shop-link" href="${item.buy_links[1].url}"><img class="shop-icon" src="./images/apple.svg" alt="apple shop" width="16" height="16"></a>
                  </li>
                  <li>
                    <li class="shop-item">
                        <a class="shop-link" href="${item.buy_links[4].url}"><img class="shop-icon" src="./images/bookshop.svg" alt="book shop" width="16" height="16"></a>
                      </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`
    );
  }, "");
}
function appendShoppingListMarkup(data) {
  if (booksArray.length !== 0) {
    shoppingList.insertAdjacentHTML("beforeend", createShoppingList(data));
    shoppingListisFilled();
  } else {
    shoppingList.innerHTML = "";
    shoppingListIsEmpty();
  }
}

function shoppingListIsEmpty() {
  shoppingListEmptyEl.classList.remove("shopping-list-filled");
}

function shoppingListisFilled() {
  shoppingListEmptyEl.classList.add("shopping-list-filled");
}
shoppingList.addEventListener("click", removeBook);

function removeBook(e) {
  e.preventDefault();
  if (e.target.nodeName == "BUTTON") {
    let bookId = e.target.closest(".book-card").id;
    booksArray.splice(
      booksArray.findIndex((item) => item.id === bookId),
      1
    );
    let card = document.getElementById(bookId);
    card.remove();
    localStorage.setItem("books", JSON.stringify(booksArray));
    if (booksArray.length === 0) {
      shoppingListIsEmpty();
    }
    return;
  }
}
