$(document).ready(function (){
    $('.menu_icon').click(function (event) {
        $('.menu_icon,.menu_body,.header').toggleClass('_active');
    });
    $('.slider_blocks').slick({
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 1210,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    centerMode:true,
                    fade: true,
                    autoplay: true,
                    speed:1000,
                    dots: true,
                }
            }
        ]


    });

    $('.commit_element').slick({
       slidesToShow: 1,
        fade: true,
        autoplay: true,
        speed:4000,
        dots:true,
    });
    $('.mentor_element').slick({
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        speed:4000,
        dots:true,
    });
});