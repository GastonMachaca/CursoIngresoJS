/*

Machaca Gastón

Al seleccionar un mes informar.
- si es Febrero: " Este mes no tiene mas de 29 dias."
- si NO es Febrero: "Este mes tiene 30 o mas dias"
*/
function mostrar()
{

	var mesDelAño =txtIdMes.value; // Save - Mes del Año.
	var mensaje; // Save - Mensaje.


	switch(mesDelAño) // Seleccion de Mes
	{
		case 'Febrero': 
						mensaje ="Este mes no tiene mas de 29 dias."; // Al ser febrero. Guardo el mensaje.
						break;
		
		default : mensaje = "Este mes tiene 30 o mas dias"; // Todos los meses que no sean febrero. Guardo el mensaje.
				  break;
						
	}

	alert(mensaje); // Muestro el mensaje por pantalla.
	


}//FIN DE LA FUNCIÓN