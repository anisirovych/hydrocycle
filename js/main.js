$(function(){

    // rateYo
    $('.rate-yo').rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#C4C4C4",
        spacing: "7px"
    });

    $('.tab-content').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    }); 


    $('.card__tab').on('click', function (e) {

        e.preventDefault();

        $('.card__tab').removeClass('tab--active');
        $('.tab__content').removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    });

    //aside
    $('.tab-aside').on('click', function(e) {
        e.preventDefault();

        $('.tab-aside').removeClass('filter_tab-active');
        $('.aside-filter__tabs-content').removeClass('tabs-filter__active');

        $(this).addClass('filter_tab-active');
        $($(this).attr('href')).addClass('tabs-filter__active');

    });

    // search tabs
    $('.tab').on('click', function (e) {
        e.preventDefault();
        
        $('.search__tabs-item').removeClass('search__tabs-item__active');
        $('.search__content-item').removeClass('search__content-item__active');

        $(this).addClass('search__tabs-item__active');
        $($(this).attr('href')).addClass('search__content-item__active')

    });


    // products tabs
    $('.products__tab').on('click', function (e) {
        e.preventDefault();
        
        $('.products__tab').removeClass('tab__active');
        $('.products__content').removeClass('products-content__active');

        $(this).addClass('tab__active');
        $($(this).attr('href')).addClass('products-content__active');

        $('.product-slider').slick('setPosition');

    });

    //popular tabs
    $('.popular__tab').on('click', function(e) {
        e.preventDefault();

        $('.popular__tab').removeClass('tab__active');
        $('.popular__content').removeClass('popular-content__active');

        $(this).addClass('tab__active');
        $($(this).attr('href')).addClass('popular-content__active');

        $('.popular-slider').slick('setPosition');
    });

    // toggle favorite btn
    $('.product-item__favorite').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.popular-item__favorite').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('popular-item__favorite--active');
    });

    $('.favorite__btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('catalog-item__favorite--active');
    });

    $('.catalog__filter-btns').on('click', function (e) {
        e.preventDefault();

        $('.catalog__filter-btn__active').removeClass('catalog__filter-btn__active');
        $(this).addClass('catalog__filter-btn__active');
    });
    

   

    $('.pagination-list__item').on('click', function(e) {
        e.preventDefault();

        $('.pagination-list__item').removeClass('pagination-active');
        $(this).addClass('pagination-active')
    });

    // banner slider
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: 
        '<button class="banner-section__slider-btn banner-section__slider-prev"><img src="img/banner/arrow-left.svg" alt="prevBtn"></button>',
        nextArrow: 
        '<button class="banner-section__slider-btn banner-section__slider-next"><img src="img/banner/arrow-right.svg" alt="prevBtn"></button>',
        responsive: [ 
            {
                breakpoint: 968,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    //product slider
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: 
        '<button class="products__content-btn products__content-prev"><img src="img/arrow-left__black.svg" alt="prevBtn"></button>',
        nextArrow: 
        '<button class="products__content-btn products__content-next"><img src="img/arrow-right__black.svg" alt="prevBtn"></button>',
        responsive: [ 
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {    
               breakpoint: 1201,
               settings: {
                   arrows: false,
                   dots: true,
                   slidesToShow: 3
               }
           },
           {
            breakpoint: 901,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            },
           
        ]
    });

    //popular slider
    $('.popular-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: 
        '<button class="popular__content-btn popular__content-prev"><img src="img/arrow-left__black.svg" alt="prevBtn"></button>',
       nextArrow: 
        '<button class="popular__content-btn popular__content-next"><img src="img/arrow-right__black.svg" alt="prevBtn"></button>',
        responsive: [ 
            {
                breakpoint: 1301,
                settings: {
                    arrows: false
                }
            },
            {    
                breakpoint: 1201,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3
                }
            },
            {
             breakpoint: 901,
             settings: {
                 arrows: false,
                 dots: true,
                 slidesToShow: 2
                 }
             },
             {
                 breakpoint: 640,
                 settings: {
                     arrows: false,
                     dots: true,
                     slidesToShow: 1
                 }
             },
            
        ]
    });

    $('.filter-style').styler();
 
    $('.filter__item-drop, .filter__params').on('click', function (e) {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle();
    });

    $('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
        grid: false,
    });

    $('.catalog__filter-btnGrid').on('click', function (e) {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnLine').removeClass('catalog__filter-button--active');
        $('.catalog-item__wrapper').removeClass('catalog-item__wrapper--list');

    });

    $('.catalog__filter-btnLine').on('click', function (e) {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnGrid').removeClass('catalog__filter-button--active');
        $('.catalog-item__wrapper').addClass('catalog-item__wrapper--list');
    });

    // menu-mobile 
    
    $('.menu__btn').on('click', function (e) {
        $('.menu-mobile__list').toggleClass('menu-mobile__list-active');
    });

    $('.footer__toggle').on('click', function (e) {
        $(this).next().slideToggle();
        $(this).toggleClass('footer__toggle-active');
    });

    $('.aside__btn').on('click', function (e) {
        $(this).next().slideToggle();
    });


});

