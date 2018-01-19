define(['jquery','ease'], function($) {
    //通用列表下切
    $(".open-dropmenu-btn").on('click', function() {
        var sec = $(this).parent().next();
        if(sec.length == 0) {
            sec = $(this).parent().parent().next()
        }
        $(this).next().fadeToggle({
            duration: 1000,
            easing: 'swing'
        });
        $(this).toggleClass("active");
        sec.slideToggle({
            duration: 1000,
            easing: 'swing'
        });
    });
})