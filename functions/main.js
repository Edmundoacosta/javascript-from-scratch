var notas = [ 20, 10, 20, 17, 02, 01, 20 ];

function student(estudiante) {
	function calcFinalNote(){
		console.log((estudiante.noteone + estudiante.notetwo ) / 2);
	}

	return calcFinalNote();
}


student({nombre: "Edmundo", apellido: "Acosta", noteone: 20, notetwo: 15});



function sumatoria(n) {
	if (n == 1) {
		return 1;
	}

	return sumatoria(n-1) + n;
}

function sumaArray(array) {
	var length = array.length;
	var lastElement = array.pop();

	if ( length == 1 ) {
		return lastElement;
	}

	return sumaArray(array) + lastElement;
}

console.log(sumaArray(notas));

console.log(sumatoria(5));



//SCOPE


function approveStudent(student) {
	var minimunNote = 13;

	if (student.note > minimunNote) {
		console.log("Felicidades, estás aprobado");
	}
}


approveStudent({ name: "Eli", lastName: "Manrique", note: 12 });

try {
	console.log(minimunNote);
} catch (e) {
	console.log("Hubo un error", e);
}


// Jquery

















