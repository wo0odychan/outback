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
                $('.Main_visual .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });

    $('.Main_visual .arrows .left').on('click', function () {
        MainSlide.slidePrev();
    });
    $('.Main_visual .arrows .right').on('click', function () {
        MainSlide.slideNext();
    });


    $('.Main_visual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        MainSlide.slideTo(idx);
    });

    const ItmSlide = new Swiper('.itm_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        speed: 900,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 400,
            }
        }
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

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');

    });

    $('.Gnb>ul>li>a').on('click', function (e) {
        if ($('.Gnb').hasClass('on')) {
            e.preventDefault();
        }

        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub').slideUp();
    });

    $('.Gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    });

    $(window).on('resize', function () {
        $('.Gnb .sub').removeAttr('style');
    })

})