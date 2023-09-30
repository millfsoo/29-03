//MODAL

const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal_close");
const modalTrigger = document.querySelector("#btn-get");

let isModalShown = false;

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  isModalShown = true;
};

setTimeout(openModal, 10000);

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

const showModalOnScroll = () => {
  if (
    !isModalShown &&
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
  ) {
    openModal();
    window.removeEventListener("scroll", showModalOnScroll);
  }
};

window.addEventListener("scroll", showModalOnScroll);

window.addEventListener("scroll", showModalOnScroll);

modalTrigger.onclick = () => openModal();
closeModalButton.onclick = () => closeModal();
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};
