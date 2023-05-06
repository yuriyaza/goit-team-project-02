import axios from 'axios';

export class BookAPI {
    // #BASE_URL = 'https://books-backend.p.goit.global/books/';

async getCategoryList(){
    
    try {
        const response = await axios.get('https://books-backend.p.goit.global/books/category-list');
        return response.data;
    } catch (error) {
        console.log(error);
    }
    };

    async getTopBooks() {
        try {
            const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    async getCategory(data) {
        const category = data;
        try {
            const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    async getBookById(data) {
        const id = data;
        try {            
            const response = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };
    
};
