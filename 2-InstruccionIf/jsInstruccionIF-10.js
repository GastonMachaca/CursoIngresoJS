function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom; // Se guarda la eleccion de un numero aleatorio.

	numeroRandom = Math.floor(Math.random()*11); //Numero aleatorio entre 0 y 10.

	if(numeroRandom == 9 || numeroRandom == 10) // Si el numero es igual a 9 o 10, pasa al siguiente punto.
	{
		alert("El alumno saco un "+numeroRandom+ " por lo tanto su nota es Excelente"); //Muestro mensaje por pantalla.
	}
	else
	{
		if(numeroRandom >= 4 && numeroRandom < 9) // Si el numero es mayor o igual a 4 y menor a 9
		{
			alert("El alumno saco un "+numeroRandom+ " por lo tanto aprobó") //Muestro mensaje por pantalla.
		}
		else
		{
			if(numeroRandom < 4) // Si el numero es menor a 4 (no incluyendo el 4).
			{
				alert("Sacaste un "+numeroRandom+ " \n Vamos!!, la proxima se puede! "); //Muestro Mensaje por pantalla.
			}
		}
	}




}//FIN DE LA FUNCIÓN