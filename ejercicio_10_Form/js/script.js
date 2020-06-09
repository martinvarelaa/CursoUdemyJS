'use strict'


window.addEventListener('load', function(){

    console.log("Se ha cargado el DOM");


    
    var formulario = this.document.querySelector("#formulario");
    var respuestaFormulario = this.document.querySelector("#div2");
    respuestaFormulario.style.display = "none";

    formulario.addEventListener('submit', function(){

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = document.querySelector('#edad').value;
        
        if(nombre == null){
            alert("Introduzca el nombre correctamente!");
        }else if( apellido == null ){
            alert("Introduzca el apellido correctamente!");
        }else if(isNaN(edad) && edad >= 0){
            alert("Introduzca la edad correctamente!");
        } else{
            respuestaFormulario.style.display = "block";

            var parrafoNombre = document.querySelector("#p_nombre span");
            var parrafoApellido = document.querySelector("#p_apellido span");
            var parrafoEdad = document.querySelector("#p_edad span");

            parrafoNombre.innerHTML = nombre;
            parrafoApellido.innerHTML = apellido;
            parrafoEdad.innerHTML = parseInt(edad);
            
        }


    });




});

