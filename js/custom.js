$(function () {

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.Header').addClass('on')
        }
        else {
            $('.Header').removeClass('on')
        }
    });

    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 600,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.MainVisual .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });

    $('.MainVisual .arrows .left').on('click', function () {
        MainSlide.slidePrev();
    });
    $('.MainVisual .arrows .right').on('click', function () {
        MainSlide.slideNext();
    });


    $('.MainVisual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        MainSlide.slideTo(idx);
    });

    const ItmSlide = new Swiper('.itm_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 400,
        speed: 900,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    $('.MainItm .arrows .left').on('click', function () {
    });
    document.querySelector('.MainItm .arrows .left').addEventListener('click', () => {
        ItmSlide.slidePrev();
    });
    $('.MainItm .arrows .right').on('click', function () {
    });
    document.querySelector('.MainItm .arrows .right').addEventListener('click', () => {
        ItmSlide.slideNext();
    });




})