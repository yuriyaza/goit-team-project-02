import { BookAPI } from './api';
import { Notify } from 'notiflix';
import scrollLock from 'scroll-lock';

import icon from '../images/amazon.png';


import appleshop from '../images/appleshop.png';


import boockshop from '../images/boockshop.png';


const bookApi = new BookAPI();
Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

const refs = {
    openModalBtn: document.querySelector('.open-modal'), 
    modalCartImg:document.querySelector('.books-card-title-img'),
    closeModalBtn: document.querySelector('.modal-btn'),
    backdrop: document.querySelector('.hi-backdrop'),
    
    informModalText: document.querySelector('.modal-text'),
    modalIconCardBoock: document.querySelector(".modal-content"),
    buttonOpenModal: document.querySelector('.openmodal-btn'),
}


refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs. buttonOpenModal.addEventListener('click', buttonAddListSohind);

 

function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
    refs.informModalText.style.display = 'none';
    refs. buttonOpenModal.textContent= 'Add to shopping list';
    scrollLock.disablePageScroll(document.body);
}
function onCloseModal() {
     window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');

// При відкритті модалки блокуємо скрол, щоб сторінка під модалкою не прокручувалась.
// При закритті вікна розблоковуємо скрол.

    scrollLock.enablePageScroll(document.body);
}
function onBackdropClick(event){
    if (event.currentTarget === event.target) {
        onCloseModal();  
    }
}
function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
      onCloseModal();    
    }
}

function buttonAddListSohind() {
    if (refs.buttonOpenModal.classList.contains('openmodal-btn')) {
         openModalBtn()
    } else {
       closeModalBtn()
    }
}

function openModalBtn() {
     refs. buttonOpenModal.textContent = 'remove from the shopping list';
        refs.informModalText.style.display = 'block';
        refs.buttonOpenModal.classList.add('closemodal-btn')
        refs.buttonOpenModal.classList.remove('openmodal-btn')
        // boockListModal();
        refs. buttonOpenModal.addEventListener('click', buttonAddListSohind);
 }    
function closeModalBtn() {
    refs.informModalText.style.display = 'none';
        refs. buttonOpenModal.textContent= 'Add to shopping list';
        refs.buttonOpenModal.classList.remove('closemodal-btn')
        refs.buttonOpenModal.classList.add('openmodal-btn')
        // localStorage.removeItem('books');
        refs. buttonOpenModal.addEventListener('click', buttonAddListSohind);
}

function fetchBoockcardModWin(boock_Id){
    return
    fetch('https://books-backend.p.goit.global/books/bookId')
.then(response => {
        return response.json();
})
    .then(books => {
        console.log(books);
        renderBoocksCard();
    })
        .catch(error => {
            console.log(error);
    })
}

function renderBoocksCard(book){
        const markup = modalCartBoock(book);
        refs.modalIconCardBoock.innerHTML = markup;
    }

// В функцію яка створює розмітку передаємо ID книги, яку хочем відобразити
// Саму розмітку не міняв - з нею все супер
    
function modalCartBoock(book) {
    return  `
            <div class="modal-content-card">
            
            <div class="modal-content-img">
                <img src="${book.book_image}" alt="${book.title}"  />
            </div>
            <div class="modal-content-text">
                <h2 class="modal-content-titl"><b>${book.title}</b></h2>
                <p class="modal-content-autur"><b>${book.author}</b></p>
        <p class="modal-content-abst"><b>${book.description}</b></p>
        <ul class="modal-link">
              <li>
                <a class="modal-link" href="${book.buy_links[0].url}" target="_blank">
                    <img class="modal-link-icon"
                            src="${icon}"
                            srcset="${icon}"
                            alt="amazon" width="62" height="19"></img></a>
              </li>
            
                <li>
                    <a class="modal-link" href="${book.buy_links[1].url}" target="_blank">
                         <img class="modal-link-icon"
                            src="${appleshop}}"
                            srcset="${appleshop}"
                            alt="apple shop" width="33" height="32
                            ></img></a>
                </li>
                 
                <li>
                    <a class="modal-link" href="${book.buy_links[4].url}" target="_blank">
                        <img class="modal-link-icon"
                            src="${boockshop}"
                            srcset="${boockshop}"
                            alt="book shop" width="38" height="36"
                            ></img></a>
                </li>
        </ul>

             </div>
        </div>`;
   
 }
    
// Робимо та експортуємо функцію, яка буде викликатись іншими для відкриття твоєї модалки.
// Той хто викликає цю функцію - буде передавати ID книги, яку хоче відобразити.
// Ця функція в свою чергу викликає твої renderBoocksCard(book), onOpenModal(),
// щоб створити розмітку і відобразити модальне вікно.

export async function openModalBookDetails(bookID) {
    const book = await booksDetailsGetFromBackend(bookID);
    
    if (book.length === 0) {
      Notify.failure('Books not found');
      return;
    }

    renderBoocksCard(book);
    onOpenModal();
}

// Отримуємо дані з сервера по ID книги за допомогою api.js

async function booksDetailsGetFromBackend(bookID) {
  return await bookApi.getBookById(bookID);
}
// function boockListModal(book) {
//     if (window.localStorage) {
//         if (localStorage.getItem('books') == null) {
//             localStorage.setItem('books', Date());
//         }
//     let bookObj = { book };
//     listAddSohing = JSON.stringify(bookObj);
 
//     localStorage.setItem("books", listAddSohing);
//     }
// }
// Перевіряємо як працює на прикладі однієї з книг.

//  openModalBookDetails('643282b1e85766588626a07e');

