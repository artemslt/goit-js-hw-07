import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

galleryDiv.innerHTML = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
      <a class="gallery__link"
       href="${item.original}">
        <img class="gallery__image"
         src="${item.preview}" 
         data-source="${item.original}"
          alt="${item.description}" />
      </a>
    </div>`
  )
  .join('');

const clickOnImage = evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const largeImg = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <div class="modal">
       		<img  width="1280" src=${largeImg} >
    </div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('img').onclick = instance.close;
      },
    }
  );

  instance.show();

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      return instance.close();
    }
  });
};

galleryDiv.addEventListener('click', clickOnImage);
