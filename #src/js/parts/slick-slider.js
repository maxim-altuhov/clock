 import 'slick-carousel';

 function sliderSlick() {
	
	$('.slider_main').slick({
		centerMode: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		prevArrow: '<img src="icons/arrows_left.svg" class="prev">',
		nextArrow: '<img src="icons/arrows_right.svg" class="next">',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		},
		]
	});

}

export default sliderSlick;