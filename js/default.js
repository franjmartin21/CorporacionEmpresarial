/*
var arrayOfPages = {
    index: 'textInicio.html',
    proyectos: 'textProyectos.html',
    contacto: 'textContacto.html',
    servicios: 'textServicios.html'
};

function preload(arrayOfPages) {
    $.each(arrayOfPages ,function(key, value){
        //$('#textIncluido').load(value);  
        alert(key + ': '+value);
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:



$(document).ready(function() {
	preload(arrayOfPages);

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

*/

 