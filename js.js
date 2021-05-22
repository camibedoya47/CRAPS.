var numero_dado1;
var numero_dado2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var suma_dados;
var turno  = 1;
var PUNTOS;

// Cuando la pagina carga, ejecuta la función init
window.onload = init;




function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);



	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
}