// (function($) {

// 	"use strict";

// 	var fullHeight = function() {

// 		$('.js-fullheight').css('height', $(window).height());
// 		$(window).resize(function(){
// 			$('.js-fullheight').css('height', $(window).height());
// 		});

// 	};
// 	fullHeight();

// 	var owl = $('.featured-carousel');

//   $('.featured-carousel').owlCarousel({
//   		animateOut: 'fadeOut',
//       center: false,
//       items: 1,
//       loop: true,
//       stagePadding: 0,
//       margin: 0,
//       smartSpeed: 1500,
//       autoplay: false,
//       dots: false,
//       nav: false,
//       navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
//   });

//   $('.thumbnail li').each(function(slide_index){
//       $(this).click(function(e) {
//           owl.trigger('to.owl.carousel',[slide_index,1500]);
//           e.preventDefault();
//       })
//   })

//   owl.on('changed.owl.carousel', function(event) {
//       $('.thumbnail li').removeClass('active');
//       $('.thumbnail li').eq(event.item.index - 2).addClass('active');
//   })

// })(jQuery);



(function ($) {
    "use strict";

    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    };

    fullHeight();

    var owl = $('.featured-carousel');

    $('.featured-carousel').owlCarousel({
        animateOut: 'fadeOut',
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1500,
        autoplay: false,
        dots: false,
        nav: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    $('.thumbnail li').each(function (slide_index) {
        $(this).click(function (e) {
            owl.trigger('to.owl.carousel', [slide_index, 1500]);
            e.preventDefault();
        });
    });

    owl.on('changed.owl.carousel', function (event) {
        $('.thumbnail li').removeClass('active');
        
        // Set active thumbnail for the current slide
        if (event.item.index - 2 >= 0) {
            $('.thumbnail li').eq(event.item.index - 2).addClass('active');
        } else {
            $('.thumbnail li').eq(0).addClass('active'); // If index is less than 2, set 1st as active
        }
    });

})(jQuery);
