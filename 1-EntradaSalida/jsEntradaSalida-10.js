/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/



function mostrarAumento()
{
	var importeIngresado;
	var importeNeto;
	var Resultado;
	var Descuento;
	var DescuentoNeto;

	importeIngresado=txtIdImporte.value;

	importeNeto=parseInt(importeIngresado);

	//PRIMER METODO
	/*
	Descuento=importeNeto*0.25;

	DescuentoNeto= parseInt(Descuento);

	Resultado=importeNeto-DescuentoNeto;
	*/
	
	//SEGUNDO METODO

	Resultado=importeNeto*0.75;

	txtIdResultado.value=Resultado;

}
