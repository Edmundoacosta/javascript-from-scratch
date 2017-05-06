// ESLint
// idiomatic javascript
// frontend labs
var isBoolean = true;
var isString = "Cadena de Texto";
var isNumber = 3322;


var isObject = {  // Objeto Literal
	name: "Edmundo",
	lastname: "Acosta",
};


var isArray = ['Edmundo', 'Bruno', 'Eli', 'Paolo'];

var isFunction = function() {
	return "Hola soy una funcion"
}

function student(estudiante) {
	function calcFinalNote(){
		console.log((estudiante.noteone + estudiante.notetwo ) / 2);
	}

	return calcFinalNote();
}


student({nombre: "Edmundo", apellido: "Acosta", noteone: 20, notetwo: 15});






console.log(isBoolean, typeof isBoolean);
console.log(isString, typeof isString);
console.log(isNumber, typeof isNumber);
console.log(isBoolean, typeof isBoolean);
console.log(isFunction, typeof isFunction);
