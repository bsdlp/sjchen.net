$('.motd').css({
    position:'absolute',
    left: ($(window).width() - $('.motd').outerWidth())/2,
    top: ($(window).height() - $('.motd').outerHeight())/2
});

$(window).resize(function(){

        $('.motd').css({
                position:'absolute',
                left: ($(window).width() - $('.motd').outerWidth())/2,
                top: ($(window).height() - $('.motd').outerHeight())/2
        });

});

$(window).resize();
