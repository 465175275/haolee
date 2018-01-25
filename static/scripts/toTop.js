define([
    'jquery',
], function(require, factory) {
    var $top = $('#to-top');
    var $nav = $('.product-nav-sec');
    'use strict';
    $top.click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 400)
    });
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop >= 1000) {
            $top.addClass('roll-up');
            $nav.addClass('roll-up');
        } else {
            $top.removeClass('roll-up');
            $nav.removeClass('roll-up');
        }
    })
});