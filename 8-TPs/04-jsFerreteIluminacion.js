/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
    
    var cantidadLamparas;
    var valorLamparas;
    var ingresosbrutos;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);

    MarcaEmpresa = document.getElementById("Marca").value;

    valorLamparas = 35;

////////////////////////////////////////////////////////////////////////////////

    if(cantidadLamparas > 5) // OPCION A - Si compra 6 o mas lamparitas.
    {
        precioLamparas = (valorLamparas * cantidadLamparas) * 0.5;
        
        txtIdprecioDescuento.value = precioLamparas;

        if(precioLamparas > 120)
        {
            ingresosbrutos = ((valorLamparas * cantidadLamparas) - precioLamparas ) * 0.1;

            alert("El IIBB (impuesto de ingresos brutos) a pagar son $"+ingresosbrutos);
        } 
    }

///////////////////////////////////////////////////////////////////////////////

    if(cantidadLamparas == 5) //OPCION B - Si compra 5 lamparitas.
    {
        if(MarcaEmpresa == "ArgentinaLuz")
        {
            precioLamparas = (valorLamparas * cantidadLamparas) * 0.4;

            txtIdprecioDescuento.value = precioLamparas;


        }
        if(MarcaEmpresa != "ArgentinaLuz")
        {
            precioLamparas = (valorLamparas * cantidadLamparas) * 0.3;

            txtIdprecioDescuento.value = precioLamparas;
        }
    }
//////////////////////////////////////////////////////////////////////////////

    if(cantidadLamparas == 4) //OPCION C - Si compra 4 lamparitas.
    {
        if(MarcaEmpresa == "ArgentinaLuz")
        {
            precioLamparas = (valorLamparas * cantidadLamparas) * 0.25;

            txtIdprecioDescuento.value = precioLamparas;
        }
        if(MarcaEmpresa == "FelipeLamparas")
        {
            precioLamparas = (valorLamparas * cantidadLamparas) * 0.25;

            txtIdprecioDescuento.value = precioLamparas;
        }
        if(MarcaEmpresa != "ArgentinaLuz")
        {
            if(MarcaEmpresa != "FelipeLamparas")
            {
                precioLamparas = (valorLamparas * cantidadLamparas) * 0.2;

                txtIdprecioDescuento.value = precioLamparas;
            }
        }

    }
/////////////////////////////////////////////////////////////////////////////

    if(cantidadLamparas == 3) // Si compra 3 lamparitas.
    {
        if(MarcaEmpresa == "ArgentinaLuz")
        {
            precioLamparas = (valorLamparas * cantidadLamparas) * 0.15;

            txtIdprecioDescuento.value = precioLamparas;
        }
        if(MarcaEmpresa == "FelipeLamparas")
        {
            precioLamparas = (valorLamparas * cantidadLamparas) * 0.1;

            txtIdprecioDescuento.value = precioLamparas;
        }

        if(MarcaEmpresa != "ArgentinaLuz")
        {
            if(MarcaEmpresa != "FelipeLamparas")
            {
                precioLamparas = (valorLamparas * cantidadLamparas) * 0.05;

                txtIdprecioDescuento.value = precioLamparas;
            }
        }

    }

/////////////////////////////////////////////////////////////////////////////



}
