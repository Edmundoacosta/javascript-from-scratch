$(function() {
	console.log( "ready! primera forma" );
});


$( document ).ready(function() {
	console.log( "ready! segunda forma!" );
});

function onReady() {
	console.log( "ready tercera forma!" );
}

$(document).ready( onReady );

$(window).on( "load", onReady );