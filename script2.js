const galleryImages = document.querySelectorAll(".image-wrapper img");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;
function openModal(index) {
  currentIndex = index;
  modalImage.src = galleryImages[currentIndex].src;
  modal.style.display = "flex";
}
function closeModalFn() {
  modal.style.display = "none";
}
function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  modalImage.src = galleryImages[currentIndex].src;
}
function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  modalImage.src = galleryImages[currentIndex].src;
}
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});
closeModal.addEventListener("click", closeModalFn);
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModalFn();
});
