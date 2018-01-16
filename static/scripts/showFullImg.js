define(['jquery'], function($) {
    function showFullImg(winWidth, winHeight, scrollTop) {
        $('.bg-mark').each(function() {
            var percent, originPercent,
                rate = 0.5,
                originWidthRate = 0.20,
                offsetTop = $(this).offset().top,
                diffHeight = (winHeight + scrollTop) - offsetTop;
            originPercent = originWidthRate * 100 + '%';
            if(offsetTop <= scrollTop + winHeight) {
                percent = (winWidth * originWidthRate - diffHeight * rate) / winWidth * 100 + '%';
                if(parseInt(percent) < -10) {} else {

                }
                if(parseInt(percent) <= 0) {
                    $(this).find('.left-mark, .right-mark').addClass('is-max');
                } else {
                    $(this).find('.left-mark, .right-mark').removeClass('is-max');
                }
                $(this).find('.left-mark, .right-mark').width(percent);
            } else {
                $(this).find('.left-mark, .right-mark').width(originPercent);
            }
        });
    }
    return showFullImg
})