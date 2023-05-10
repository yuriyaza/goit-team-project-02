// import { func } from 'joi';
import { fonds } from './array-of-funds';
let offset = 0;
const supportList = document.querySelector('.support-ukraine-list');
const sliderLine = document.querySelector('.slider-liner-su');
const sliderBtn = document.querySelector('.support-ukraine-btn');
sliderBtn.addEventListener('click', sliderBtnHandler);

createMarkupForSupportUk(fonds);

function createMarkupForSupportUk(fonds) {
  fonds.forEach(function (fond, index) {
    const { title, url, img, img2x } = fond;
    const params = {};
    params.title = title;
    params.url = url;
    params.img = img;
    params.img2x = img2x;
    params.index = index;

    supportList.insertAdjacentHTML('beforeend', markup(params));
  });
}

function markup(params) {
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

function sliderBtnHandler() {
  offset += 157;
  if (offset > 500) {
    offset = 0;
  }
  sliderLine.style.top = -offset + 'px';
}
