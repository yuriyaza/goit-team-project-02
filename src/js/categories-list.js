import axios from 'axios';
// import Bootstrap

catListEl = document.querySelector('.category-list');

class myAPI {
    // #BASE_URL = 'https://books-backend.p.goit.global/books/';


async getCategoryList(){
    
    // const url = `${this.#BASE_URL}category-list`;
    // https://books-backend.p.goit.global/books/category-list
    try {
        const response = await axios.get('https://books-backend.p.goit.global/books/category-list');
        // console.log('cat-list');
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
    };
    async getTopBooks() {
        try {
            const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
            console.log('top books');
            console.log(response.data);
        } catch (error) {
            
        }
    }
    
};

const api = new myAPI;

async function catListMarkup() {
    const categoryList = await api.getCategoryList();
    console.log(categoryList);
    // console.log(categoryList[0].list_name);
    const markup = categoryList.reduce((acc, { list_name }) => {
        return acc += `
        <li class="category-li">
                ${list_name};
        </li>
    `},''
    )
    catListEl.insertAdjacentHTML('beforeend', markup);
}

catListMarkup();