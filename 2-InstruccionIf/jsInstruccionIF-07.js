function mostrar()
{
	
	var edad;
	var estadocivil;

	edad = txtIdEdad.value;

	estadocivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadocivil != "Soltero" )
	{
		alert("Es muy pequeño para no ser soltero");
	}


}//FIN DE LA FUNCIÓN