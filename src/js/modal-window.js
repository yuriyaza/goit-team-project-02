const refs = {
    openModalBtn: document.querySelector('.open-modal'),
    closeModalBtn: document.querySelector('.modal-btn'),
    backdrop: document.querySelector('.hi-backdrop'),
    addFromShoppingList: document.querySelector(".openmodal-btn"),
    informModalText: document.querySelector('.modal-text'),
    modalCardBoock:document.querySelector(".modal-content-card"),
}

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.addFromShoppingList.addEventListener('click', addFromList);

function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
    refs.informModalText.style.display = 'none';
    refs.addFromShoppingList.textContent = 'Add to shopping list';
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
function addFromList() {
    // local storidg
    this.textContent = 'remove from the shopping list';
    refs.informModalText.style.display = 'block';
    // refs.addFromShoppingList.removeEventListener('click', addFromList);
}



function modalCartBoock(cartBoock) {
    return <div class="modal-content">
            <div class="modal-content-card">
            
            <div class="modal-content-img">
                <img src="{book_image}" alt="{list_name}" width="192" height="281" />
            </div>
            <div class="modal-content-text">
                <h2 class="modal-content-titl"><b>{{ title }}</b></h2>
                <p class="modal-content-autur"><b>{{ author }}</b></p>
        <p class="modal-content-abst"><b>{{ description}}</b></p>
                <ul class="modal-link">
                    <li class="modal-link-icon">
                        <a href="https://www.amazon.com/" target="blank">
                
                            <img src="./img/amazon-1.png" alt="amazon" width="62" height="19" />
                        </a>
                    </li>
                    <li class="modal-link-icon">
                        <a href="https://www.apple.com/ua/apple-books/" target="blank">
                
                            <img src="./img/boock_2.png" alt="boock" width="33" height="32" />
                        </a>
                    </li>
                    <li class="modal-link-icon">
                        <a href="https://bookshop.org/" target="blank">
                
                            <img src="./img/newboock.png" alt="boock" width="38" height="36" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
function rendermodCardBoock(cartBoock) {
    const markup = modalCartBoock(cartBoock);
    refs.modalCardBoock.innerHTML = markup;
    
    }
