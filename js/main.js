$(function () {

    $('.mainV').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        vertical: false,
        dots: false
    });




    $('.menu_slider1').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                }
            },
            /* {
                breakpoint: 640,
                settings: {
                    arrows: false,
                }
            } */
        ]
    });

    $('.menu_slider2').slick({
        autoplay: true,
        autoplaySpeed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    /*  $('#slider ul').slick({
         autoplay: true,
         autoplaySpeed: 200,
         dots: false,
         Infinity: true,
         speed: 300,
         slidesToShow: 6,
         slidesToScroll: 1,
         dots: false,
         arrows: false,
         responsive: [
             {
                 breakpoint: 960,
                 settings: {
                     slidesToShow: 5,
                     slidesToScroll: 1,
                 }
             },
             {
                 breakpoint: 640,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 1
                 }
             }
 
         ]
 
     }); */


    /*  window.onload = function () {
         var bannerLeft = 0;
         var first = 1;
         var last;
         var imgCnt = 0;
         var $img = $('#roll img');
         var $first;
         var $last;
     }
    
     if (imgCnt > 1) {
 
         last = imgCnt;
         setInterval(function () {
             $mg.each(function () {
                 $(this).css()
             })
         })
  */







});


