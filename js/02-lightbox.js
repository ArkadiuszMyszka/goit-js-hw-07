/* eslint-disable no-undef */
/* eslint-disable quotes */
// eslint-disable-next-line import/extensions
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function galleryCreate() {
  const galleryArray = [];

  galleryItems.forEach((el, ind) => {
    const { description, original, preview } = galleryItems[ind];
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    li.classList.add("gallery__item");
    a.classList.add("gallery__link");
    img.classList.add("gallery__image");
    a.setAttribute("href", original);
    img.setAttribute("src", preview);
    img.setAttribute("data-source", original);
    img.setAttribute("alt", description);

    li.append(a);
    a.append(img);
    galleryArray.push(li);
  });
  gallery.append(...galleryArray);
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);

    instance.show();

    const visible = basicLightbox.visible();
    if (visible) {
      document.addEventListener("keyup", ({ key }) => {
        if (key === "Escape") {
          instance.close();
        }
      });
    }
  } else {
    // eslint-disable-next-line no-useless-return
    return;
  }
});

galleryCreate();
