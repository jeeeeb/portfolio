$(function () {
    let winHeight = $(window).height();

    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('#wrap>section').on('mousewheel', function (e, d) {
        if (d > 0) {
            let prv = $(this).prev().offset().top;
            $('html,body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) {
            let nxt = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop: nxt
            });
        }
    });

    let intro = $('#intro').offset().top;
    let about = $('#about').offset().top;
    let skills = $('#skills').offset().top;
    let highdev = $('#highdev').offset().top;
    let Graphic = $('#Graphic').offset().top;
    let web = $('#web').offset().top;
    let contact = $('#contact').offset().top;

    $(window).scroll(function () {
        let scr = $(this).scrollTop();
        let moveBar = $('.skill');
        if (scr >= skills && scr < highdev) {
            moveBar.addClass('on');
        } else {
            moveBar.removeClass('on');
        }
        if (scr > intro && scr <= contact) {
            $('#goTop').css({ opacity: 1 });
        } else {
            $('#goTop').css({ opacity: 0 });
        }
        if (scr >= 0 && scr < about) {
            $('#menu .toggle_menu span').css({ backgroundColor: '#fff' });
            $('#menu nav>div').css({ color: '#fff' });
        } else if (scr >= about && scr <= web) {
            $('#menu .toggle_menu span').css({ backgroundColor: '#000' });
            $('#menu nav>div').css({ color: '#000' });
        } else if (scr >= contact) {
            $('#menu .toggle_menu span').css({ backgroundColor: '#fff' });
            $('#menu nav>div').css({ color: '#fff' });
        }
    });
    $('#menu').on('click', function () {
        $(this).toggleClass('slide');
    })

    $('#menu .toggle_menu').on('click', function () {
        $(this).toggleClass('cross');
    });

    $('#goTop').on('click', function () {
        $('html,body').stop().animate({ scrollTop: 0 }, 800);
    })

    $('#menu nav div a').on('click', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        });
        $('#menu').toggleClass('slide');
    })

})