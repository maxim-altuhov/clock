import 'owl.carousel';

function sliderOwl() {

	// стандартная настройка слайдера

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel();
	  });

	//задаём переменные

	// const headerSlider = $('#headerSlider');
	
	// показывает кол-ва слайдов и какой сейчас слайдер

	// headerSlider.on('initialized.owl.carousel', function(event) {
	// 	$('.slider__controls-number__active').text(event.item.index + 1);
	// 	$('.slider__controls-number__total').text(event.item.count);
	// });

	// подкючение слайдера через переменную

	// headerSlider.owlCarousel({ 
	// 	items:1,
	// 	dots:false,
	// 	nav:false,
	// 	smartSpeed: 2000

	// });

	// настраиваем стрелки

	// $('#headSliderLeft').click(function() {
	// 	headerSlider.trigger('prev.owl.carousel');
	// });

	// $('#headSliderRight').click(function() {
	// 	headerSlider.trigger('next.owl.carousel');
	// });

	// меняем надписи в поле кол-во слайдов

	// headerSlider.on('changed.owl.carousel', function(event) {
	// 	$('.slider__controls-number__active').text(event.item.index + 1);
	// 	$('.slider__controls-number__total').text(event.item.count);
	// });

}

export default sliderOwl;