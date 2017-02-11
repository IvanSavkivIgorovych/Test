jQuery(document).ready(function() {

// BEGIN of script to initSliderThumbinal
	function initSliderThumbinal() {
		$('.slider-thumbinal').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			adaptiveHeight: true,
			autoplay: false,
			autoplaySpeed: 3000,
			fade: false,
			pauseOnHover: false,
			speed: 450,
			// centerMode: true,
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1
			  }
			}
			]
		});
	}
	initSliderThumbinal();
// END of script to initSliderThumbinal

	$('.menu-item-img').hover(function(){
		$(this).parents('.menu-item').addClass('menu-item-hovered');
	}, function(){
		$(this).parents('.menu-item').removeClass('menu-item-hovered');
	});


// BEGIN of script to init fancybox
	$('.fancybox').fancybox({
		padding: 10,
		arrows: true,
		scrolling: 'visible',
		wrapCSS: 'fancybox-inline-content',
		helpers : {
			title : {
				type : 'inside'
			},
		},
		beforeLoad: function(current, previous) {
			console.log('Fancybox Opened');
			$('.menu-item-img-inner img').fadeTo(200, 0.0);
		},
		afterShow: function(current, previous) {
			$('.slider-thumbinal').slick('unslick');
			initSliderThumbinal();
		},
		afterClose: function(current, previous) {
			console.log('Fancybox Closed');
			$('.menu-item-img-inner img').fadeTo(200, 1);
		}
	});
	$('.fancybox-gallery').fancybox({
		padding: 10,
		arrows: true,
		scrolling: 'visible',
		wrapCSS: 'fancybox-images-gallery',
		helpers : {
			title : {
				type : 'inside'
			},
		},
		beforeLoad: function(current, previous) {
			$('.menu-item-img-inner img').fadeTo(200, 0.0);
		},
		afterClose: function(current, previous) {
			$('.menu-item-img-inner img').fadeTo(200, 1);
		}
	});
// END of script to init fancybox

	$('.btn-close-popup').click(function(){
		$('.fancybox-close').trigger('click');
	});





});

// BEGIN of script for page loaded
window.onload = function() {

// BEGIN of script for loading spinner
	$('.spinner-wr').fadeOut(900,function(){
		$(this).remove();
	});
	$('body').addClass('loaded');
// END of script for loading spinner

	setTimeout(function(){
		$('body').addClass('loaded-delay');
	}, 2000);

	// BEGIN of script for init wow.js for animate.css
		if(Modernizr.cssanimations) {
			wow = new WOW({
				mobile: false,
			});
			wow.init();
		}
	// END of script for init wow.js for animate.css

	$.fn.extend({
		animateCss: function (animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
			});
		}
	});

	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('.menu-nav-inner').one(animationEnd, function(){
		$(this).removeClass('bounceInLeft');
	});



};
// END of script for page loaded
