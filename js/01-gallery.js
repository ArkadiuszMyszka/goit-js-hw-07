/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/extensions
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
'use strict';

const galleryNew = document.querySelector('gallery');
const addImg = galleryItems.map((image) => `<li class ="image"> <img src="${image.preview}" alt:"${image.description}"/></li>`)
// eslint-disable-next-line indent, quotes
    .join("");
// eslint-disable-next-line no-console
console.log(addImg);
galleryNew.insertAdjacentHTML('afterbegin', addImg);
// galleryNew.style.display = "flex";
