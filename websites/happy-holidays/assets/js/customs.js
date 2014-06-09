$(document).ready(function() {
	/* Auto rotate and speed up the carousel */
	$('.carousel').carousel({
		interval: 5000
	})
	
	/* Hover Effect for IE8 */
	$('.bubbles div a div').hover(function() {
		$(this).children('span').fadeIn();
	}, function() {
		$(this).children('span').fadeOut();
	});
	
	/* Fix the need for a double click on anchors */
	/* This causes the bubble images to jerk to their locations */
	$('.bubbles div a').on('click touchend', function(e) {
		var el = $(this);
		var link = el.attr('href');
		window.location = link;
	});
	
	/* Add smooth scrolling to anchor tags */
	$(function() {
		$('.anchor a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 100);
					return false;
				}
			}
		});
	});
	
	/* For IE8 */
	$('.marketing div').last().addClass('last');
});