function onReady() {
	$('#sayHello').on('click', function() {
		var name = $('#person').val();
		$('#saludo').append('Bienvenido ' + name);
	});

	$('#person').on('keyup', function() {
		var personL = $(this).val().length;
		$('#contador').html('Esta palabra contiene: ' + personL);
	});

	$('#curso').on('change', function() {
		var curs = $(this).find('option:selected');
		$('#clase').html('Curso escogido: ' + curs.text());
	});
}

$(document).ready(onReady);


	





