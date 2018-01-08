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