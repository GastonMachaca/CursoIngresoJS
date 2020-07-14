/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

var SueldoIngresado;
var Resultado;
var Aumento;
var AumentoNeto;

function mostrarAumento()
{
	SueldoIngresado=txtIdSueldo.value;

	SueldoIngresadoNeto=parseInt(SueldoIngresado);

	Aumento=SueldoIngresadoNeto*0.1;

	AumentoNeto=parseInt(Aumento);

	Resultado=SueldoIngresadoNeto+AumentoNeto;

	txtIdResultado.value=Resultado;

}
