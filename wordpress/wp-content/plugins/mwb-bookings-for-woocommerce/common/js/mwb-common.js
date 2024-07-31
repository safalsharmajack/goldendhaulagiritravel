(function( $ ) {
	'use strict';

	/**
	 * All of the code for your common JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
    $(document).ready(function(){
		if ( $('.mbfw_time_picker').length > 0 ) {
			$('.mbfw_time_picker').timepicker();
		}
        $(document).on('change', 'form.cart :input', function(){
            var form_data = new FormData( $('form.cart')[0] );
			if ( $('.mwb_mbfw_booking_product_id').val() ) {
				retrieve_booking_total_ajax( form_data );
			}
		});
		

		$(document).on('focusout blur keydown paste focus mousedown mouseover mouseout', '.mwb-mbfw-cart-page-data', function () {
			
			
			var form_data = new FormData( $('form.cart')[0] );
			if ( $('.mwb_mbfw_booking_product_id').val() ) {
				retrieve_booking_total_ajax( form_data );
			}
		});

		$('#mwb-mbfw-booking-from-time, #mwb-mbfw-booking-to-time').on('keydown paste focus mousedown',function(e){
			
			e.preventDefault();
			

		});
		$('.mwb_mbfw_time_date_picker_frontend').datetimepicker({
			format  : 'd-m-Y H:00',
			minDate : mwb_mbfw_common_obj.minDate,
		});
		$('.mwb_mbfw_date_picker_frontend').datetimepicker({
			format     : 'd-m-Y',
			timepicker : false,
			minDate    : mwb_mbfw_common_obj.minDate,
		});
		
		
		$('#mwb_mbfw_choose_holiday').datepicker({
			dateFormat : 'dd-mm-yy',
			minDate: mwb_mbfw_common_obj.minDate,
			
		});
		$('.mwb_mbfw_time_picker_frontend').datetimepicker({
			format     : 'H:i',
			datepicker : false,
		});
		$('#mwb-mbfw-booking-from-time').on('change', function(){
			;
			var from_time = $(this).val();
			var to_time   = $('#mwb-mbfw-booking-to-time').val();	
			if ( from_time && to_time ) {
				if ( moment( from_time, 'DD-MM-YYYY HH:mm' ) >= moment( to_time, 'DD-MM-YYYY HH:mm' ) ) {
					$(this).val('');
				
					if (jQuery(jQuery('.flatpickr-calendar')).length > 1 ) {
						if (jQuery(jQuery('.flatpickr-calendar')[0]).hasClass('open')){
							jQuery(jQuery('.flatpickr-calendar')[0]).removeClass('open');
							jQuery(jQuery('.flatpickr-calendar')[0]).addClass('close');
							$(this).val('');
							alert( mwb_mbfw_public_obj.wrong_order_date_2 );
						}
					}
					
				}
			}
		});
		$('#mwb-mbfw-booking-to-time').on('change', function(){
			;
			var from_time = $('#mwb-mbfw-booking-from-time').val();
			var to_time   = $(this).val();
			if ( from_time && to_time ) {
				if ( moment( from_time, 'DD-MM-YYYY HH:mm' ) >= moment( to_time, 'DD-MM-YYYY HH:mm' ) ) {
					$('#mwb-mbfw-booking-to-time').val('');
					console.log('dsssd');
					if (jQuery(jQuery('.flatpickr-calendar')).length > 1 ) {
						if (jQuery(jQuery('.flatpickr-calendar')[1]).hasClass('open')){
							jQuery(jQuery('.flatpickr-calendar')[1]).removeClass('open');
							jQuery(jQuery('.flatpickr-calendar')[1]).addClass('close');
							$(this).val('');
							alert( mwb_mbfw_public_obj.wrong_order_date_1 );
						}
					}
					
					
				}
			}
		});
		$('#mwb-mbfw-booking-to-time').on('click', function(){
			if (jQuery(jQuery('.flatpickr-calendar')).length > 1 ) {
				if (jQuery(jQuery('.flatpickr-calendar')[1]).hasClass('close')){
					jQuery(jQuery('.flatpickr-calendar')[1]).removeClass('close');
					jQuery(jQuery('.flatpickr-calendar')[1]).addClass('open')
				}
			}
		});
		$('#mwb-mbfw-booking-from-time').on('click', function(){
			;
			if (jQuery(jQuery('.flatpickr-calendar')).length > 1 ) {
				if (jQuery(jQuery('.flatpickr-calendar')[0]).hasClass('close')){
					jQuery(jQuery('.flatpickr-calendar')[0]).removeClass('close');
					jQuery(jQuery('.flatpickr-calendar')[0]).addClass('open')
				}
			}
		});
    });

	// cancel order from my account page.
	jQuery(document).on('click', '#wps_bfw_cancel_order', function(){
		if (confirm(mwb_mbfw_common_obj.cancel_booking_order) == true) {
			
			var product_id = jQuery(this).attr('data-product');
			var order_id   = jQuery(this).attr('data-order');
			var data       = {
				'action'     : 'bfw_cancelled_booked_order',
				'nonce'      : mwb_mbfw_common_obj.nonce,
				'product_id' : product_id,
				'order_id'   : order_id,
			}
			
			jQuery.ajax({
				url     : mwb_mbfw_common_obj.ajax_url,
				method  : 'POST',
				data    : data,
				success : function( response ) {
					window.location.reload();
				}
			});
		}

		
	});
})( jQuery );

function retrieve_booking_total_ajax( form_data ) {
	
	var condition = true;
	data_from = jQuery('#mwb-mbfw-booking-from-time').val();
	data_to =jQuery('#mwb-mbfw-booking-to-time').val();
	if ( data_from != undefined && data_to != undefined ){	
		var datesBetween = getDatesBetween(data_from, data_to);
		for (let index = 0; index < datesBetween.length; index++) {
			var originalDate = datesBetween[index];
			var upcoming_holiday = mwb_mbfw_public_obj.upcoming_holiday[0];
			var formattedDate = convertDateFormat(originalDate);
			
			if (upcoming_holiday.includes(formattedDate)) {
				condition = false;
			}
		}
	}
	if ( $('.mwb-mbfw-total-area').length > 0 && condition == true ) {

		form_data.append('action', 'mbfw_retrieve_booking_total_single_page');
		form_data.append('nonce', mwb_mbfw_common_obj.nonce);
		jQuery.ajax({
			url         : mwb_mbfw_common_obj.ajax_url,
			method      : 'post',
			data        : form_data,
			processData : false,
			contentType : false,
			success     : function( msg ) {
			
				var str1 = msg;
			
				var str2 = "rror establishing a database connectio";
				if(str1.indexOf(str2) != -1){
					msg = '';
				}
				if (msg == 'fail'){
					if ( $('#alert_msg_client').val() == undefined){
						jQuery('.mwb-mbfw-cart-page-data').append('<span id="alert_msg_client" style="color:red">'+mwb_mbfw_common_obj.holiday_alert+'</span>')		
						$('#mwb-mbfw-booking-to-time').val('');
						return;
					}
				} else{
					setTimeout(function(){ 
						$('#alert_msg_client').remove();
					 }, 8000);
					
				}
				$('.mwb-mbfw-total-area').html(msg);

			}
		});
	} else{
		
		if ( condition == false ){
			if ( $('#alert_msg_client').val() == undefined){
				jQuery('.mwb-mbfw-cart-page-data').append('<span id="alert_msg_client" style="color:red">'+mwb_mbfw_common_obj.holiday_alert+'</span>')		
				$('#mwb-mbfw-booking-to-time').val('');
			}
		}
	}
}


function getDatesBetween(startDate, endDate) {
    var dates = [];
    var currentDate = parseDate(startDate);
    endDate = parseDate(endDate);
    
    while (currentDate <= endDate) {
        dates.push(formatDate(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return dates;
}

function parseDate(dateString) {
    var parts = dateString.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return pad(day) + "-" + pad(month) + "-" + year;
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}

function convertDateFormat(dateString) {
    var parts = dateString.split("-");
    return parts[2] + "-" + parts[1] + "-" + parts[0];
}