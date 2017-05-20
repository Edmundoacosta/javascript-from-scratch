function onReady() {

	const alumno = {
		full_name: "Edmundo Acosta",
		ep1: 10,
		ep2: 19,
	}

	function promFinal(alumno) {
		return (alumno.ep1 + alumno.ep2)/2
	}

	promFinal(alumno);
};



$(document).ready(onReady);


	





