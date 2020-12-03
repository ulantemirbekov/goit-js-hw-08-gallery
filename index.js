import galleryArray from './gallery-items.js'

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
const lightboxImageRef = document.querySelector('.lightbox__image');
const lightboxCloseRef = document.querySelector('[data-action="close-lightbox"]');


const createGallery = galleryArray.reduce((acc, image) => {
    acc += `<li class="gallery__item">
            <a class="gallery__link" href=${image.original}>
            <img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description}/>
            </a>
            </li>`;
    return acc;
}, '');

galleryRef.insertAdjacentHTML('beforeend', createGallery)


function openWideImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') { return };

    lightboxRef.classList.add('is-open');
    lightboxImageRef.src = event.target.dataset.source;
    lightboxImageRef.alt = event.target.alt;

    lightboxCloseRef.addEventListener('click', closeWideImage);
    lightboxOverlayRef.addEventListener('click', closeWideImage);
};

galleryRef.addEventListener('click', openWideImage);


function closeWideImage() {
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
}
