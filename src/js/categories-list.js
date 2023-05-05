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

async function catListMarkup() {
    const categoryList = await api.getCategoryList();
    // console.log(categoryList);
    const markup = categoryList.reduce((acc, { list_name }) => {
        return acc += `
        <li class="category-li">
                ${list_name};
        </li>
    `},''
    )
    catListEl.insertAdjacentHTML('beforeend', markup);
};

catListMarkup();
