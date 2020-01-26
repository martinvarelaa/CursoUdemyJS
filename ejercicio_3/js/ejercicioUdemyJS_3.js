'use strict'

// Mostrar por pantalla todos los números impares contenidos entre dos números introducidos por el usuario.






    while (isNaN(numero_1) || isNaN(numero_2) || numero_1 > numero_2){
        var numero_1 = parseInt(prompt("Introduce número 1 (menor que el siguiente):",0));
        var numero_2 = parseInt(prompt("Introduce número 2 (mayor que el anterior):",0));

        
        }
        document.write("Los número impares entre "+ numero_1+ " y el " + numero_2 + " son: ");
        while (numero_1 < numero_2) {
            numero_1++;
            if(numero_1 %2 != 0){
                document.writeln(numero_1);
                
                
            }
        }




