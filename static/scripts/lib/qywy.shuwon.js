var qywy = {
	init: function() {
		switch(jsFun) {
			case 'home':
				qywy.homePage();
				break;
			case 'happiness':
				qywy.happinessPage();
				break;
			case 'green':
				qywy.greenPage();
				break;
			case 'ContactUs':
				qywy.ContactUsPage();
				break
			case 'service':
				qywy.servicePage();
				break;
			case 'video':
				qywy.videoPage();
				break;
			case 'join':
				qywy.joinPage();
				break;
			case 'product':
				qywy.productPage();
				break;
		}
	},
	homePage: function() {
		if((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
			var bannerSize = $(".swiper-container-banner .swiper-wrapper li").size();
			console.log(bannerSize)
			for(var i = 0; i <= bannerSize - 1; i++) {
				$(".swiper-pagination-banner").append("<span></span>")
			}
			$(".swiper-pagination-banner span:first").addClass("active");

			$(".swiper-pagination-banner span").click(function() {
				var i = $(this).index();
				$(this).addClass("active").siblings().removeClass("active")
				console.log(i)
				$(".swiper-container-banner .swiper-wrapper li").eq(i).fadeIn().siblings().fadeOut();
			})
		} else {
			var swiper = new Swiper('.swiper-container-banner', {
				pagination: '.swiper-pagination-banner',
				paginationClickable: true,
				autoplay: 4500,
				effect: 'fade',
				speed: 800,
				lazyLoading: true,
				autoplayDisableOnInteraction: false,
				onSlideChangeStart: function(swiper) {
					$(".jinduT").removeClass("active")
					setTimeout(function() {
						$(".jinduT").addClass("active")
					}, 200)
				},
				onSlideChangeEnd: function(swiper) {
					var i = swiper.activeIndex;
					if(i == 2) {
						$(".logo").addClass("cus")
					} else {
						$(".logo").removeClass("cus")
					}
				}
			});
			var mySwiper = new Swiper('.swiper-container', {
				speed: 500,
				swipeHandler: '.swipe-handler'
			});
			$(".nightBox .iconBox ul li").click(function() {
				$(this).addClass("active").siblings().removeClass("active");
				mySwiper.slideTo($(this).index());
				$(".nightBox .contBox .leftBox .list li").eq($(this).index()).fadeIn().siblings().hide()
			})
		}
		if(location.hash == "#0") {
			console.log("123")
		} else {
			console.log("321")
			$("html,body").animate({
				scrollTop: _h + 10
			}, 1000);
		}

	},
	happinessPage: function() {
		var W_3 = $(window).width() / 3;
		$(".happiness-body .happinessBox .myIdea ul li").hover(function() {
			var i = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			//console.log(i)
			$(".happiness-body .happinessBox .myIdea .mask").stop().animate({
				left: i * W_3
			}, 500);
			//console.log($(".happiness-body .happinessBox .myIdea .mask").offset().left)
			$(".happiness-body .happinessBox .myIdea .mask .mask_bg").stop().animate({
				"background-position": -i * W_3
			}, 500);
		})
		if(location.hash == "#0") {
			console.log("123")
		} else {
			console.log("321")
			$("html,body").animate({
				scrollTop: _h + 10
			}, 1000);
		}

	},
	greenPage: function() {
		//更多文字
		var greenBox2 = $(".green-body .greenBox2 .spinner");
		greenBox2.bind("click", function() {
			greenBox2.addClass("active");
			setTimeout(function() {
				$(".green-body .greenBox2 .tit .text2").fadeIn()
				greenBox2.hide()
			}, 1000)

		})
		var greenBox1 = $(".green-body .greenBox1 .spinner");
		greenBox1.bind("click", function() {
			greenBox1.addClass("active");
			setTimeout(function() {
				$("#bk1 .pageTit .text").addClass("active")
				$(".green-body .greenBox1 .text2").fadeIn()
				greenBox1.hide()
			}, 1000)

		})

		//大事件
		//大事件-时间
		var mySwiper1 = new Swiper('.swiper-container-box1', {
			paginationClickable: true,
			slidesPerView: 9,
			spaceBetween: 0,
			slidesPerGroup: 9,
			autoplay: 4500,
			speed: 800,
			autoplayDisableOnInteraction: false,
			breakpoints: {
				//褰撳搴﹀皬浜庣瓑浜�640
				669: {
					slidesPerView: 4,
					spaceBetween: 0,
					slidesPerGroup: 4,
				},
				769: {
					slidesPerView: 8,
					spaceBetween: 0,
					slidesPerGroup: 8
				}
			}
		})
		var size = $(".green-body .greenBox5 .infomation ul").eq(0).find("li").size()
		var num = 0;
		var indexs = 0
			//事件点击
		var h_infomation = $(".green-body .greenBox5 .infomation ul").height();
		$(".green-body .greenBox5 .timeAxis ul li").click(function() {
				indexs = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$(".green-body .greenBox5 .infomation .infomation-box").animate({
					top: -indexs * h_infomation
				}, {
					duration: 800,
					easing: 'easeInOutExpo'
				});
				size = $(".green-body .greenBox5 .infomation ul").eq(indexs).find("li").size();
				$(".green-body .greenBox5 .btnPage").fadeOut()
				$(".green-body .greenBox5 .btnNext").fadeIn()
				num = 0;
				$(".green-body .greenBox5 .infomation ul").css({
					left: num * green_W
				})
				console.log(0)
			})
			//切换月份
		var green_W = $(".green-body .greenBox5 .infomation ul li").outerWidth(true);
		$(".green-body .greenBox5 .btnPage").click(function() {
			num <= 0 ? num = 0 : num--;
			if(num <= 0) {
				$(this).fadeOut()
				$(".green-body .greenBox5 .btnNext").fadeIn();
			} else {
				$(this).fadeIn()
				$(".green-body .greenBox5 .btnNext").fadeIn();
			}
			$(".green-body .greenBox5 .infomation ul").eq(indexs).animate({
				left: -num * green_W
			}, {
				duration: 1000,
				easing: 'easeInOutExpo'
			});
		})
		$(".green-body .greenBox5 .btnNext").click(function() {
			num >= size - 1 ? num = size - 1 : num++;
			if(num >= size - 1) {
				$(this).fadeOut()
				$(".green-body .greenBox5 .btnPage").fadeIn();
			} else {
				$(this).fadeIn()
				$(".green-body .greenBox5 .btnPage").fadeIn();
			}
			$(".green-body .greenBox5 .infomation ul").eq(indexs).animate({
				left: -num * green_W
			}, {
				duration: 1000,
				easing: 'easeInOutExpo'
			});
		})
		if(location.hash == "#0") {
			console.log("123")
		} else {
			console.log("321")
			$("html,body").animate({
				scrollTop: _h + 10
			}, 1000);
		}

	},
	ContactUsPage: function() {
		

	},

	servicePage: function() {
		if((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
			var numSize = $(".serviceDemo .swiper-container .swiper-wrapper .swiper-slide").size();
			var num = 0

			$(".servicePage .btns.btnL").click(function() {
				num <= 0 ? num = 0 : num--
					$(".serviceDemo .swiper-container .swiper-wrapper").animate({
						left: -num * 924
					}, 500)

			})
			$(".servicePage .btns.btnR").click(function() {
				num >= numSize - 1 ? numSize = numSize - 1 : num++
					$(".serviceDemo .swiper-container .swiper-wrapper").animate({
						left: -num * 924
					}, 500)
			})
		} else {

			var swiper = new Swiper('.serviceDemo .swiper-container', {
				slidesPerView: 3,
				breakpoints: {
					767: {
						slidesPerView: 1,
						spaceBetween: 0,
						slidesPerGroup: 1,
						nextButton: '.servicePage .btns.btnR',
						prevButton: '.servicePage .btns.btnL',
						speed: 800
					}
				},
				onSlideChangeEnd: function(swiper) {
					$(".serviceNum dt").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active")
				}
			});

			var horizontalW = $(".serviceDemo .swiper-container .swiper-wrapper .swiper-slide").width()
			var numss = $(".serviceDemo .swiper-container .swiper-wrapper .swiper-slide").size()
			var jisuq = 0;
			console.log(horizontalW)
			$(".servicePage .btns.btnL").click(function() {
				jisuq <= 0 ? jisuq = 0 : jisuq--;
				if(jisuq == 2) {
					console.log("5和2")
					$(".servicePage .swiper-container-horizontal .swiper-wrapper").stop().animate({
						left: 0 * horizontalW
					}, 600)
				} else if(jisuq == 5) {
					console.log("5和2")
					$(".servicePage .swiper-container-horizontal .swiper-wrapper").stop().animate({
						left: -3 * horizontalW
					}, 600)
				} else if(jisuq == 8) {
					$(".servicePage .swiper-container-horizontal .swiper-wrapper").stop().animate({
						left: -(6) * horizontalW
					}, 600)
					console.log("靠")
				}
				$(".serviceDemo .swiper-container .swiper-wrapper .swiper-slide").eq(jisuq).addClass("active").siblings().removeClass("active")
				$(".serviceNum dt").eq(jisuq).addClass("active").siblings().removeClass("active")
			})
			$(".servicePage .btns.btnR").click(function() {
				jisuq >= numss - 1 ? jisuq = numss - 1 : jisuq++;
				if((jisuq + 0) % 3 == 0) {

					if(jisuq == 9) {
						$(".servicePage .swiper-container-horizontal .swiper-wrapper").stop().animate({
							left: -(jisuq - 2) * horizontalW
						}, 600)
					}
					$(".servicePage .swiper-container-horizontal .swiper-wrapper").stop().animate({
						left: -jisuq * horizontalW
					}, 600)
				}
				$(".serviceDemo .swiper-container .swiper-wrapper .swiper-slide").eq(jisuq).addClass("active").siblings().removeClass("active")
				$(".serviceNum dt").eq(jisuq).addClass("active").siblings().removeClass("active")
			})

			var swiper2 = new Swiper('.imgShowBox.swiper-container', {
				speed: 800,
				nextButton: '.imgShowBox .btns.btnR',
				prevButton: '.imgShowBox .btns.btnL',
				onSlideChangeStart: function(swiper) {
					$(".ovnum").text(swiper2.activeIndex + 1)
				}

			});
		}
		$(".serviceDemo .item").click(function() {
			var index = $(this).parent().index();
			swiper2.slideTo(index, 20)
			$(".ovnum").text(index + 1)
			$(".imgShowBox").addClass("open")
		})
		$(".overlayClose").click(function() {
			$(".imgShowBox").removeClass("open")
		})
		if(location.hash == "#0") {
			console.log("123")
		} else {
			console.log("321")
			$("html,body").animate({
				scrollTop: _h + 10
			}, 1000);
		}

	},
	videoPage: function() {
		$(".vwrap-video .close").click(function() {
			$(".vwrap-video").fadeOut()
			$(".vwrap-video #videobox_media video").remove()

		})
		$(".videos-body .videoList dd").click(function() {
			var i = $(this).index();
			var video = $(this).find("a").attr("data-video")
			console.log(video)
			$(".vwrap-video").fadeIn()
			$(".vwrap-video #videobox_media").append("<video autoplay='' width='' loop='' id='video_Play' src='" + video + "' controls>您的浏览器不支持 video 标签。</video>")
		})
		

	},
	joinPage: function() {
		if((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
			var join_h = $(".join-body .box1 .contBox .rightBox ul li").height();
			$(".join-body .box1 .contBox .rightBox ul").height(join_h)
		} else {
			var mySwiper = new Swiper('.swiper-container', {
				speed: 500,
				swipeHandler: '.swipe-handler',
			});
		}

		$(".join-body .box1 .iconBox ul li").click(function() {
			$(this).addClass("active").siblings().removeClass("active");
			mySwiper.slideTo($(this).index());
			$(".join-body .box1 .contBox .leftBox .list li").eq($(this).index()).fadeIn().siblings().hide()
		})

		$(".join-body .formBox .linBox span").click(function() {
			var $check = $(this).children("input");
			var check = $check[0];
			check.checked = true;
		})
		if(location.hash == "#0") {
			console.log("123")
		} else {
			console.log("321")
			$("html,body").animate({
				scrollTop: _h + 10
			}, 1000);
		}

	},
	productPage: function() {
		if(location.hash == "#0") {
			console.log("123")
		} else {
			console.log("321")
			$("html,body").animate({
				scrollTop: _h - 100
			}, 1000);
		}
	}
}
$(function() {
	jsFun = $("#JS").attr('page');
	var ofTop = $(".logo").offset().top;

	Starting_F();
	qywy.init();
	//menu.init();
	//	$(window).resize(function() {
	//		Starting_F();
	//	})
})

function Starting_F() {
	//点击跳转固定页面
	_h = $(window).height();
	_w = $(window).width();

	$(".in-banner").height($(window).height())
	if(_w < 768) {
		$(".in-banner").height($(window).height() / 2)
	}
	var maop = 0
	$(".allScreen").css("height", _h);
	$(".menu").on("click", ".menu-handler", function() {
		if($("body").is(".open")) {
			$(".menu-handler").removeClass("active");
			setTimeout(function() {
				$("body").removeClass("open")
			}, 200)

			return false;
		} else {
			$(".menu-handler").addClass("active")
			setTimeout(function() {
				$("body").addClass("open")
			}, 200)
			return false;
		}
	})
	$(".menuclose").click(function() {
		$(".menu-handler").click();
	})

	$(".navMobile dd p a").click(function(event) {
		if($(this).hasClass("cur")) {
			return true;
		} else {
			$(this).addClass("cur");
			$(this).parent().siblings(".msubnav").slideDown().parent().siblings().find(".msubnav").slideUp().siblings().find("a").removeClass("cur");
			return false; //阻止链接跳转
		}

	});
	//单独导航
	var he = $(".in-banner").height()
	$(window).scroll(function() {
			if($(window).scrollTop() > $(".in-banner").height()) {
				$(".navTop").addClass("topFix")

			} else {
				$(".navTop").removeClass("topFix")

			}

		})
		//缓动

	//IEtips
	//if IE
	$(".IEtips .brn_off").click(function() {
			$(".IEtips").slideUp();
		})
		///手机nav
	$(".recruit_open .btn_off").click(function() {
		$(".recruit_open").slideUp();
		$("#navToggle").fadeIn();
	})
	$("#navToggle").click(function() {
			$(this).toggleClass("expanded")
			$("#mobileNav").toggleClass("cur")

		})
		//置顶
	$(window).scroll(function() {
		var scrollTop_num = $(window).scrollTop();
		if(scrollTop_num >= 36) {
			$("#nav").addClass("cur")
			$('.zhiding').addClass("cur")
		} else {
			$("#nav").removeClass("cur")
			$('.zhiding').removeClass("cur")
		}
	})
	$(".zhiding").click(function() {
		var scroll_offset = $(".zhidingUP").offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 600);
	})

}