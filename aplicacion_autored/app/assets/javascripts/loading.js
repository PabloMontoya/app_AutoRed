$(document).on('ready', function(){

	$('#myButton').on('click',function(){

		var elemento = $('.hidden');
		elemento.css('display', 'block');
		setTimeout(function() {
		elemento.css('display', 'none');
		}, 1000);

	});

	$('#contenedor_select_marca').on('click',function(){

		var elemento = $('.hidden');
		elemento.css('display', 'block');
		setTimeout(function() {
		elemento.css('display', 'none');
		}, 1000);

	});

	$("#product_search_by_name").keypress(function(e) {

		if(e.which == 13) {
			var elemento = $('.hidden');
			elemento.css('display', 'block');
			setTimeout(function() {
			elemento.css('display', 'none');
			}, 1000);
		}	

	});


	$('#contenedor_select_anho').on('click',function(){

		var elemento = $('.hidden');
		elemento.css('display', 'block');
		setTimeout(function() {
		elemento.css('display', 'none');
		}, 1000);

	});


	$('#contenedor_select_modelo').on('click',function(){

		var elemento = $('.hidden');
		elemento.css('display', 'block');
		setTimeout(function() {
		elemento.css('display', 'none');
		}, 1000);

	});

	$('#contenedor_silder_precio').on('click',function(){

		var elemento = $('.hidden');
		elemento.css('display', 'block');
		setTimeout(function() {
		elemento.css('display', 'none');
		}, 1000);

	});
	

});