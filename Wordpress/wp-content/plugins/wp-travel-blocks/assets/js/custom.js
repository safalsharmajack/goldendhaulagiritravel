jQuery(document).ready(function($) {

	if ($('#sticky-trip-tab').length) {
		// Element exists in the DOM
		$(window).on('scroll', function() {
			var tabElement = $('#sticky-trip-tab'); // Replace with your tabElement's ID or selector
			var tabElementTop = tabElement.offset().top;
			var tabElementHeight = tabElement.outerHeight();
			var viewportTop = $(window).scrollTop();
			var viewportHeight = $(window).height();
			var viewportMiddle = viewportTop + (viewportHeight / 2);
			var tabElementMiddle = tabElementTop + (tabElementHeight / 2);
			
	
			if (Math.abs(viewportMiddle - tabElementMiddle) < tabElementHeight / 2) {
				tabElement.addClass( 'fixed-trip-tab' );
			} 
	
	
			var tabContentElementTop = $('#trip-tab-content').offset().top;
			var tabContentviewportBottom = $(window).scrollTop() + $(window).height();
			if (tabContentElementTop > tabContentviewportBottom) {
				tabElement.removeClass( 'fixed-trip-tab' );
			}
		});
	
	}
	
	// $('.wp-travel-itinerary-items').hide();
	$('.same-height').matchHeight();

	var getHeight = document.querySelectorAll('.same-height');
	for (var i = 0; i < getHeight.length; ++i) {

		if( getHeight[i].children[0].children[0].tagName == 'IMG' ){
			getHeight[i].children[0].children[0].style.maxHeight = getHeight[i].style.cssText.replace( "height: ", "" ).replace( ";", "" );
			getHeight[i].children[0].children[0].style.height = "100%";
			
		}
	}

    $( '.wp-travel-sticky-content').theiaStickySidebar({
        additionalMarginTop: 30
    });

	$('#wptravel-block-video-button').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		preloader: true,
	});

	$('.wptravel-block-trip-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });
	

    $('.open-all-itinerary-link').click(function (e) {
		e.preventDefault();
		var parent = '#wptravel-block-trip-outline';
		$(parent + ' .panel-title a').removeClass('collapsed').attr({ 'aria-expanded': 'true' });
		$(parent + ' .panel-collapse').addClass('collapse in').css('height', 'auto');
		$(this).hide();
		$(parent + ' .close-all-itinerary-link').show();
		$(parent + ' #tab-accordion .panel-collapse').css('height', 'auto');
	});

	// Close All accordion.
	$('.close-all-itinerary-link').click(function (e) {
		var parent = '#wptravel-block-trip-outline';
		e.preventDefault();
		$(parent + ' .panel-title a').addClass('collapsed').attr({ 'aria-expanded': 'false' });
		$(parent + ' .panel-collapse').removeClass('in').addClass('collapse');
		$(this).hide();
		$(parent + ' .open-all-itinerary-link').show();
	});

    $('.open-all-faq-link').click(function (e) {
		e.preventDefault();
		var parent = '#faq.faq';
		$(parent + ' .panel-title a').removeClass('collapsed').attr({ 'aria-expanded': 'true' });
		$(parent + ' .panel-collapse').addClass('collapse in').css('height', 'auto');
		$(this).hide();
		$(parent + ' .close-all-faq-link').show();
		$(parent + ' #tab-accordion .panel-collapse').css('height', 'auto');
	});

	// Close All accordion.
	$('.close-all-faq-link').click(function (e) {
		var parent = '#faq.faq';
		e.preventDefault();
		$(parent + ' .panel-title a').addClass('collapsed').attr({ 'aria-expanded': 'false' });
		$(parent + ' .panel-collapse').removeClass('in').addClass('collapse');
		$(this).hide();
		$(parent + ' .open-all-faq-link').show();
	});


            
	var element = document.querySelector(".wptravel-book-your-trips.wp-travel-booknow-btns");
	
	if( element !== null ){
		element.classList.add("wp-block-button__link");
	}
	
});