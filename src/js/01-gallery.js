// Add imports above this line
import { galleryItems } from './gallery-items.js';
import { default as SimpleLightbox } from '../../node_modules/simplelightbox/src/simple-lightbox.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
let markup = '';

for (const img of galleryItems) {
  markup += `<a class="gallery__item" href=${img.original} title="${img.description}">
			<img 
				class="gallery__image"
				src=${img.preview} 
				alt="${img.description}"
			/>
			</a>`;
}

galleryRef.insertAdjacentHTML('beforeend', markup);
const paramsLightbox = {
  overlayOpacity: 1,
  captionSelector: 'self',
  captionDelay: 250,
};
const lightbox = new SimpleLightbox('.gallery a', paramsLightbox);

galleryRef.addEventListener('click', event => {
  if (event.target.tagName !== 'IMG') return;

  lightbox.show;

  event.preventDefault();
});
