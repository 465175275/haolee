//通用列表下切
$(".open-dropmenu-btn").on('click', function() {
	var sec = $(this).parent().next();
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

$(function(){
		//  公共函数
	/** 获取滚动位置(兼容) */
	function getScrollTop() {
		var scrollPos;
		if(window.pageYOffset) {
			scrollPos = window.pageYOffset;
		} else if(document.compatMode && document.compatMode != 'BackCompat') {
			scrollPos = document.documentElement.scrollTop;
		} else if(document.body) {
			scrollPos = document.body.scrollTop;
		}
		return scrollPos;
	}

	// 监听滚动事件
	$(window).scroll(function(event) {
		var scrollY = getScrollTop();
		//默认执行一次重绘函数。给各个模块初始定位
		updateElements(scrollY);
	});

	/* 滚动视差 */
	/*获取元素id函数*/
	function $$(id) {
		return document.getElementById(id);
	}
	/*
	 * 保证在范围（0~1）内进行重绘
	 * min:最小值
	 * max:最大值
	 * 规定的值
	 */
	function limit(min, max, value) {
		/*
		 当规定的值大于给定范围最大值时，取最大值为规定值
		 当规定的值小于给定的范围的最小值时，取最小值为规定值
		*/
		return Math.max(min, Math.min(max, value));
	}

	/*
	 * 计算页面滚动的相对位置.
	 * 标准化范围是从0~1
	 * base:未滚动前的基数
	 * range:可移动的像素值
	 * relY:滚动值
	 * offset:滚动开始的偏移位置
	 */
	function pos(base, range, relY, offset) {
		/*
		 * 滚动最小值为0,即未滚动。
		 * 滚动最大值为1,即滚动的值等于range定的值
		 * 两个都是极限值
		 */
		return base + limit(0, 1, relY - offset) * range;
	}

	/*
	 * 重绘函数
	 * yPos：页面滚动的距离。
	 */
	function updateElements(yPos) {
		var relativeY = Math.floor(yPos / $(document).height() * 100) / 100; //页面高度
		//  prefix(mainBG.style, "Transform", "translate3d(0," + pos(0, -600, relativeY, 0) + 'px, 0)');
		//豪利品牌-建博会
		prefix($$("build-figure1").style, "Transform", "translate3d(0px," + pos(-10, 1000, relativeY, 0) + 'px, 0)');

	}
	/* 改变对应样式 */
	function prefix(obj, prop, value) {
		var prefs = ['webkit', 'Moz', 'o', 'ms']; //针对性书写css3样式
		for(var pref in prefs) {
			obj[prefs[pref] + prop] = value; //赋值样式
		}
	}

	var scrollY = getScrollTop();
	//默认执行一次重绘函数。给各个模块初始定位
	updateElements(scrollY);
})

