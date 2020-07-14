/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

var importeIngresado;
var importeNeto;
var Resultado;
var Descuento;
var DescuentoNeto;

function mostrarAumento()
{
	importeIngresado=txtIdImporte.value;

	importeNeto=parseInt(importeIngresado);

	Descuento=importeNeto*0.25;

	DescuentoNeto= parseInt(Descuento);

	Resultado=importeNeto-DescuentoNeto;

	txtIdResultado.value=Resultado;

}
