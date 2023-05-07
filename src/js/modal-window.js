
const refs = {
    openModalBtn: document.querySelector('.open-modal'), 
    modalCartImg:document.querySelector('.books-card-title-img'),
    closeModalBtn: document.querySelector('.modal-btn'),
    backdrop: document.querySelector('.hi-backdrop'),
    addFromShoppingList: document.querySelector("#shoppingList"),
    informModalText: document.querySelector('.modal-text'),
    modalIconCardBoock: document.querySelector(".modal-content-card"),
    buttonOpenModal: document.querySelector('.openmodal-btn'),
}

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.addFromShoppingList.addEventListener('click', buttonAddListSohind);
// refs.modalCartImg.addEventListener('click', onSearchBoock);
 

function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
    refs.informModalText.style.display = 'none';
    refs.addFromShoppingList.textContent = 'Add to shopping list';
    refs.addFromShoppingList.classList.add('openmodal-btn')
    // rendermodCardBoock();
}
function onCloseModal() {
     window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
    
}
function onBackdropClick(event){
    if (event.currentTarget === event.target) {
        onCloseModal();  
    }
}
function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
      onCloseModal();    
    }
}

function buttonAddListSohind() {
    if (refs.buttonOpenModal.classList.contains('openmodal-btn')) {
         openModalBtn()
    } else {
       closeModalBtn()
    }
}
function closeModalBtn() {
    refs.informModalText.style.display = 'none';
        refs.addFromShoppingList.textContent= 'Add to shopping list';
        refs.buttonOpenModal.classList.remove('closemodal-btn')
        refs.buttonOpenModal.classList.add('openmodal-btn')
        // localStorage.removeItem('cartBoock');
        refs.addFromShoppingList.addEventListener('click', buttonAddListSohind);
}

function openModalBtn() {
     refs.addFromShoppingList.textContent = 'remove from the shopping list';
        refs.informModalText.style.display = 'block';
        refs.buttonOpenModal.classList.add('closemodal-btn')
        refs.buttonOpenModal.classList.remove('openmodal-btn')
        // localStorage.setItem('cartBoock');
        refs.addFromShoppingList.addEventListener('click', buttonAddListSohind);
 }    
// function onSearchBoock(e) {
//     e.preventDefauit();
//     const form = e.currentTarget;
//     const searchQuery = form.element.query.value;
//     fetchBockcartMod(searchQuery)
//         .then(renderBoocksCard)
//         .catch(error => console.log(error));
// }

function fetchBoockcardModWin(boock_Id){
    return
    fetch('https://books-backend.p.goit.global/books/bookId')
.then(response => {
        return response.json();
})
    .then(books => {
        console.log(books);
        renderBoocksCard();
    })
        .catch(error => {
            console.log(error);
    })
}

function renderBoocksCard(book){
        const markup = modalCartBoock(book);
        refs.modalIconCardBoock.innerHTML = markup;
    }
 
    
function modalCartBoock() {
    return  `
            <div class="modal-content-card">
            
            <div class="modal-content-img">
                <img src="{{book_image}}" alt="{{list_name}}" width="192" height="281" />
            </div>
            <div class="modal-content-text">
                <h2 class="modal-content-titl"><b>{{ title }}</b></h2>
                <p class="modal-content-autur"><b>{{ author }}</b></p>
        <p class="modal-content-abst"><b>{{ description}}</b></p>
        <ul class="modal-link">
              <li class="modal-link-icon">
                <a class="modal-link" href="{{buy_links[0].url}}">
                    <img src="./images/amazon.svg" alt="amazon" width="62" height="19"/></a>
              </li>
            
                <li class="modal-link-icon">
                    <a class="modal-link" href="{{buy_links[1].url}}">
                        <img  src="./images/apple.svg" alt="apple shop" width="33" height="32"/></a>
                </li>
                 
                <li class="modal-link-icon">
                    <a class="modal-link" href="{{buy_links[4].url}}">
                        <img  src="./images/bookshop.svg" alt="book shop" width="38" height="36"/></a>
                </li>
        </ul>

             </div>
        </div>`
   
 }
    

