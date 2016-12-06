/**
 * Created by austin on 8/5/16.
 */
(function () {
    // jQuery to collapse the navbar on scroll
    if ($('.navbar').offset().top > 150) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    }
    $(window).scroll(function () {
        if ($('.navbar').offset().top > 150) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }
    });

    var $offset = 10;
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function (event) {
        removeActiveClass();
        $(this).parent().addClass('active');
        var $position = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: $position - $offset
        }, 600);
        event.preventDefault();
    });


    var removeActiveClass = function () {
        var a = document.getElementsByClassName('page-scroll');
        for (var i = 0; i < a.length; i++) {
            $(a[i]).removeClass('active')
        }
    };

    var $scrollspy = $('body').scrollspy({target: '.one-page-nav-scrolling', offset: $offset + 2});

    // Collapse Navbar When It's Clickicked
    $(window).scroll(function () {
        $('.navbar-collapse.in').collapse('hide');
    });


    // Adds kickass app to webpage upon triple click of logo
    $('#logo').click(function (e) {
        if (e.detail === 3) {
            var KICKASSVERSION = '2.0';
            var s = document.createElement('script');
            s.type = 'text/javascript';
            document.body.appendChild(s);
            s.src = '//hi.kickassapp.com/kickass.js';
            void(0);
        }

    })
})();
