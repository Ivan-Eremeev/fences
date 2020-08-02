//= ../../bower_components/jquery/dist/jquery.js
//= jquery.fancybox.min.js
//= owl.carousel.js
$(document).ready(function () {
	// Mobile Menu
	var menuBtn = $('#menu-btn');
	var menuHide = $('#menu-hide');
	var hamburger = $('.hamburger');
	var time = 300;
	menuBtn.click(function() {
		if (menuHide.css('display') == 'none') {
			menuHide.slideDown(time, function() {
				menuHide.css('display','block');
			});
		}
		else {
			menuHide.slideUp(time, function() {
				menuHide.css('display','none')
			});
		}
	});
	hamburger.click(function() {
		if (hamburger.hasClass('is-active')) {
			hamburger.removeClass('is-active');
		}
		else {
			hamburger.addClass('is-active');
		}
	});
	$(document).mouseup(function (e){
		var div = $("#menu-btn");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0 && $(window).width() < 1200) {
			hamburger.removeClass('is-active');
			menuHide.slideUp(time, function() {
				menuHide.css('display','none')
			});
		}
	});

	// Overlay
	var bigOver = $('.last-job_big'),
		smallOver = $('.small_img-cont'),
		over = $('.last-job_overlay');
	bigOver.hover(function() {
		$(this).find(over).fadeIn(250);
	}, function() {
		$(this).find(over).fadeOut(250);
	});
	smallOver.hover(function() {
		$(this).find(over).fadeIn(250);
	}, function() {
		$(this).find(over).fadeOut(250);
	});

	// Carousel
	var carousel = $('#carousel');
	carousel.owlCarousel({
		items:1,
		loop:true,
	});
	$('.customNextBtn').click(function() {
    carousel.trigger('next.owl.carousel');
	});
	$('.customPrevBtn').click(function() {
	    carousel.trigger('prev.owl.carousel');
	});
});