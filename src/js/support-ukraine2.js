import { fonds } from './array-of-funds';

const supportListModal = document.querySelector('.support-ukraine-list');
let offset = 0;
const sliderLineModal = document.querySelector('.slider-liner-su');
const sliderBtnModal = document.querySelector('.support-ukraine-btn');
sliderBtnModal.addEventListener('click', sliderBtnHandlerModal);

createMarkupForSupportUkModal(fonds);

function createMarkupForSupportUkModal(fonds) {
  fonds.forEach(function (fond, index) {
    const { title, url, img, img2x } = fond;
    const params = {};
    params.title = title;
    params.url = url;
    params.img = img;
    params.img2x = img2x;
    params.index = index;

    supportListModal.insertAdjacentHTML('beforeend', markupModal(params));
  });
}

function markupModal(params) {
  const { title, url, img, img2x, index } = params;

  return `<li class="list-unit">
	<a href="${url}" class="list-unit-link" target="_blank"><span class="span-list-unit">${pad(
    index + 1
  )}</span>
	<img class="img-list-unit"
		src="${img}"
		srcset="${img} 1x, ${img2x} 2x"
		alt="${title}"
	></img></a>
</li>`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function sliderBtnHandlerModal() {
  offset += 157;
  if (offset > 500) {
    offset = 0;
  }
  sliderLineModal.style.top = -offset + 'px';
}
