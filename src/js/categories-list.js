import { BookAPI } from "./api";
// import { ScrollSpy } from "bootstrap";
// import PerfectScrollbar from 'perfect-scrollbar';

catListEl = document.querySelector('.category-list');
const api = new BookAPI;
const inputEl = document.querySelector('.category-list');

(getData());
// new PerfectScrollbar('#scroll-container');

// const scrollEl = document.querySelector('#scroll-container');
// const ps = new PerfectScrollbar(scrollEl);

// const ps = new PerfectScrollbar('#scroll-container', {
// wheelSpeed: 1,
// // wheelPropagation: true,
// // minScrollbarLength: 20
// });

// document.querySelector('#resize').addEventListener('click', () => {
//         // Get updated values
//         width = document.querySelector('#width').value;
//         height = document.querySelector('#height').value;

//         // Set demo sizes
//         demo.style.width = `${width}px`;
//         demo.style.height = `${height}px`;

//         // Update Perfect Scrollbar
//         ps.update();
//     });

async function getData() {
    console.log('local storage');
    const categoryList = await api.getCategoryList();
    localStorage.setItem("category-list", JSON.stringify(categoryList));
    catListMarkup();
}


function catListMarkup() {
    const savedData = localStorage.getItem("category-list");
    const parsedData = JSON.parse(savedData);
    const markup = parsedData.reduce((acc, { list_name }) => {
        return acc += `
        <a href="#">
            <li class="category-li">${list_name}</li>
        </a>
    `}, '')
    console.log(markup);
    catListEl.insertAdjacentHTML('beforeend', markup);
};


inputEl.addEventListener('click', clickFunc);

function clickFunc(event) {
    if (event.target.nodeName !== 'LI') {
        return
    }
    // console.log(event.target.nodeName)
    // console.log(event.currentTarget.textContent);
    getCategoryFunc(event.target.textContent);
}

function getCategoryFunc(data){
    
    // console.log('123', data);
    const dataWords = data.split(' ');
    // console.log(dataWords);
    const opt = dataWords.join('%20');
    
    console.log(`https://books-backend.p.goit.global/books/category?category=${opt}`);
}


