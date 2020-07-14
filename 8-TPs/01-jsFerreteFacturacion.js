/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var PrecioProducto1;
    var PrecioProducto2;
    var PrecioProducto3;
    var ProductosSuma;

    PrecioProducto1 = txtIdPrecioUno.value;
    PrecioProducto2 = txtIdPrecioDos.value;
    PrecioProducto3 = txtIdPrecioTres.value;

    PrecioProducto1 = parseInt(PrecioProducto1);
    PrecioProducto2 = parseInt(PrecioProducto2);
    PrecioProducto3 = parseInt(PrecioProducto3);

    ProductosSuma= PrecioProducto1 + PrecioProducto2 + PrecioProducto3;

    alert ("El resultado de la suma de los 3 productos es: $"+ProductosSuma);

}
function Promedio () 
{
    
    var PrecioProducto1;
    var PrecioProducto2;
    var PrecioProducto3;
    var PromedioProductos;

    PrecioProducto1 = txtIdPrecioUno.value;
    PrecioProducto2 = txtIdPrecioDos.value;
    PrecioProducto3 = txtIdPrecioTres.value;

    PrecioProducto1 = parseInt(PrecioProducto1);
    PrecioProducto2 = parseInt(PrecioProducto2);
    PrecioProducto3 = parseInt(PrecioProducto3);

    PromedioProductos = (PrecioProducto1 + PrecioProducto2 + PrecioProducto3) /3;

    PromedioProductos = parseInt(PromedioProductos);

    alert("El promedio de los 3 productos es: $"+PromedioProductos)

}
function PrecioFinal () 
{
    
    var PrecioProducto1;
    var PrecioProducto2;
    var PrecioProducto3;
    var PrecioFinalProductos;
    var PreciosinIVA;


    PrecioProducto1 = txtIdPrecioUno.value;
    PrecioProducto2 = txtIdPrecioDos.value;
    PrecioProducto3 = txtIdPrecioTres.value;

    PrecioProducto1 = parseInt(PrecioProducto1);
    PrecioProducto2 = parseInt(PrecioProducto2);
    PrecioProducto3 = parseInt(PrecioProducto3);

    

    PreciosinIVA = PrecioProducto1 + PrecioProducto2 + PrecioProducto3;

    PrecioFinalProductos = PreciosinIVA * 1.21;
 

    alert("El precio final de los 3 productos es $"+PrecioFinalProductos+" con un recargo de IVA del 21% incluido")


}