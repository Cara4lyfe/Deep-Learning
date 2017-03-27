(function($) {

	$("#sonic1").hide();
	$("#pic1").mouseover(function(){
		$("#sonic1").fadeIn();
	});
	$("#pic1").mouseout(function(){
		$("#sonic1").fadeOut();
	});
	
})(jQuery);