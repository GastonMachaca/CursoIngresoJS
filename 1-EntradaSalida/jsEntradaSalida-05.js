/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	//ERRORES

	//nombre=prompt("Ingrese su nombre:","Ej:Juan");
	//edad=prompt("Ingrese su Edad:","Ej:28")

	nombre=txtIdNombre.value;
	edad=txtIdEdad.value;

	alert("Usted se llama "+nombre );
	alert("Y tiene "+edad+" Años");

	alert("Usted se llama "+nombre+" y tiene "+edad+" Años");
}