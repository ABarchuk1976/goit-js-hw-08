// Add imports above this line
import { galleryItems } from './gallery-items.js';
import { default as SimpleLightbox } from '../../node_modules/simplelightbox/src/simple-lightbox.js';
// Change code below this line
// const SimpleLightbox = require('simple-lightbox');
const lightbox = new SimpleLightbox('.gallery a');

console.log(lightbox.defaultOptions);
