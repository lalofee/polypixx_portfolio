$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var evenImgPos = scrollTop / 2.5 + 'px';

    $('.parallax__bg').css('transform', 'translateY(' + evenImgPos + ')');
});