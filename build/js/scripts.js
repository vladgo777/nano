$(document).ready(function(){
//slider slick
  $('.slider').slick({
  	dots: true,
<<<<<<< HEAD
  	autoplay: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow: $('#next'),
    prevArrow: $('#prev')
  });
//scrollto
      $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

=======
  	// autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	
  });
>>>>>>> master
//order popup
	$('.order').magnificPopup({
		items: {
          src: '#text-popup'
        },
        type:'inline'
    });

    $('.selector').click(function(event) {
	    var value = $(this).attr('id');
	    $('.input-selector').val(value);
	});

<<<<<<< HEAD

});
 $(window).on('load', function() {
   $('.imgLoad').fadeIn(2000);
   $('.preloader').delay(2500).fadeOut('slow');
  });
=======
});
>>>>>>> master
