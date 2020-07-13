/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var numeroingresado1;
var numeroingresado2;
var numeroentero1;
var numeroentero2;
var suma;
var resta;
var multiplicacion;
var division;

function sumar()
{
	numeroingresado1=txtIdNumeroUno.value;
	numeroingresado2=txtIdNumeroDos.value;
	
	numeroentero1=parseInt(numeroingresado1);
	numeroentero2=parseInt(numeroingresado2);

	suma=numeroentero1+numeroentero2;
	alert("El resultado de la suma es: " +suma );
}

function restar()
{
	numeroingresado1=txtIdNumeroUno.value;
	numeroingresado2=txtIdNumeroDos.value;
	
	numeroentero1=parseInt(numeroingresado1);
	numeroentero2=parseInt(numeroingresado2);

	resta=numeroentero1-numeroentero2;
	alert("El resultado de la resta es: " +resta );
}

function multiplicar()
{ 
	numeroingresado1=txtIdNumeroUno.value;
	numeroingresado2=txtIdNumeroDos.value;
	
	numeroentero1=parseInt(numeroingresado1);
	numeroentero2=parseInt(numeroingresado2);

	multiplicacion=numeroentero1*numeroentero2;
	alert("El resultado de la multiplicacion es: " +multiplicacion );
}

function dividir()
{
	numeroingresado1=txtIdNumeroUno.value;
	numeroingresado2=txtIdNumeroDos.value;
	
	numeroentero1=parseInt(numeroingresado1);
	numeroentero2=parseInt(numeroingresado2);
	
	division=numeroentero1/numeroentero2;
	alert("El resultado de la division es: " +division );
}
