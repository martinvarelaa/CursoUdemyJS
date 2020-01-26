
//Pedir un número y mostrar si es par o impar (sin bucle)

'use strict'


while(isNaN(numero_1)){
    var numero_1 = parseInt(prompt("Introduzca un número: "));
}


if(numero_1 %2 == 0){
alert(numero_1 + " es un número par");

}else {
alert(numero_1 + " es un número impar");

}
