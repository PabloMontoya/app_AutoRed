$(document).ready(function(){
	

        $(window).on("scroll", function() {

        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();

            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                // when scroll to bottom of the page
                $('#filtros').animate({marginTop: '-115px'}, 200)}
            else 
                $('#filtros').css("margin-top", "-80px");
    });

});