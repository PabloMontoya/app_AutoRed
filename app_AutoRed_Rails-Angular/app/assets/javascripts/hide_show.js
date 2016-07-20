$(document).on('ready', function(){

	$('#search').on('click',function(){

		if ($.trim($("#marca_combo").val()) === "" || $.trim($("#modelo_combo").val()) === "" || $.trim($("#anhio_combo").val()) === "") {
	        alert('Llena todos los campos marcados por *');
	        return false;
	    } else{ 
			var elemento = $('.contenido');
			var elemento2 = $('#filtros');
			var elemento3 = $('#loading');
			var elemento4 = $('#contenedor_select_id');
			elemento.css('display', 'block'),
			elemento2.css('width','19%'),
			elemento3.css('display', 'block'),
			elemento4.css('display', 'block')
			setTimeout(function(){ $('#loading').css('display','none'); },1000)}
	});
		

	$('#clear').on('click',function(){
		var elemento = $('.contenido');
		var elemento2 = $('#filtros');
		var elemento4 = $('#contenedor_select_id');
		elemento.css('display', 'none'),
		elemento2.css('width','90%'),
		elemento4.css('display', 'none');
	});

	$('#form').keypress(function() {
		var elemento1 = $('.contenido').css('display');
		var elemento2 = $('#loading');

		if (elemento1 === 'block') {
			elemento2.css('display', 'block')
			setTimeout(function(){ elemento2.css('display','none'); },1000)
		} 
	})

});