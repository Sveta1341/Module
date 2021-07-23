$(document).ready(function () {
	$('.img_block').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	$('.menu_burger').click(function (event) {
		$('.menu_burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});