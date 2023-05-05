import axios from 'axios';

export class BookAPI {
    // #BASE_URL = 'https://books-backend.p.goit.global/books/';

async getCategoryList(){
    
    try {
        const response = await axios.get('https://books-backend.p.goit.global/books/category-list');
        console.log('cat-list api');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
    };

    async getTopBooks() {
        try {
            const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
            console.log('top books api');
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    async getCategory(data) {
        const category = data;
        console.log(category);
        try {
            const response = await axios.get(`https://books-backend.p.goit.global/books/category?category=Audio%20Fiction`);
            console.log('category api');
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    async getBookById(data) {
        const id = data;
        try {            
            const response = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
            console.log('book api');
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };
    
};