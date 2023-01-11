import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
let modalWindow;

function createCard({ preview, original, description }) {
  return `<div class='gallery__item'>
  <a class='gallery__link' href='large-image.jpg'>
    <img
      class='gallery__image'
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`;
}

function createGallery(list) {
  return list.map((item) => createCard(item)).join("");
}
function insertGalleryContainerToHTML() {
  galleryContainer.insertAdjacentHTML("beforeend", createGallery(galleryItems));
}
insertGalleryContainerToHTML();

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  if (!event.target.classList.contains("gallery__image")) return;
  event.preventDefault();
  const targetElement = event.target;
  createModalWindow(targetElement);
  document.body.addEventListener("keydown", onEscapeModalWindowClick);
  removeListenerFromModalWindow();
}
function createModalWindow(targetElement) {
  const modalImage = `<img 
      class='gallery__image'
      src='${targetElement.dataset.source}'
      alt='${targetElement.alt}'
    />`;
  modalWindow = basicLightbox.create(`
    ${modalImage}
`);
  modalWindow.show();
}
function removeListenerFromModalWindow() {
  const visible = modalWindow.visible();
  if (!visible) {
    document.body.removeEventListener("keydown", onEscapeModalWindowClick);
  }
}

function onEscapeModalWindowClick(event) {
  console.log(event.code);
  if (event.key === "Escape") {
    modalWindow.close();
  }
}
