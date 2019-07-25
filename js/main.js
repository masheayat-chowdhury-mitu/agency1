(function ($) {
	"use strict";

    jQuery(document).ready(function($){		
				/* ------testimonials-slider-area ------ */
					$(".testimonials-slider-area").owlCarousel({
						loop:true,
						margin:10,
						nav:false,
						navText:['<i class="fas fa-angle-left"></i>',
					'<i class="fas fa-angle-right"></i>'],
						dots:true,
						items:3,
						autoplay:true,
						autoplayTimeout:4000,
						animateIn:true,
					});
					/* ------Add-area ------ */
					$(".slider-add-area").owlCarousel({
						loop:true,
						margin:10,
						nav:false,
						navText:['<i class="fas fa-angle-left"></i>',
					'<i class="fas fa-angle-right"></i>'],
						dots:false,
						items:5,
						autoplay:true,
						autoplayTimeout:4000,
						animateIn:true,
					});
					/* Isotope Active
						============================*/
						$(".gallery-area").imagesLoaded(function () {
							var grid = $(".grid").isotope({
								itemSelector: ".grid-item",
								percentPosition: true,
								masonry: {
									columnWidth: ".grid-item"
								}
							});

							$(".gallery-menu").on("click", "a", function () {
								var filterValue = $(this).attr("data-filter");
								grid.isotope({
									filter: filterValue
								});
							});

							/* Isotope Menu Active
							============================*/
							$(".gallery-menu a").on("click", function (event) {
								$(this)
									.siblings(".active")
									.removeClass("active");
								$(this).addClass("active");
								event.preventDefault();
							});
						});
						/* magnefic popup */
						$('.img-popup').magnificPopup({
								type: 'image',
								gallery: {
										enabled: true
									}
							});



				
    });

	

    jQuery(window).load(function(){
		// header-area-sticky
		$(window).on('scroll',function() {
			if ($(this).scrollTop() > 1){  
				$('.header-area').addClass("sticky");
			  }
			  else{
				$('.header-area').removeClass("sticky");
			  }
			}); 		
	});
}(jQuery));	