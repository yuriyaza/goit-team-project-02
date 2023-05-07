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