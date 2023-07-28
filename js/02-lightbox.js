import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMark = galleryItems
  .map(
    (galleryItem) =>
      `<li><a class="gallery__item" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" /></a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryMark);

const lightboxGallery = new SimpleLightbox(".gallery a");
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.setAttribute("title", img.alt);
});
lightboxGallery.on("show.simplelightbox", function (event) {
  event.preventDefault();
  const selectedImage = event.target;
  if (selectedImage.nodeName !== "IMG") {
    return;
  }
  title: this.attr("title");
  captionDelay: 250;
});
