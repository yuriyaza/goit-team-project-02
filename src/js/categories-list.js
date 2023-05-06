import { BookAPI } from "./api";
import { renderSectionBooksAll } from "./books-all";
// import { ScrollSpy } from "bootstrap";
// import PerfectScrollbar from 'perfect-scrollbar';

const catListEl = document.querySelector('.category-list');
const api = new BookAPI;
// const inputEl = document.querySelector('.category-list');
let upperCaseNow = 'All categories';
let upperCase = '';

(getData())();

async function getData() {
    // console.log('local storage');
    const categoryList = await api.getCategoryList();
    localStorage.setItem("category-list", JSON.stringify(categoryList));
    catListMarkup();
    renderSectionBooksAll();
}


function catListMarkup() {
    const array = loadFromLocalStorage();
    const markup = array.reduce((acc, { list_name }) => {
        return acc += `
            <li class="category-li">
                <a class="category" href="#">${list_name}</a>
            </li>
    `}, '')
    // console.log(markup);
    catListEl.insertAdjacentHTML('beforeend', markup);
};

catListEl.addEventListener('click', clickFunc);

function clickFunc(event) {
    if (event.target.nodeName !== 'A') {
        return
    }
    // console.log(event.target.nodeName)
    // console.log(event.currentTarget.textContent);
    if (event.target.textContent === 'All categories') {
        removeUpperCase();
        event.target.classList.add('upper-case');
        renderSectionBooksAll()
        // console.log(`Люда     getTopBooks()`);
    } else {
        // if (upperCaseNow === 'All categories') {
        //     removeUpperCase();
        // }
        upperCase = upperCaseNow;
        upperCaseNow = event.target.textContent;
        // console.log('uppercasenow',upperCaseNow);
        // console.log(event.target.textContent)

        // makeUpperCase(event.target);
        // event.target.
        removeUpperCase();
        event.target.classList.add('upper-case');
        getCategoryFunc(event.target.textContent);
    }
}

function getCategoryFunc(data){
    
    // console.log('123', data);
    const dataWords = data.split(' ');
    // console.log(dataWords);
    const opt = dataWords.join('%20');
    renderSectionBooksGenre(opt);
    // console.log(`Олег      https://books-backend.p.goit.global/books/category?category=${opt}`);
    // 'https://books-backend.p.goit.global/books/category?category=Combined%20Print%20and%20E-Book%20Nonfiction'
};

function loadFromLocalStorage() {
    const savedData = localStorage.getItem("category-list");
    const parsedData = JSON.parse(savedData);
    return parsedData;
}

function makeUpperCase(data) {
    upperCase = upperCaseNow;
    upperCaseNow = data.textContent;
    // console.log('adfgd', category);
    // console.log('upperCaseNow', upperCaseNow);
    // const array = loadFromLocalStorage();
    // const indexUpperCase = array.findIndex(opt => opt.list_name === upperCaseNow);
    // console.log(indexUpperCase);
    // data.classList.add('upper-case');
};

function removeUpperCase() {
    const rem = document.querySelectorAll('.category');
    // console.log(rem);
    // rem[0].classList.remove('upper-case');
    rem.forEach(el => el.classList.remove('upper-case'))
};