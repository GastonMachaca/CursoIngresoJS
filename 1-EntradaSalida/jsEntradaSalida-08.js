/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

var Divisor;
var Dividendo;
var DivisorEntero;
var DividendoEntero;
var NumeroAuxiliar;
var Resto;
var Cociente;
var CocienteEntero;


function SacarResto()
{
	Dividendo=txtIdNumeroDividendo.value;
	Divisor=txtIdNumeroDivisor.value;

	DividendoEntero=parseInt(Dividendo);
	DivisorEntero=parseInt(Divisor);

	Cociente=DividendoEntero/DivisorEntero;

	CocienteEntero=parseInt(Cociente)

	NumeroAuxiliar=CocienteEntero*DivisorEntero;

	Resto=DividendoEntero-NumeroAuxiliar;

	alert("El resto de la division entre "+DividendoEntero+ " y "+DivisorEntero+ " es " +Resto);
}
