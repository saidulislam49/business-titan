(function ($) {
	'use script';


	var $loader = $('#preloader');
	if ($loader.length > 0) {
		$(window).on('load', function (event) {
			$('#preloader').delay(500).fadeOut(500);
		});
	}

	// Scroll Area
	var $scroll = $('.scroll-area');
	if ($scroll.length > 0) {
		$(document).ready(function () {
			$('.scroll-area').click(function () {
				$('html').animate({
					'scrollTop': 0,
				}, 700);
				return false;
			});
			$(window).on('scroll', function () {
				var a = $(window).scrollTop();
				if (a > 400) {
					$('.scroll-area').slideDown(300);
				} else {
					$('.scroll-area').slideUp(200);
				}
			});
		});
	}



	//video
	var $video = $('.technology-video a');
	if ($video.length > 0) {
		$('.technology-video a').magnificPopup({
			type: 'iframe',
		});
	}

	//mixltup
	var $mix = $('.p-projects-full');
	if ($mix.length > 0) {
		$(document).ready(function () {
			var mixer = mixitup('.p-projects-full')

			var mixer = mixitup('.p-projects-full');
			var mixer = mixitup('.p-projects-full', {
				selectors: {
					target: '.blog-item'
				},
				animation: {
					duration: 300
				}
			});

		});

	}

	// Mentors slider 
	$('.mentors').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		 
	});
	// Student Review 
	$('.student-review-wrap').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
			  }
			} 
		  ]
		 
	});

	// speciality count
	// Counter
	$(".number").each(function () {
		$(this)
			.prop("Counter", 0)
			.animate(
				{
					Counter: $(this).text(),
				},
				{
					duration: 5000,
					easing: "swing",
					step: function (now) {
						now = Number(Math.ceil(now)).toLocaleString('en');
						$(this).text(now);
					},
				}
			);
	});

	// sticky question timer
	$(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 350) {
            $(".timer-area").removeClass("sticky");
        } else{
            $(".timer-area").addClass("sticky");
        }
    });


}(jQuery));
 

