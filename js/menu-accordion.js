import $ from 'jquery';

const infoElems = $('.products-menu__item');
const contentElems = $('.products-menu__content');
const btnElems = $('.products-menu__link');

const getWidth = (elem) => {
    const screenWidth = $(window).width();
    const container = elem.closest('.products-menu__list');
    const titleElems = container.find('.products-menu__link');
    const widthTitles = titleElems.width() * titleElems.length;
    const contentTextElem = elem.find('.products-menu__text');
    const contentTextPL = parseInt(contentTextElem.css("padding-left"), 10);
    const contentTextPR = parseInt(contentTextElem.css("padding-right"), 10);

    const isTablet = screenWidth <= 768;
    const width = isTablet ? screenWidth - widthTitles : 524;
    const textWidth = width - contentTextPL - contentTextPR;

    return {
        content: width,
        text: textWidth,
    }
}

const closeElem = (infoElem) => {
    const contentElem = infoElem.find('.products-menu__content');
    infoElem.removeClass('is-opened');
    contentElem.width(0);
}

const closeAll = () => {
    infoElems.removeClass('is-opened');
    contentElems.width(0);
}

const openElem = (infoElem) => {
    const contentElem = infoElem.find('.products-menu__content');
    const contentTextElem = infoElem.find('.products-menu__text');
    const width = getWidth(contentElem);

    infoElem.addClass('is-opened');
    contentElem.width(width.content);
    contentTextElem.width(width.text);
}

function onClickBtn() {
    const infoElem = $(this).closest('.products-menu__item')

    if (infoElem.hasClass('is-opened')) {
        closeElem(infoElem);
    } else {
        closeAll();
        openElem(infoElem);
    }
}

btnElems.on('click', onClickBtn);