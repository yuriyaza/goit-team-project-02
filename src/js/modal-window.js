import { BookAPI } from './api';
import { Notify } from 'notiflix';
import scrollLock from 'scroll-lock';

import icon from '../images/amazon.png';
// import amzicon from '../images/amazon2x.png';

import appleshop from '../images/appleshop.png';
// import iconappleshop from '../images/appleshop2x.png';

import boockshop from '../images/boockshop.png';
// import iconboockshop from '../images/boockshop2x.png';

const bookApi = new BookAPI();
Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

let shoppingList = [];
let shoppingBook = {};

shoppingList = JSON.parse(localStorage.getItem('shopping-trash'))
if (shoppingList === null) {
        shoppingList = []
    }
// console.log('shoppingList 21r', shoppingList);
const refs = {
    // openModalBtn: document.querySelector('.open-modal'), 
    // modalCartImg:document.querySelector('.books-card-title-img'),
    closeModalBtn: document.querySelector('.modal-btn'),
    backdrop: document.querySelector('.hi-backdrop'),
    
    informModalText: document.querySelector('.modal-text'),
    modalIconCardBoock: document.querySelector(".modal-content"),
    addToShopBtn: document.querySelector('.openmodal-btn'),
}

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.addToShopBtn.addEventListener('click', buttonAddListSohind);


function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
    refs.informModalText.style.display = 'none';
    refs.addToShopBtn.textContent= 'Add to shopping list';
    scrollLock.disablePageScroll(document.body);
    // console.log('45r', refs.addToShopBtn.textContent)
    isBookExist();
}
function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');

// При відкритті модалки блокуємо скрол, щоб сторінка під модалкою не прокручувалась.
// При закритті вікна розблоковуємо скрол.

    scrollLock.enablePageScroll(document.body);
//    console.log('55r', refs.addToShopBtn.textContent)
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
    if (refs.addToShopBtn.classList.contains('openmodal-btn')) {
//        console.log('71r', refs.addToShopBtn.textContent);
        openModalBtn()
        // isBookExist();
        saveShoppingTrash();
    } else {
//        console.log('74r', refs.addToShopBtn.textContent);
        closeModalBtn();
        // isBookExist();
        removeShoppingTrash();
    }
}

function openModalBtn() {
    // console.log('onopenmodal 80r');
    onOpenFunc();
    // boockListModal();//+++++++++++++
    refs.addToShopBtn.addEventListener('click', buttonAddListSohind);
 }    
function closeModalBtn() {
    // console.log('onclosemodal 89r')
    onCloseFunc();
    // localStorage.removeItem('books');
    refs.addToShopBtn.addEventListener('click', buttonAddListSohind);
}
function onOpenFunc() {
    refs.addToShopBtn.textContent = 'remove from the shopping list';
    refs.informModalText.style.display = 'block';
    refs.addToShopBtn.classList.add('closemodal-btn')
    refs.addToShopBtn.classList.remove('openmodal-btn')
}
function onCloseFunc() {
    refs.informModalText.style.display = 'none';
    refs.addToShopBtn.textContent= 'Add to shopping list';
    refs.addToShopBtn.classList.remove('closemodal-btn')
    refs.addToShopBtn.classList.add('openmodal-btn')
}

function renderBoocksCard(book){
    const markup = modalCartBoock(book);
    // console.log(book); //+++++++++++++
        refs.modalIconCardBoock.innerHTML = markup;
    }

// В функцію яка створює розмітку передаємо ID книги, яку хочем відобразити
// Саму розмітку не міняв - з нею все супер
    
function modalCartBoock(book) {
    return  `
            <div class="modal-content-card">
            
            <div class="modal-content-img">
                <img class='modal-content-pict' src="${book.book_image}" alt="${book.title}"  />
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
                            srcset="${boockshop} "
                            alt="book shop" width="38" height="36"
                            ></img></a>
                </li>
        </ul>

            </div>
        </div>`;
}
    
// Робимо та експортуємо функцію, яка буде викликатись іншими для відкриття твоєї модалки.
// Той хто викликає цю функцію - буде передавати ID книги, яку хоче відобразити.
// Ця функція в свою чергу викликає твої render BoocksCard(book), onOpenModal(),
// щоб створити розмітку і відобразити модальне вікно.

export async function openModalBookDetails(bookID) {
// Отримуємо дані з сервера по ID книги за допомогою api.js
    const book = await bookApi.getBookById(bookID);
    // console.log('openmodal',book);
    shoppingBook = book;
    // console.log('openModalBookDetails',bookID);
    // if (book.length === 0) {
    //   Notify.failure('Books not found');
    //   return;
    // }
    renderBoocksCard(book);
    onOpenModal();
    // isBookOnStorage()
};

function saveShoppingTrash() {
    // console.log(event.target.textContent);
    // console.log('book 206r', shoppingBook);
    console.log('205r    saveFunc', shoppingList);
    shoppingList.push(shoppingBook);
    localStorage.setItem('shopping-trash', JSON.stringify(shoppingList))
    onOpenFunc();
};
// isBookExist();
function isBookExist() {
    // console.log(shoppingBook._id);
    // console.log('232r', shoppingList);
    index = shoppingList.indexOf(shoppingBook);
    console.log('241r', index);
};
function removeShoppingTrash() {
    shoppingList = shoppingList.filter((item) => item._id !== shoppingBook._id);
    localStorage.setItem('shopping-trash', JSON.stringify(shoppingList))
    console.log('245r    removeFunc', shoppingList);
    onCloseFunc();
}