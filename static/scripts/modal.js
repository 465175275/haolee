define(['jquery', 'wow'], function($) {
    /* 弹窗 */
	var flag;
	var flagTop;
	var index;
	$(".js-open-modal-btn").on('click', function() {
		var moadlContainer = $(".modal-container");
		var modalItems = moadlContainer.find(".section-modal");
		var closeBtn = $(".modal-button-container");
		index = $(this).data("index");
		flagTop = $(window).scrollTop();
		$('body').addClass('modal-will-open modal-enable-transition-in modal-animating');
		flag = 0;
		modalItems.eq(index).show();
		/*$("img.lazyload").lazyload({
			effect: "fadeIn",
			threshold: 100,
			container: $(".layer-content")
		});*/
		scrollbottom();
		closeBtn.removeClass('on');
	});
	/* 关闭弹窗 */
	$(".js-close-modal-btn").on('click', function() {
		var modalItems = $(".section-modal");
		$('body').removeClass('modal-open modal-background-lock')
		$('body').addClass('modal-will-close modal-enable-transition-out modal-animating');
		flag = 1;
		$(window).scrollTop(flagTop);
		if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
			new WOW().init();
		}
	});
	$(".main").on("webkitAnimationEnd", function() { //动画结束时事件 
		isModalIn();
	})
	function isModalIn() {
		var modalItems = $(".section-modal");
		if(flag === 0) {
			$('body').removeClass('modal-will-open modal-animating modal-enable-transition-in').addClass('modal-open modal-background-lock');
			$(window).scrollTop(0);
		}
		if(flag === 1) {
			$('body').removeClass('modal-will-close modal-enable-transition-out modal-animating');
			modalItems.eq(index).hide();
		}
	}
	/* 滚动到底部 */
	function scrollbottom() {
		$('.layer-content').on('scroll', function() {
			var btn = $(".modal-button-container");
			var scrollHight = $(this)[0].scrollHeight; //滚动距离总长(注意不是滚动条的长度)
			var scrollTop = $(this)[0].scrollTop; //滚动到的当前位置
			var clientHight = $(this).height();
			if(scrollTop + clientHight >= scrollHight) {
				btn.addClass('on');
			} else {
				btn.removeClass('on');
			}
		});
    }
})