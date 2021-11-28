const menuBurgerElem = document.querySelector('.burger-menu');
const btnOpenBurgerElem = document.querySelector('.header__burger');
const btnCloseBurgerElem = document.querySelector('.burger-menu__btn-close');
const itemElems = document.querySelectorAll('.burger-menu__item');

const toogleOpened = (elem) => {
    elem.classList.toggle('is-opened');
}

const openBurger = () => {
    toogleOpened(menuBurgerElem);
    document.body.classList.add('is-opened-modal');
}

const closeBurger = () => {
    toogleOpened(menuBurgerElem);
    document.body.classList.remove('is-opened-modal');
}

btnOpenBurgerElem.addEventListener('click', openBurger);
btnCloseBurgerElem.addEventListener('click', closeBurger);

itemElems.forEach(item => item.addEventListener('click', closeBurger));