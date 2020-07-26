/*

Machaca Gaston

Al seleccionar un mes  informar.
- si es Enero: "que comiences bien el año!!!."
- si es Marzo: "a clases!!!."
- si es Julio: "se vienen las vacaciones!!!."
- si es Diciembre: "Felices fiesta!!!."


*/

function mostrar()
{
	
	var mesDelAño =txtIdMes.value; //Tomo el mes
	
	switch(mesDelAño) // Pregunto por el mes del año
	{
		case 'Enero': alert("Que comiences bien el año!!!.");  //Si es enero muestro mensaje por pantalla.
					  break;

		case 'Marzo': alert("A clases!!!."); //Si es febrero muestro mensaje por pantalla.
					  break;
		
		case 'Julio': alert("Se vienen las vacaciones!!!."); //Si es julio muestro mensaje por pantalla.
					  break;
		
		case 'Diciembre': alert("Felices fiestas!!!."); //Si es diciembre muestro mensaje por pantalla.
						  break;

	}



}//FIN DE LA FUNCIÓN