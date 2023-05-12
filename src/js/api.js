import axios from 'axios';
import { Notify } from 'notiflix';

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });
const spinner = document.querySelector('.spinner-wrapper');

export class BookAPI {

    async getCategoryList(){
        try {
            spinner.classList.remove('hidden');
            const response = await axios.get('https://books-backend.p.goit.global/books/category-list');
            spinner.classList.add('hidden');
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
            spinner.classList.add('hidden');
        }
    };

    async getTopBooks() {
        try {
            spinner.classList.remove('hidden');
            const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
            spinner.classList.add('hidden');
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
            spinner.classList.add('hidden');
        }
    };

    async getCategory(data) {
        const category = data;
        try {
            spinner.classList.remove('hidden');
            const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`);
            spinner.classList.add('hidden');
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
            spinner.classList.add('hidden');
        }
    };

    async getBookById(data) {
        const id = data;
        try {            
            spinner.classList.remove('hidden');
            const response = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
            spinner.classList.add('hidden');
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
            spinner.classList.add('hidden');
        }
    };
    
};
