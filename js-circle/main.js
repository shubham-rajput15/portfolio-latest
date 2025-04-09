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

  var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // Main featured carousel
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

  // Thumbnail carousel (bottom)
  var thumbOwl = $('.thumbnail');
  thumbOwl.owlCarousel({
    items: 3,
    loop: false,
    margin: 10,
    dots: false,
    nav: true,
    smartSpeed: 800,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });

  // Click event on thumbnail
  $('.thumbnail li').each(function(slide_index){
    $(this).click(function(e) {
      owl.trigger('to.owl.carousel', [slide_index, 1500]);
      e.preventDefault();

      // Scroll thumbnail carousel to correct group
      var groupIndex = Math.floor(slide_index / 3);
      thumbOwl.trigger('to.owl.carousel', [groupIndex, 800]);
    });
  });

  // Sync thumbnails on main slider change
  owl.on('changed.owl.carousel', function(event) {
    var index = event.item.index - 2;
    if (index < 0) index = event.item.count + index;
    
    $('.thumbnail li').removeClass('active');
    $('.thumbnail li').eq(index).addClass('active');

    var groupIndex = Math.floor(index / 3);
    thumbOwl.trigger('to.owl.carousel', [groupIndex, 800]);
  });

})(jQuery);



