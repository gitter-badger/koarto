(function($){ 
	$.fn.scrollMe = function(){
		return this.each(function(){
            $("a", this).click(function(){
	            var top = $($(this).attr("href")).offset().top;
                $("html, body").stop(true).animate({ scrollTop: top+'px' }, 500);
                return false;
            });
		});
	}

    $(document).ready(function(){
    	$("nav").scrollMe();
    	$(".copyright").scrollMe();
    });

})(jQuery);
