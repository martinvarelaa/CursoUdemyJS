'use strict'
/* Introducir números hasta que uno de ellos sea negativo, en ese momento mostrar suma total y media */

var suma_total= 0;
var divisor= 0;

do{


var numero = parseInt(prompt("Introduce números hasta que uno sea negativo:"));


if (isNaN(numero)) {
    numero = 0;

} else if (numero > 0)  {
    suma_total += numero;
    
    divisor ++;
}

console.log(divisor);

}while(numero >= 0);

alert("La suma es = " + suma_total);
alert("La media de todos los valores es = " + suma_total + "/" + divisor +"="+(suma_total/divisor));


