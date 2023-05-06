import { BookAPI } from './api';



catBooksEl = document.querySelector('.books-genre');
const api = new BookAPI();



async function getData() {
    console.log('local storage');
    const category = await api.getCategory();
    localStorage.setItem('books-genre', JSON.stringify(category));
}
getData();

