/*

Machaca Fabian Gastón

Al ingresar una edad solo debemos informar si la persona
NO es adolescente.

*/

function mostrar()
{
	var edad; // Save - Edad

	edad = txtIdEdad.value; // Adquiero la edad ingresada por el usuario.

	/* 1ra Resolución

	if(edad <13 || edad >17)
	{
		alert("No sos un adolescente");
	}

	*/

	/* 2da Resolución */

	if(edad > 17) // Pregunto si es menor a 12.
	{
		alert("No sos adolescente"); //Muestro mensaje por pantalla.
	}
	if(edad < 13) // Pregunto si es mayor a 18.
	{
		alert("No sos adolescente"); //Muestro mensaje por pantalla.
	}



}//FIN DE LA FUNCIÓN