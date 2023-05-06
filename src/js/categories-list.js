import { BookAPI } from "./api";
import { renderSectionBooksAll } from "./books-all";
import { renderSectionBooksGenre } from "./books-genre";
// import { ScrollSpy } from "bootstrap";
// import PerfectScrollbar from 'perfect-scrollbar';

const catListEl = document.querySelector('.category-list');
const api = new BookAPI;

(getData)();

async function getData() {
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
    catListEl.insertAdjacentHTML('beforeend', markup);
};

catListEl.addEventListener('click', clickFunc);

function clickFunc(event) {
    if (event.target.nodeName !== 'A') {
        return
    }
    if (event.target.textContent === 'All categories') {
        removeUpperCase();
        makeUpperCase(event.target);
        renderSectionBooksAll()
    } else {        
        removeUpperCase();
        makeUpperCase(event.target);
        getCategoryFunc(event.target.textContent);
    }
}

function getCategoryFunc(data) {
    const dataWords = data.split(' ');
    const opt = dataWords.join('%20');
    renderSectionBooksGenre(opt,data);
};

function loadFromLocalStorage() {
    const savedData = localStorage.getItem("category-list");
    const parsedData = JSON.parse(savedData);
    return parsedData;
}

function makeUpperCase(data) {
    data.classList.add('upper-case');
};

function removeUpperCase() {
    const rem = document.querySelectorAll('.category');
    rem.forEach(el => el.classList.remove('upper-case'))
};