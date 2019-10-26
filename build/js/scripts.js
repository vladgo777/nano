$(document).ready(function(){
//slider slick
  $('.slider').slick({
  	dots: true,
  	// autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	// infinite: true,
	// speed: 2000
  });
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

});
