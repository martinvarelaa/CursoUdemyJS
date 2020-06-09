'use strict'

//Tabla de multiplicar de un número introducido por pantalla
while (isNaN(numero)){
    var numero = parseInt(prompt("Selecciona el número del que quieres hacer la tabla: ", 1));
}

document.write("<h1>Tabla del"+ numero +"</h1>");

for(var i = 0; i <= 10; i++){
document.write(i+ " x " + numero + " = " + i*numero + "<br>");
}


