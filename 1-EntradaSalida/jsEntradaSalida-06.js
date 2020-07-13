/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroingresado1;
	var numeroingresado2;
	var numeroentero1;
	var numeroentero2;
	var suma;

	numeroingresado1=txtIdNumeroUno.value;
	numeroingresado2=txtIdNumeroDos.value;

	numeroentero1=parseInt(numeroingresado1);
	numeroentero2=parseInt(numeroingresado2);

	suma= numeroentero1+numeroentero2;

	alert("La suma entre "+numeroentero1+ " y "+numeroentero2+" es igual a "+suma);

}

