import $ from 'jquery';

const infoElems = $('.team__info');
const infoContentElems = $('.team__info-content');
const btnElems = $('.team__info-btn');

const closeAll = () => {
    infoContentElems.height(0);
    infoElems.removeClass('is-opened');
}

const openElem = (infoElem, targetElem, height) => {
    infoElem.addClass('is-opened');
    targetElem.height(height);
}

function onClickBtn() {
    const parentElem = $(this).closest('.team__item')
    const infoElem = parentElem.find('.team__info');
    const targetElem = parentElem.find('.team__info-content');

    if (infoElem.hasClass('is-opened')) {
        closeAll();
    } else {
        closeAll();

        const height = infoElem.find('.team__info-text').height();
        openElem(infoElem, targetElem, height);
    }
}

btnElems.on('click', onClickBtn);