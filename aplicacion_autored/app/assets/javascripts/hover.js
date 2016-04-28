$(document).ready(function(){
	
    $(".contenido").hover(function(){
        $(this).css("border", "3.5px solid"),
        $(this).css("border-color", "rgb(0,93,255)")}, function(){
        $(this).css("border", "2px solid"),
        $(this).css("border-color", "rgb(100,100,100)");
    });

    $("#filtros").hover(function(){
        $(this).css("border", "3.5px solid rgb(0,93,255)")}, function(){
        $(this).css("border", "2px solid #111");
    });

});