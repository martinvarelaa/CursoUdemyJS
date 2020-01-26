'use strict'

/*Calculadora que pida dos números por pantalla, si introducimos mal un número que lo vuleva a pedir, y 
luego mostrar el resultado de la suma, la resta, la multiplicación, y la división*/
while(isNaN(numero_1) || isNaN(numero_2)){

    var numero_1 = parseInt(prompt("Introduce el primer número" , 10));
    var numero_2 = parseInt(prompt("Introduce el segundo número" , 2));

}

var suma = numero_1 + numero_2;
var resta = numero_1 -numero_2;
var multiplicacion = numero_1 * numero_2;
var division = numero_1 / numero_2;

console.log(suma, resta, multiplicacion, division);
document.write("La suma es: " + suma + "<br>" + "La resta es: " + resta + "<br>" + "La multiplicación es: " + multiplicacion + "<br>" + "La división es: " + division);
alert("La suma es: " + suma);
alert("La resta es: " + resta);
alert("La multiplicación es: " + multiplicacion);
alert("La división es: " + division);