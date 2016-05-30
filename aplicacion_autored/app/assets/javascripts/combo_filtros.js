$(document).ready(function(){

	var variable2 = 0;

	$('#select_marca').on('click',function(e){
		check(e);
	})

	function check(e){
		var variable = $('#select_marca').val()

		if (variable != variable2) {
			console.log(variable)
			variable2 = $('#select_marca').val()

			$.ajax({
				url: 'index.html.erb',
				type: 'POST',
				data: {param1: 'variable'},
				async: true
			})
		}
	}

});