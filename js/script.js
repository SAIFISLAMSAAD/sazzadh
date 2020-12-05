//     banner-part-start
$(document).ready(function () {

    $('.slide-active').slick({
        arrows: false,
        dots: true
    });
    $('.slick-dots li:nth-child(1) button').html('<i class="fa fa-home">');

});

//     banner-part-end

//screenshot-part-start
$(function () {
    $('.slider-active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
});
//screenshot-part-end
//veno-box-start


$('.watch-video').venobox();

//veno-box-end

//preloader-start
$(window).load(function () {
    $('.preloader').delay(500).fadeOut();
});



//preloader-end

//sticky-start

$(window).scroll(function () {
    var scrollAmount = $(window).scrollTop();

    if (scrollAmount > 250) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});
//sticky-end   

//feedback-area
$('.text-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.img-active'
});
$('.img-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.text-active',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    centerPadding: '0px',
    autoplay: true
});


//feedback-end
