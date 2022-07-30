import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');

galleryDiv.innerHTML = galleryItems
  .map(
    item =>
      `<li>
      <a class="gallery__item"
       href="${item.original}">
        <img class="gallery__image"
         src="${item.preview}" 
          alt="${item.description}" />
      </a>
      </li>
    `
  )
  .join('');

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
