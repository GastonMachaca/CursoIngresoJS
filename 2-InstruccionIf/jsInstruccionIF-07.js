/*
Machaca Fabian Gaston

Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' 


*/
function mostrar()
{
	
	var edad; //Save - Edad Ingresada.
	var estadocivilIngresado; // Save - Estado Civil Ingresado.

	edad = txtIdEdad.value; // Adquiero el valor de la edad ingresada por el usuario.

	edad = parseInt(edad); // Paso a un numero entero la edad ingresada.

	estadocivilIngresado = document.getElementById("estadoCivil").value; // Tomo el valor del estadocivil seleccionado.


	/* 1ra Resolucion 

	if(edad < 18 && estadocivil != "Soltero" ) // Pregunto si la edad ingresada es menor a 17 y si su estado civil es distinto de soltero.
	{
		alert("Es muy pequeño para no ser soltero"); //Muestro mensaje por pantalla.
	}
	*/

	/* 2da Resolucion */
	
	if(edad < 18) // Pregunto si la edad ingresada es menor a 18.
	{
		if(estadocivilIngresado != "Soltero") // Pregunto por el estadocivil y si es distinto a soltero.
		{
			alert("Es muy pequeño para no ser soltero"); //Muestro mensaje por pantalla.
		}
	}



}//FIN DE LA FUNCIÓN