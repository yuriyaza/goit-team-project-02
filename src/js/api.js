import axios from 'axios';
import { Notify } from 'notiflix';

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });
const spinner = document.querySelector('.spinner');

export class BookAPI {

    async getCategoryList(){
        try {
            const response = await axios.get('https://books-backend.p.goit.global/books/category-list');
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
            spinner.classList.add('visually-hidden');
        }
    };

    async getTopBooks() {
        try {
            const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
            spinner.classList.add('visually-hidden');
        }
    };

    async getCategory(data) {
        const category = data;
        try {
            const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`);
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
            spinner.classList.add('visually-hidden');
        }
    };

    async getBookById(data) {
        const id = data;
        try {            
            const response = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
            spinner.classList.add('visually-hidden');
        }
    };
    
};
