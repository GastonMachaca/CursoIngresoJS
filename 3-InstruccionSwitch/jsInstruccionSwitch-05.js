/*

Machaca Gastón

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".

*/
function mostrar()
{
	
	var horaDelDia =txtIdHora.value; // Save - Hora del dia.
	
	horaDelDia = parseInt(horaDelDia); // Paso a entero la variable horaDeldia. 

	var mensaje; // Save - Mensaje.

	switch(horaDelDia) // Seleccion de la hora del dia.
	{
		case 7: mensaje = "Es de mañana."; // Si son las 7. Guardo Mensaje.
				break;
		case 8: mensaje = "Es de mañana."; // Si son las 8. Guardo Mensaje.
				break;
		case 9: mensaje = "Es de mañana."; // Si son las 9. Guardo Mensaje.
				break;
		case 10: mensaje = "Es de mañana."; // Si son las 10. Guardo Mensaje.
				 break;
		case 11: mensaje = "Es de mañana."; // Si son las 11. Guardo Mensaje.
				 break;

		default: mensaje(0); //No muestro nada por mensaje.

	}
	
	alert(mensaje); //Muestro el mensaje por pantalla.
	
}//FIN DE LA FUNCIÓN