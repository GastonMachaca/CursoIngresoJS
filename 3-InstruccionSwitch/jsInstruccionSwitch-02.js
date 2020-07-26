/*

Machaca Gastón

Al seleccionar un mes  informar.
- Si estamos en Invierno: "Abrigate que hace frio."
- Si aun no llego el Invierno: "Falta para el invierno."
- Si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
- ACLARACION: Tomamos a Julio y Agosto como los meses de Invierno.
			
*/
function mostrar()
{

	var mesDelAño = txtIdMes.value; //Tomo el mes


	switch(mesDelAño)
	{
		case 'Enero': alert("Falta para el invierno."); break; // Al ser enero todavia no es invierno. Muestro mensaje por pantalla.
		case 'Febrero': alert("Falta para el invierno."); break;// Al ser febrero todavia no es invierno. Muestro mensaje por pantalla.
		case 'Marzo': alert("Falta para el invierno."); break;// Al ser marzo todavia no es invierno. Muestro mensaje por pantalla.
		case 'Abril': alert("Falta para el invierno."); break; // Al ser abril todavia no es invierno. Muestro mensaje por pantalla.
		case 'Mayo': alert("Falta para el invierno."); break; // Al ser mayo todavia no es invierno. Muestro mensaje por pantalla.
		case 'Junio': alert("Abrigate que hace frio."); break; // Al ser junio estamos en invierno. Mostramos mensaje por pantalla.
		case 'Julio': alert("Abrigate que hace frio."); break; // Al ser julio estamos en invierno. Mostramos mensaje por pantalla.
		case 'Agosto': alert("Abrigate que hace frio."); break; // Al ser agosto estamos en invierno. Mostramos mensaje por pantalla.
		case 'Septiembre': alert("Ya pasamos el frio, ahora calor!!!."); break; // Ya no es invierno. Mostramos mensaje por pantalla.
		case 'Octubre': alert("Ya pasamos el frio, ahora calor!!!."); break; // Ya no es invierno. Mostramos mensaje por pantalla.
		case 'Noviembre': alert("Ya pasamos el frio, ahora calor!!!."); break; // Ya no es invierno. Mostramos mensaje por pantalla.
		case 'Diciembre': alert("Ya pasamos el frio, ahora calor!!!."); break; // Ya no es invierno. Mostramos mensaje por pantalla.

	}




}//FIN DE LA FUNCIÓN