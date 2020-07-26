/*

Machaca Gastón

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".

*/

function mostrar()
{
	
	var horaDelDia =txtIdHora.value; // Save - horaDelDia
	
	horaDelDia = parseInt(horaDelDia); // Paso a entero la variable horaDelDia.

	var mensaje; // Save - Mensaje.

	switch(horaDelDia) // Seleccion de hora.
	{
		case 0: mensaje = "Es de noche"; // Si son las 0. Guardo Mensaje.
				break;
		case 1: mensaje = "Es de noche"; // Si son las 1. Guardo Mensaje.
				break;
		case 2: mensaje = "Es de noche"; // Si son las 2. Guardo Mensaje.
				break;
		case 3: mensaje = "Es de noche"; // Si son las 3. Guardo Mensaje.
				break;
		case 4: mensaje = "Es de noche"; // Si son las 4. Guardo Mensaje.
				break;
		case 5: mensaje = "Es de noche"; // Si son las 5. Guardo Mensaje.
				break;
		case 6: mensaje = "Es de noche"; // Si son las 6. Guardo Mensaje.
				break;
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
		case 12: mensaje = "Es de tarde."; // Si son las 12. Guardo Mensaje.
				 break;
		case 13: mensaje = "Es de tarde."; // Si son las 13. Guardo Mensaje.
				 break;
		case 14: mensaje = "Es de tarde."; // Si son las 14. Guardo Mensaje.
				 break;
		case 15: mensaje = "Es de tarde."; // Si son las 15. Guardo Mensaje.
				 break;
		case 16: mensaje = "Es de tarde."; // Si son las 16. Guardo Mensaje.
				 break;
		case 17: mensaje = "Es de tarde."; // Si son las 17. Guardo Mensaje.
				 break;
		case 18: mensaje = "Es de tarde."; // Si son las 18. Guardo Mensaje.
				 break;
		case 19: mensaje = "Es de tarde."; // Si son las 19. Guardo Mensaje.
				 break;
		case 20: mensaje = "Es de noche"; // Si son las 20. Guardo Mensaje.
				 break;
		case 21: mensaje = "Es de noche"; // Si son las 21. Guardo Mensaje.
				 break;
		case 22: mensaje = "Es de noche"; // Si son las 22. Guardo Mensaje.
				 break;
		case 23: mensaje = "Es de noche"; // Si son las 23. Guardo Mensaje.
				 break;
		case 24: mensaje = "Es de noche"; // Si son las 24. Guardo Mensaje.
				 break;
		default: mensaje = "La hora no existe."; // No existe una hora fuera de las 0 y 24. Guardo Mensaje.		
	}

	alert(mensaje); //Muestro mensaje por pantalla.

}//FIN DE LA FUNCIÓN