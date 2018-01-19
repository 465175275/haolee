/** 视差效果 */
/** 定义依赖的库 */
var deps = [
    'jquery',
    'SuperScrollorama',
    'tweenMax'
]
define(deps, function($, superscrollorama, TweenLine) {
    /*  params 参数
        target: 滚动到的容器或目标
        top: 往上滚动的值
        bottom: 往上滚动的值
        duration: 持续时间(s)
    */
    function parallax(target, top, bottom, duration) {
        var target = $('.' + target);
        var wrapper = '';
        var duration = duration || 1;
        var ele = target.find('.js-parallax');
        var eleHieght = ele.height();
        if(target.find('.js-parallax-wrapper').length != 0) {
            wrapper = target.find('.js-parallax-wrapper');
            wrapper.css({'height': eleHieght - (Math.abs(top) + bottom), 'overflow': 'hidden'})
        }
        var controller = $.superscrollorama({ 
            triggerAtCenter: false, 
            playoutAnimations: true
        });
        controller.addTween(target,
            TweenLite.fromTo(
                ele,
                duration,
                { y: top + 'px'}, 
                { y: bottom + 'px'}
            ), 
            duration * 1000
        );
    }
    return parallax
})