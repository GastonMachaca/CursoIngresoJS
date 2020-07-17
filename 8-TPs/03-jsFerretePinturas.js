/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var TemperaturaIngresada;
    var Conversion;
    var ConversionCentigrados;

    TemperaturaIngresada = txtIdTemperatura.value;

    Conversion = TemperaturaIngresada - 32;

    ConversionCentigrados = Conversion * 0.55;


    alert("La Temperatura en Fahrenheit " +TemperaturaIngresada+ "°F en Centigrados pasan a ser " +ConversionCentigrados.toFixed(2)+ "°C");
    
}

function CentigradosFahrenheit () 
{
    var TemperaturaIngresada;
    var Conversion;
    var ConversionFahrenheit;

    TemperaturaIngresada = txtIdTemperatura.value;

    ConversionFahrenheit = TemperaturaIngresada * 1.8;

    Conversion = ConversionFahrenheit + 32;

    alert("La Temperatura en Centigrados " +TemperaturaIngresada+ "°C a Fahrenheit pasan a ser " +ConversionFahrenheit+ "°F.");
}
