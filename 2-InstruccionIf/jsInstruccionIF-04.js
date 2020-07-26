/*
Machaca Fabian Gastón

Al ingresar una edad debemos informar 
si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

*/

function mostrar()
{
	var edad; // Save - Edad

	edad = txtIdEdad.value; // Adquiero la edad ingresada por el usuario.

	/* 1ra Resolucion
	
	if(edad > 12 && edad < 18) // Pregunto si la edad es mayor a 13 o menor a 18.
	{
		alert("Usted es adolescente"); // Muestro mensaje por pantalla.
	}

	*/

	/* 2da Resolucion */

	if(edad > 12) //Pregunto si la edad es mayor a 13.
	{
		if(edad < 18) // Pregunto si la edad es menor a 18.
		{
			alert("Usted es adolescente"); // Muestro mensaje por pantalla.
		}
	}

	
}//FIN DE LA FUNCIÓN