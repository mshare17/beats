import $ from 'jquery';
import 'jquery-touchswipe';
import MobileDetect from 'mobile-detect';

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

console.log(mobileDetect);

const sections = $('section');
const display = $('.maincontent');
const sideMenu = $('.fixed-menu');

let isScroll = false;

sections.first().addClass('active');

const countSectionPosition = sectionEq => sectionEq * -100

const changeMenuTheme = sectionEq => {
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr('data-sidemenu-theme');
    const activeClass = 'fixed-menu--shadowed';
    
    if (menuTheme === 'black') {
        sideMenu.addClass(activeClass);
    } else {
        sideMenu.removeClass(activeClass);
    }
}

const performTransition = sectionEq => {
    if (!isScroll) {
        isScroll = true;
        const position = countSectionPosition(sectionEq);
        changeMenuTheme(sectionEq);

    
        display.css({
            transform: `translateY(${position}%)`,
        })
    
        sections.eq(sectionEq).addClass('active').siblings().removeClass('active');

        const timer = setTimeout(() => {
            isScroll = false;

            sideMenu
                .find('.fixed-menu__item')
                .eq(sectionEq)
                .addClass('fixed-menu__item--active')
                .siblings()
                .removeClass('fixed-menu__item--active')

            clearTimeout(timer);
        }, 1300)
    }
}

const viewportScroller = () => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    return {
        next: () => {
            if (nextSection.length) {
                performTransition(nextSection.index());
            }
        },

        prev: () => {
            if (prevSection.length) {
                performTransition(prevSection.index());
            }
        }
    }

1

}

$(window).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;
    const scroller = viewportScroller();

    if (deltaY > 0) {
        scroller.next()
    } else {
        scroller.prev()
    }
})

$(window).on('keydown', e => {
    const tagName = e.target.tagName.toLowerCase();
    const scroller = viewportScroller();

    if (tagName !== 'input' && tagName !== 'textarea') {
        switch (e.keyCode) {
            case 38:
                scroller.prev();
                break;

            case 40:
                scroller.next()
                break;        
        }
    }

    if (deltaY > 0) {
        scroller.next()
    } else {
        scroller.prev();
    }
})

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const target = $(e.currentTarget).attr('data-scroll-to');
    const reqSection = $(`[data-section-id=${target}]`)

    performTransition(reqSection.index())
})

$('.wrapper').on('touchmove', e => {
   e.preventDefault(); 
})

if (isMobile) {
    $("body").swipe( {
        swipe: function(event, direction) {
            const scroller = viewportScroller();
            let scrollDirection = ''
    
            if (direction === 'up') {
                scrollDirection = 'next'
            } else if (direction === 'down') {
                scrollDirection = 'prev'
            }
    
            scroller[scrollDirection]();
    
            console.log('swipe');
        }
    });
}