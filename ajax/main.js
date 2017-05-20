function onReady() {
	$('form').on('submit', function(e) { 
		var code = $('#code').val();
		$.post(
			"http://www.json-generator.com/api/json/get/cnffPOarci", // Llamada
			{
				"code": code,
			},
			function(response) {
				$(".message").html(response.result);
			}
		);
		e.preventDefault();
	});
};



$(document).ready(onReady);


	





