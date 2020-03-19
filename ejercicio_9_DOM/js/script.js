'use strict'


function seleccionar (text){
    
    return form.querySelector(text);

}

window.addEventListener('load', function(){
   

    

    console.log('Se han cargado todos los elementos, se va a comenzar.');

        var form = document.querySelector('#form');
        var boton = seleccionar('#submit');

        boton.addEventListener('click', function(){

            console.log('El usuario ' + seleccionar('#name').value + ' con email ' + 
            seleccionar('#email').value + ' y  una edad de  ' + seleccionar('#age').value + ' año(s), ha pulsado el botón!');

        });



});