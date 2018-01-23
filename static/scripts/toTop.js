define([
    'jquery',
], function(require, factory) {
    var top = $('#to-top');
    'use strict';
    top.click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 400)
    });
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop >= 1000) {
            top.show();
        } else {
            top.hide();
        }
    })
});