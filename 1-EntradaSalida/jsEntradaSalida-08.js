/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/


function SacarResto()
{
	var Divisor;
	var Dividendo;
	var Resto;
	/*
	var DivisorEntero;
	var DividendoEntero;
	var NumeroAuxiliar;
	var Cociente;
	var CocienteEntero;
	*/

	Dividendo=txtIdNumeroDividendo.value;
	Divisor=txtIdNumeroDivisor.value;

	DividendoEntero=parseInt(Dividendo);
	DivisorEntero=parseInt(Divisor);
	
	//METODO SIN EL MODULO
	/*

	Cociente=DividendoEntero/DivisorEntero;

	CocienteEntero=parseInt(Cociente)

	NumeroAuxiliar=CocienteEntero*DivisorEntero;

	Resto=DividendoEntero-NumeroAuxiliar;
	*/

	// METODO USANDO EL MODULO (EFICAZ)

	Resto=Dividendo % Divisor;
	alert("El resto de la division entre "+Dividendo+ " y "+Divisor+ " es " +Resto);
}
