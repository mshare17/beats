import './modal.scss';

const createModal = ({ text, isErrosMsg = false }) => {
    const modalElem = document.createElement("div");
    const textModalElem = document.createElement("p");
    const btnCloseModalElem = document.createElement("button");

    const overlayElem = document.querySelector(".overlay");

    modalElem.classList.add("modal");
    btnCloseModalElem.classList.add("btn");
    textModalElem.classList.add("modal__text");
    btnCloseModalElem.classList.add("btn__fill--red");

    if (isErrosMsg) {
        textModalElem.classList.add("modal__text--error");
    }

    textModalElem.textContent = text;
    btnCloseModalElem.textContent = "Закрыть";

    modalElem.insertAdjacentElement("afterbegin", textModalElem);
    modalElem.insertAdjacentElement("beforeend", btnCloseModalElem);

    const openModal = () => {
        overlayElem.classList.remove("is-hidden");
        overlayElem.insertAdjacentElement("afterbegin", modalElem);
    }

    const closeModal = () => {
        overlayElem.classList.add("is-hidden");
        overlayElem.removeChild(modalElem);

    }

    const closeModalByOverlay = (event) => {            
        if (overlayElem === event.target) {
            closeModal();
        }
    }

    btnCloseModalElem.addEventListener("click", closeModal);
    overlayElem.addEventListener("click", closeModalByOverlay);

    return {
        openModal,
    }
}

export { createModal };