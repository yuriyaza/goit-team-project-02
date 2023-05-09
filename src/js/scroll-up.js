const scrollUpBtn = document.querySelector('.books-all');
const markupScrollUp = `
    <button class="scroll-up-btn">
        <svg class="scroll-up"></svg>
    </button>
`;
scrollUpBtn.insertAdjacentHTML('afterend', markupScrollUp);

const scroll = document.querySelector('.scroll-up-btn');
window.addEventListener('scroll', scrollUpFunc);

scroll.addEventListener('click', scrollToTop);

function scrollUpFunc() {
    const scroll = document.querySelector('.scroll-up-btn');
    scroll.classList.toggle('active', window.scrollY>500)
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}