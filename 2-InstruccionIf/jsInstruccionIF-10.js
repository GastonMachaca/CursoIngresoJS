/*

Machaca Fabian Gaston

Al presionar el Boton, 
asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBO" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
				
*/

function mostrar()
{

	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom; // Se guarda la eleccion de un numero aleatorio.
	var mensaje;

	numeroRandom = Math.floor(Math.random()*11); //Numero aleatorio entre 0 y 10.

	/* 1ra Resolucion

	if(numeroRandom == 9 || numeroRandom == 10) // Si el numero es igual a 9 o 10, pasa al siguiente punto.
	{
		alert("El alumno saco un "+numeroRandom+ " por lo tanto su nota es Excelente"); //Muestro mensaje por pantalla.
	}
	else
	{
		if(numeroRandom > 3 && numeroRandom < 9) // Si el numero es mayor o igual a 4 y menor a 9
		{
			alert("El alumno saco un "+numeroRandom+ " por lo tanto aprobó"); //Muestro mensaje por pantalla.
		}
		else
		{
			if(numeroRandom < 4) // Si el numero es menor a 4 (no incluyendo el 4).
			{
				alert("Sacaste un "+numeroRandom+ " \n Vamos!!, la proxima se puede! "); //Muestro Mensaje por pantalla.
			}
		}
	}
	*/

	// 2da Resolucion

	if(numeroRandom < 11)
	{
		if(numeroRandom > 8)
		{
			mensaje = "El alumno saco una nota Excelente"; 
		}
		else
		{
			if(numeroRandom > 3)
			{
				if(numeroRandom < 9)
				{
					mensaje = "El alumno aprobó";
				}
			}
			else
			{
				if(numeroRandom < 4)
				{
					mensaje = "Vamos!!, la proxima se puede! ";
				}
			}
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN