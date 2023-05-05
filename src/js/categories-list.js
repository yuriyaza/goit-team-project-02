import { BookAPI } from "./api";
// import { ScrollSpy } from "bootstrap";
import PerfectScrollbar from 'perfect-scrollbar';

catListEl = document.querySelector('.category-list');
const api = new BookAPI;

new PerfectScrollbar('#scroll-container');

const scrollEl = document.querySelector('#scroll-container');
// const ps = new PerfectScrollbar(scrollEl);

const ps = new PerfectScrollbar('#scroll-container', {
wheelSpeed: 1,
// wheelPropagation: true,
// minScrollbarLength: 20
});

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

}
getData();

function catListMarkup() {
    // const categoryList = await api.getCategoryList();
    // console.log(categoryList);
    const savedData = localStorage.getItem("category-list");
    const parsedData = JSON.parse(savedData);
    const markup = parsedData.reduce((acc, { list_name }) => {
        return acc += `
        <a href="#">
        <li class="category-li">
            ${list_name}
        </li>
        </a>
    `},''
    )
    catListEl.insertAdjacentHTML('beforeend', markup);
};

catListMarkup();
