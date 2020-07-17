/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var LargoTerreno;
    var AnchoTerreno;
    var ExtremosAncho;
    var ExtremosLargo;
    var HilosdeAlambre;
    var Terreno;

    LargoTerreno = txtIdLargo.value;
    AnchoTerreno = txtIdAncho.value;
    
    LargoTerreno = parseInt(LargoTerreno);
    AnchoTerreno = parseInt(AnchoTerreno);

    ExtremosLargo = LargoTerreno * 2;
    ExtremosAncho = AnchoTerreno * 2;

    ExtremosLargo = parseInt (ExtremosLargo);
    ExtremosAncho = parseInt (ExtremosAncho);

    Terreno= ExtremosAncho + ExtremosLargo;

    HilosdeAlambre = Terreno * 3;

    HilosdeAlambre = parseInt(HilosdeAlambre);

    alert("La cantidad de alambre a comprar para 3 hilos son "+HilosdeAlambre+ " metros teniendo cada hilo una medida de " +Terreno+" metros.");


}
function Circulo () 
{
    var RadioTerreno;
    var PI;
    var HilosdeAlambre;

    RadioTerreno = txtIdRadio.value;

    RadioTerreno = parseInt(RadioTerreno);

    PI = Math.PI.toFixed(2);

    DiametroTerreno = 2 * RadioTerreno;

    LongitudTerreno = DiametroTerreno * PI;

    LongitudTerreno = parseInt(LongitudTerreno);

    HilosdeAlambre = LongitudTerreno * 3;

    HilosdeAlambre = parseInt(HilosdeAlambre);
    
    alert("La cantidad de alambre a comprar para 3 hilos son " +HilosdeAlambre+ " metros teniendo cada hilo una medida de "+LongitudTerreno+ " metros.");

}
function Materiales () 
{
    var LargoTerreno;
    var AnchoTerreno;

    // 1 metro x 1 metro son 2 bolsas de cemento y 3 de cal

    LargoTerreno = txtIdLargo.value;
    AnchoTerreno = txtIdAncho.value;

    LargoTerreno = parseInt(LargoTerreno);
    AnchoTerreno = parseInt(AnchoTerreno);

    Contrapiso = LargoTerreno * AnchoTerreno;

    BolsasdeCemento = (Contrapiso * 2) / 1;
    BolsasdeCal = (Contrapiso * 3) / 1;

    alert("La cantidad de bolsas de cemento para un contrapiso de " +Contrapiso+ " m2 son " +BolsasdeCemento + " ,mientras que las de cal van a ser "+BolsasdeCal+ ".");
    
    //Mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen
    


}