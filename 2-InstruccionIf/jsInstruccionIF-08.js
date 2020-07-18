function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

	estadocivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadocivil != "Soltero")
	{}
	else
	{
		if(estadocivil == "Soltero" && edad > 18)
		{
			alert("Es soltero y no es menor");
		}
	}

}//FIN DE LA FUNCIÓN