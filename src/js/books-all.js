const btn = document.querySelector('.see-more');
const cards = Array.from(document.querySelectorAll('.books-all-item'))

function openCatalog() {
    btn.addEventListener('click', () => {
        cards.forEach(item => item.classList.remove('hidden'));
        
    })
}

function response1() {
    if(window.innerWidth > 1439) {
        cards.forEach((item, index) =>{
            item.classList.add('hidden')
            if (index <= 4) {
                item.classList.remove('hidden')
            } 
            openCatalog()
        })
    }
}