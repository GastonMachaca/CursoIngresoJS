function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

	if (edad >= 18)
	{
		alert("Sos mayor de edad");
	}
	else
	{
		if(edad >= 13 && edad <=17)
		{
			alert("Sos un adolescente");
		}
		else
		{
			if(edad< 13)
			{
				alert("Sos un niño");
			}
		}
	}

}//FIN DE LA FUNCIÓN