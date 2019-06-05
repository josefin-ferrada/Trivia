var correctas=0;
var incorrectas=0;



function inicializacion(){
	document.getElementById("contenedor1").style.display="block";
	document.getElementById("contenedor2").style.display="none";
	document.getElementById("preguntaPeliculasUno").style.display="none";
	document.getElementById("preguntaPeliculasDos").style.display="none";
	document.getElementById("muestraResultados").style.display="none";
	document.getElementById("preguntaPeliculasTres").style.display="none";
	document.getElementById("preguntaSeriesUno").style.display="none";
	document.getElementById("preguntaSeriesDos").style.display="none";
	document.getElementById("preguntaSeriesTres").style.display="none";




}

function cargarNombre(){

	var nombreDado = document.getElementById("nombreDado").value;
	document.getElementById("nombrePersona").innerHTML=nombreDado;
	document.getElementById("contenedor1").style.display="none";
	document.getElementById("contenedor2").style.display="block";
}

function peliculas(){

	document.getElementById("contenedor2").style.display="none";
	document.getElementById("preguntaPeliculasUno").style.display="block";

}

function pregunta2Peliculas(){

	if (document.getElementById("p1p_correcta").checked){
		correctas++;

	}
	 else{
		incorrectas++;
	}

	document.getElementById("preguntaPeliculasUno").style.display="none";
	document.getElementById("preguntaPeliculasDos").style.display="block";


}

function pregunta3Peliculas(){

	if (document.getElementById("p2p_correcta").checked ){
		correctas++;

	}
	else{
		incorrectas++;
	}
	document.getElementById("preguntaPeliculasTres").style.display="block";
	document.getElementById("preguntaPeliculasDos").style.display="none";

}

function pantallaFinal (){
	if (document.getElementById("p3p_correcta").checked ){
		correctas++;

	}
	else{
		incorrectas++;
	}

	document.getElementById("preguntaPeliculasDos").style.display="none";
	document.getElementById("mostrarCorrectas").innerHTML=correctas;
	document.getElementById("mostrarIncorrectas").innerHTML=incorrectas;
	document.getElementById("muestraResultados").style.display="block";
	document.getElementById("preguntaPeliculasTres").style.display="none";
	correctas=0;
	incorrectas=0;
}



function series(){

	document.getElementById("preguntaSeriesUno").style.display="block";
	document.getElementById("preguntaPeliculasTres").style.display="none";
	document.getElementById("contenedor2").style.display ="none";

}

function pregunta2Series (){
	if (document.getElementById("p4p_correcta").checked ){
		correctas++;

	}
	else{
		incorrectas++;
	}
	document.getElementById("preguntaSeriesDos").style.display="block";
	document.getElementById("preguntaSeriesUno").style.display="none";
}

function pregunta3Series(){
	if (document.getElementById("p5p_correcta").checked ){
		correctas++;

	}
	else{
		incorrectas++;
	}

	document.getElementById("preguntaSeriesTres").style.display="block";
	document.getElementById("preguntaSeriesDos").style.display="none";

}





function pantallaFinalSeries (){
	if (document.getElementById("p6p_correcta").checked ){
		correctas++;

	}
	else{
		incorrectas++;
	}
	document.getElementById("preguntaSeriesTres").style.display="none";
	document.getElementById("muestraResultados").style.display="block";
	document.getElementById("mostrarCorrectas").innerHTML=correctas;
	document.getElementById("mostrarIncorrectas").innerHTML=incorrectas;
   correcta=0;
   incorrecta=0;
}

function volverAjugar(){
	 
  
  document.getElementById("contenedor1").style.display="none";
	document.getElementById("contenedor2").style.display="block";
	document.getElementById("preguntaPeliculasUno").style.display="none";
	document.getElementById("preguntaPeliculasDos").style.display="none";
	document.getElementById("muestraResultados").style.display="none";
	document.getElementById("preguntaPeliculasTres").style.display="none";
	document.getElementById("preguntaSeriesUno").style.display="none";
	document.getElementById("preguntaSeriesDos").style.display="none";
	document.getElementById("preguntaSeriesTres").style.display="none";

}

window.onload=inicializacion;
