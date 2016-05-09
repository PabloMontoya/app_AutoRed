$(document).ready(function(){

	$('#select_marca').on('click',function(e){
		check(e);
	})

	function check(e){
		var variable = $('#select_marca').val()
		console.log(variable)
	}

});