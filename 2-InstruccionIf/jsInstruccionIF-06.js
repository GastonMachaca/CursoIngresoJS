/*

Machaca Fabian Gastón

Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años).
				

*/


function mostrar()
{
	var edad; // Save - Edad

	edad = txtIdEdad.value; // Adquiero el valor de la edad ingresada por el usuario.

	edad = parseInt(edad); // Paso a un numero entero la edad ingresada.

	/* 1ra Resolucion

	if (edad > 17) //Pregunto si es mayor a 18 (mayor de edad).
	{
		alert("Sos mayor de edad"); //Muestro mensaje por pantalla.
	}
	else
	{
		if(edad > 12 && edad < 18) //Pregunto si es mayor a 13 y menor a 17.
		{
			alert("Sos un adolescente"); //Muestro mensaje por pantalla.
		}
		else
		{
			if(edad< 13) //Pregunto si es menor a 12.
			{
				alert("Sos un niño"); //Muestro mensaje por pantalla.
			}
		}
	}
	*/


	/* 2da Resolucion 

	if(edad > 17) //Pregunto si es mayor a 18 (mayor de edad).
	{
		alert("Sos mayor de edad"); //Muestro mensaje por pantalla.
	}

	if(edad > 12) //Pregunto si es mayor a 13 (adolescente).
	{
		if(edad < 18) //Pregunto si es menor a 18.
		{
			alert("Sos un adolescente"); //Muestro mensaje por pantalla.
	
		}	
	}

	if(edad < 13) // Pregunto si es menor a 13 (Niño).
	{
		alert("Sos un niño"); //Muestro mensaje por pantalla.
	}

	*/

	/* 3ra Resolución */

	if(edad > 17) //Pregunto si es mayor a 18 (mayor de edad).
	{
		alert("Sos mayor de edad"); //Muestro mensaje por pantalla.
	}
	else
	{
		if(edad < 13) //Pregunto si es menor a 13 (Niño).
		{
			alert("Sos un niño"); //Muestro mensaje por pantalla.
		}
		else
		{
			alert("Sos un adolescente"); //Muestro mensaje por pantalla.
		}
	}

}//FIN DE LA FUNCIÓN