(function($){
	$.fn.anchorScroll = function(options) {
		var defaults = {
			speed: 1100,
			fx: "jswing"
		};	
		//var version =  "1.0";
		var options = $.extend(defaults, options);
		return $(this).each(function(){
			var element = this;
			
			
			$(element).click(function (event) {	
				
				var locationHref = window.location.href;
				var elementClick = $(element).attr("href");
				
				var destination = $(elementClick).offset().left;
				
				$("html,body").animate({ scrollLeft: destination}, options.speed,  options.fx);
				
				//Stop links default events
				event.preventDefault();
				return false;
			})
		})
	}
})(jQuery);