import { BookAPI } from "./api";
import { renderSectionBooksAll } from "./books-all";
import { renderSectionBooksGenre } from "./books-genre";
// import { onUserClick } from "./books-all";
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

OverlayScrollbars({ 
    target: document.querySelector('#myElement') 
}, {
    showNativeOverlaidScrollbars: true
});

const catListEl = document.querySelector('.category-list');
const api = new BookAPI;


(async function getData() {
    const categoryList = await api.getCategoryList();
    localStorage.setItem("category-list", JSON.stringify(categoryList));
    catListMarkup();
    renderSectionBooksAll();
})();

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
    event.preventDefault();
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

export function makeUpperCase(data) {
    data.classList.add('upper-case');
};

export function removeUpperCase() {
    const rem = document.querySelectorAll('.category');
    rem.forEach(el => el.classList.remove('upper-case'))
};

export function seeMoreFunc(data) {
    removeUpperCase();
    const newDom = document.querySelectorAll('.category');
    console.log(newDom);
    newDom.forEach(el => {
        if (el.textContent===data) el.classList.add('upper-case')
    })
}



