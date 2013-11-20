
$(document).ready(function() {
	$("#navegacion a").off('click').on('click', function (event){
		event.preventDefault();
		url = this.href;
		$(".navSelected").removeClass("navSelected");
		$(this).addClass("navSelected");
		$("#textIncluido").fadeOut(400, function(){
			$("#textIncluido").load(url);
			$("#textIncluido").fadeIn(400);
		});
	});
});



 