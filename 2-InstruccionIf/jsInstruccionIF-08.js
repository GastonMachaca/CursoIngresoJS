/*

Machaca Fabian Gaston

Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.' 

*/
function mostrar()
{
	var edad; //Save - Edad Ingresada.

	var estadocivilIngresado; // Save - Estado Civil Ingresado.

	edad = txtIdEdad.value; // Adquiero el valor de la edad ingresada por el usuario.

	edad = parseInt(edad); // Paso a un numero entero la edad ingresada.

	estadocivilIngresado = document.getElementById("estadoCivil").value; // Tomo el valor del estadocivil seleccionado. 

	/* 1ra Resolucion

	if(edad < 18 && estadocivilIngresado != "Soltero") // Pregunto si la edad ingresada es menor a 18 y si su estado civil es distinto de soltero.
	{
		alert(0);
	}
	else
	{
		if(estadocivilIngresado == "Soltero" && edad > 17) //Sino se cumplia la 1ra condicion, pregunto si es soltero y es mayor a 17.
		{
			alert("Es soltero y no es menor"); //Muestro mensaje por pantalla.
		}
	}
	*/

	/*2da Resolucion*/

	if(edad < 18) // Pregunto si la edad es menor a 18.
	{
		if(estadocivilIngresado != "Soltero") //Pregunto si el estado civil es distino a soltero.
		{
			alert(0); //No muestro nada por pantalla.
		}
	}
	else
	{
		if(estadocivilIngresado == "Soltero") // Pregunto si el estado civil es soltero.
		{
			if(edad > 17) //Pregunto si es mayor a 17
			{
				alert("Es soltero y no es menor"); //Muestro mensaje por pantalla.
			}
		}
	}



}//FIN DE LA FUNCIÓN