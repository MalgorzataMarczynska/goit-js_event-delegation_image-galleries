import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const instance = basicLightbox.create(`
    <div class="modal">
        <img src="" alt="Large image"/>
    </div>
`);

const galleryMark = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}" /></a></div>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryMark);

// const images = galleryItems.forEach(({ preview, original, description }) => {
//   const container = document.createElement("div");
//   container.classList.add("gallery__item");
//   const link = document.createElement("a");
//   link.classList.add("gallery__link");
//   link.setAttribute("href", original);
//   const img = document.createElement("img");
//   img.classList.add("gallery__image");
//   img.setAttribute("src", preview);
//   img.setAttribute("alt", description);
//   img.setAttribute("data-source", original);

//   container.appendChild(link);
//   link.appendChild(img);
//   console.log(img);
// });

// gallery.append(images);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedImage = event.target;
  if (selectedImage.nodeName !== "IMG") {
    return;
  }

  const largeImage = selectedImage.dataset.source;
  const alt = selectedImage.alt;
  const modal = instance.element();
  const modalImg = modal.querySelector("img");
  modalImg.src = largeImage;
  modalImg.alt = alt;
  instance.show();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance.visible()) instance.close();
});
