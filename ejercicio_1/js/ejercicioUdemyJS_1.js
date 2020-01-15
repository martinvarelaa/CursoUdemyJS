'use strict'
/*
Programa que pide dos números y muestra si uno es mayor que otro, si uno es menor que otro o si son iguales.
*/

 var numero_1 = parseInt(prompt("Introduce número 1:", 10));
 var numero_2 = parseInt(prompt("Introduce número 2:", 10));


 while (isNaN(numero_1) == true || isNaN(numero_2) == true ) {
   numero_1 = parseInt(prompt("Introduce número 1:", 10));
   numero_2 = parseInt(prompt("Introduce número 2:", 10));
 }



 if (numero_1 > numero_2){

alert("El número " + numero_1 + " es mayor que " + numero_2 + ".");

} else if(numero_1 < numero_2){
alert("El número " + numero_1 + " es menor que " + numero_2+ ".");
 } else if (numero_1 == numero_2) {
    alert("Los números son iguales, el número es: " + numero_1 + ".");
    
 } else {
    alert("Introduce bien los números!")
 }