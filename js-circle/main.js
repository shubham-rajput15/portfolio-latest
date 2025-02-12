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

(function($) {

    "use strict";

    // Set the height for full-screen elements
    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // Initialize the main carousel (1 item visible at a time)
    var owl = $('.featured-carousel');
    owl.owlCarousel({
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

    // Initialize the thumbnail carousel (3 items visible at a time)
    var thumbnailOwl = $('.thumbnail').owlCarousel({
        items: 3,         // Show 3 thumbnails at a time
        loop: true,
        margin: 10,       // Add some margin between thumbnails
        nav: false,       // No navigation for the thumbnail slider
        autoplay: false,  // Disable autoplay for the thumbnail carousel
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });

    // Handle thumbnail clicks to navigate to corresponding main carousel item
    $('.thumbnail li').each(function(slide_index) {
        $(this).click(function(e) {
            owl.trigger('to.owl.carousel', [slide_index, 1500]);
            e.preventDefault();
        });
    });

    // Sync the thumbnail carousel with the main carousel
    owl.on('changed.owl.carousel', function(event) {
        var currentIndex = event.item.index;
        var currentPosition = Math.floor(currentIndex / 3);  // Sync thumbnail carousel with main
        thumbnailOwl.trigger('to.owl.carousel', [currentPosition]);

        // Highlight the active thumbnail
        $('.thumbnail li').removeClass('active');
        $('.thumbnail li').eq(event.item.index - 2).addClass('active');
    });

})(jQuery);
