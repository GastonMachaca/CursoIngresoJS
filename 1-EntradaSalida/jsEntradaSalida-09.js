/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var SueldoIngresado;
	var Resultado;
	var Aumento;
	var AumentoNeto;

	SueldoIngresado=txtIdSueldo.value;

	SueldoIngresadoNeto=parseInt(SueldoIngresado);

	//PRIMER METODO
	/*
	Aumento=SueldoIngresadoNeto*0.1;

	AumentoNeto=parseInt(Aumento);

	Resultado=SueldoIngresadoNeto+AumentoNeto;
	*/

	//SEGUNDO METODO
	
	Resultado=SueldoIngresadoNeto* 1.1;

	txtIdResultado.value=Resultado;

}