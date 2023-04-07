// Add imports above this line

import { galleryItems } from './gallery-items';
// Описаний в документації

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів

import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryCards);

function createGallery(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`;
    })
    .join('');
};

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
 });

 console.log(galleryItems);
