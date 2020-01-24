'use strict'

// Mostrar por pantalla todos los números impares contenidos entre dos números introducidos por el usuario.






    while (isNaN(numero_1) || isNaN(numero_2)){
        var numero_1 = parseInt(prompt("Introduce número 1:",0));
        var numero_2 = parseInt(prompt("Introduce número 2:",0));

        
        }
        
        for (let i = numero_1; i < numero_2 ; i++){
            if (i%2 != 0) {
                console.log(i);
                document.write(i + "<br>");
               
            }
        }





