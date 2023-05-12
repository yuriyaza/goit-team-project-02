import { BookAPI } from "./api";
import { renderSectionBooksAll } from "./books-all";
import { renderSectionBooksGenre } from "./books-genre";
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

OverlayScrollbars({ 
    target: document.querySelector('#myElement') 
}, {
    showNativeOverlaidScrollbars: true
});

const ulCategoryListEl = document.querySelector('.category-list');
const api = new BookAPI;


(async function getData() {
    // const categoryList = await api.getCategoryList();
    const topBooks = await api.getTopBooks();
    localStorage.setItem("top-books", JSON.stringify(topBooks));
    catListMarkup();
    renderSectionBooksAll();
})();

function catListMarkup() {
    const array = loadFromLocalStorage();
    const markup = array.reduce((acc, { list_name }) => {
        return acc += `
            <li class="category-li">
                <a class="category" href="#">
                    <span class="category-span">${list_name}</span>
                </a>
            </li>
    `}, '')
    ulCategoryListEl.insertAdjacentHTML('beforeend', markup);
};

ulCategoryListEl.addEventListener('click', clickFunc);

function clickFunc(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'SPAN') {
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
    const savedData = localStorage.getItem("top-books");
    const parsedData = JSON.parse(savedData);
    return parsedData;
}

export function makeUpperCase(data) {
    data.classList.add('upper-case');
};

export function removeUpperCase() {
    const rem = document.querySelectorAll('.category-span');
    rem.forEach(el => el.classList.remove('upper-case'))
};

export function seeMoreFunc(data) {
    removeUpperCase();
    const newDom = document.querySelectorAll('.category-span');
    newDom.forEach(el => {
        if (el.textContent === data) el.classList.add('upper-case')
    });
}


ulCategoryListEl.addEventListener('mouseover', lineOnFunc);
ulCategoryListEl.addEventListener('mouseout', lineOffFunc);

function lineOnFunc(event) {
    if (event.target.nodeName !== 'SPAN') {
        return;
    }
    const line = event.target;
    line.classList.add('line-active');
};

function lineOffFunc(event) {
    const line = event.target;
    line.classList.remove('line-active');
};