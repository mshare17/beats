import './slider.scss';

const COUNT_VISIBLE_ITEMS = 1;

const listElem = document.querySelector(".slider__list");
const prevArrowElem = document.querySelector(".slider__arrow-prev");
const nextArrowElem = document.querySelector(".slider__arrow-next");

const widthElem = 100 / COUNT_VISIBLE_ITEMS;
const countItems = listElem.children.length;
const maxShiftItems = (countItems - COUNT_VISIBLE_ITEMS) * -1;

let currentShift = 0;

const clickNextArrow = () => {
    if (currentShift > maxShiftItems) {
        currentShift--;
        const current = widthElem * currentShift;
        listElem.style.transform = `translateX(${current}%)`;
    }
};

const clickPrevArrow = () => {
    if (currentShift < 0) {
        currentShift++;
        const current = widthElem * currentShift;
        listElem.style.transform = `translateX(${current}%)`;
    }
};

nextArrowElem.addEventListener("click", clickNextArrow);
prevArrowElem.addEventListener("click", clickPrevArrow);