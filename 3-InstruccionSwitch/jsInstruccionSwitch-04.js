/*

Machaca Gastón

Enunciado:

Al seleccionar un mes informar.
- si tiene 28 días.
- si tiene 30 días.
- si tiene 31 días.

*/

function mostrar()
{

	var mesDelAño =txtIdMes.value; // Save - Mes del Año.

	var mensaje; // Save - mensaje.

	switch(mesDelAño)
	{
		case "Febrero": mensaje = "Tiene 28 dias"; // Es febrero. Guardo el mensaje.
						break;
		case "Abril": mensaje = "Tiene 30 dias"; // Es abril. Guardo el mensaje.
					  break;
		case "Junio": mensaje = "Tiene 30 dias"; // Es junio. Guardo el mensaje.
				      break;
		case "Septiembre": mensaje = "Tiene 30 dias"; // Es septiembre. Guardo el mensaje.
						   break; 
		case "Noviembre": mensaje = "Tiene 30 dias"; // Es noviembre. Guardo el mensaje.
						  break;

		default : mensaje = "Tienen 31 dias"; // Los meses restantes. Guardo el mensaje.
	}

alert(mensaje); //Muestro el mensaje por pantalla.


}//FIN DE LA FUNCIÓN