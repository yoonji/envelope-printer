$(document).ready(function(){
	//select something by writing $('the thing you want to select, in the same format as a css selector')

	//conserve a little processing power by just going into the DOM once, and obtaining all the values you want in these variables:
	var $return_address = $('#return_address'),
		$mailing_address = $('#mailing_address')

	$('#create').click(function(){

		var return_address = $return_address.val();

		return_address = return_address.replace(/\n/g, '<br>');

		var mailing_address = $('#mailing_address').val();
		
		mailing_address = mailing_address.replace(/\n/g, '<br>');

		// it's good to have both single and double quotes so that you can do the following kind of line where the second open quote doesn't close the first one.

		var envelope_element = '<div class="envelope">'+
									'<div class="return">'+return_address+' </div>' +
									'<div class="mailing"> '+mailing_address+' </div>' +
								' </div>';

		$('#display').append(envelope_element);


	});


});