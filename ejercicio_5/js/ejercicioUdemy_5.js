'use strict'

//Mostrar los divisiores del número introducido
while (isNaN(numero_1)){

    var numero_1 = parseInt(prompt("Introduce el número:"));

}




for(var i = 1; i <= numero_1; i++){
 if (numero_1 % i == 0)
   document.write(i + " es un divisor! <br>");

}