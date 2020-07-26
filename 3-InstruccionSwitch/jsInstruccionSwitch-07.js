/*
Machaca Gastón

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value; // Save - destinoIngresado.
	
	var mensaje; // Save - Mensaje.

	switch(destinoIngresado) // Seleccion del destino.
	{
		case "Bariloche": mensaje = "Se encuentra al oeste de Argentina."; // Punto Cardinal - Bariloche. Guardo mensaje.
						  break;
		case "Mar del plata": mensaje = "Se encuentra al este de Argentina"; // Punto Cardinal - Mar del Plata. Guardo mensaje.
							  break;
		case "Cataratas": mensaje = "Se encuentra al norte de Argentina"; // Punto Cardinal - Cataratas. Guardo mensaje.
						  break;
		case "Ushuaia": mensaje = "Se encuentra al sur de Argentina"; // Punto Cardinal - Ushuaia. Guardo mensaje.
						break;
	}

	alert(mensaje); // Muestro mensaje por pantalla.

}//FIN DE LA FUNCIÓN