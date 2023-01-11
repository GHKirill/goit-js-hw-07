import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createCard({ preview, original, description }) {
  return `<a class='gallery__item' href='${original}'>
  <img class='gallery__image' src='${preview}' alt='${description}'/>
</a>`;
}
function createGallery(list) {
  return list.map((item) => createCard(item)).join("");
}
function insertGalleryContainerToHTML() {
  galleryContainer.insertAdjacentHTML("beforeend", createGallery(galleryItems));
}
insertGalleryContainerToHTML();
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
