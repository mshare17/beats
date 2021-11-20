import $ from 'jquery';

const reviewElems = $('.reviews__item');
const paginationElems = $('.reviews__pagination-item');

const setIsActive = (elem) => {
    elem.addClass('is-active');
}

function onClick(event, idx) {
    const paginationElem = $(event.currentTarget);

    if (!paginationElem.hasClass('is-active')) {
        const targetReviewElem = $(reviewElems[idx]);
        
        setIsActive(targetReviewElem);
        setIsActive(paginationElem);
        
        targetReviewElem.siblings('.reviews__item').removeClass('is-active');
        paginationElem.siblings('.reviews__pagination-item').removeClass('is-active');
    }
}

paginationElems.each((idx, elem) => $(elem).on('click', (e) => onClick(e, idx))) 