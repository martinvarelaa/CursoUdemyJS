'use strict'


$(document).ready(function(){
    console.log("Listo!");

    if (window.location.href.indexOf('index') > -1){

        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: 'true',
            slideWidth: 1200
            
        });

   

        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum dui non vestibulum aliquam. Morbi sollicitudin vulputate finibus.' 
            },
            {
                title: 'Prueba de titulo 2',
                date: moment().format("MMMM Do YYYY"),
                content: 'Pero un buen día, una pequeña línea de texto simulado, llamada Lorem Ipsum, decidió aventurarse y salir al vasto mundo de la gramática.'
            },
            {
                title: 'Prueba de titulo 3',
                date: moment().format("MMMM Do YYYY"),
                content: 'Hablamos de un país paraisomático en el que a uno le caen pedazos de frases asadas en la boca. Ni siquiera los todopoderosos signos de puntuación dominan a los textos simulados; una vida, se puede decir, poco ortográfica.'
            },
            {
                title: 'Prueba de titulo 4',
                date: moment().format("MMMM Do YYYY"),
                content: 'Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas. Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias.'
            },
        ]
        
        posts.forEach((item) => {
                var post = `<article class="post">
                <h2>${item.title}</h2>
                <span class="fecha">${item.date}</span>
                <p>${item.content}</p>
                <a href="" class="botonLeerMas">Leer más</a>
            </article>`;
            $("#posts").append(post);
        });
    }
    //Cambiador de temas
    var tema = $('#theme');

    $('#aVerde').click(function(){
        tema.attr('href', "css/green.css");


    });
    $('#aAzul').click(function(){
       tema.attr('href', "css/blue.css");


    });
    $('#aRojo').click(function(){
        tema.attr('href', "css/red.css");


    });

    //Boton ir arriba
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 


        }, 500);
        return false;            


    });
    //Formulario
    $('#formularioFalso').submit(function(){
        var nombre_form = $('#name').val();
        var email_form = $('#email').val();
        var pass_form = $('#pass').val();

        if(nombre_form != null && nombre_form != '' && email_form != null && email_form != '' && pass_form != null && pass_form != ''){
            var parrafoSobreMi = $('#sobreMi p');
            var login = $('#login');
            login.hide();
            parrafoSobreMi.html("<strong>Bienvenido, " + nombre_form +"</strong>");
            parrafoSobreMi.append("<a href='#' id='cerrarSesion'> <br> Cerrar sesion</a>");

        }else{
            alert("Comprueba que todos los datos del formulario se han rellenado!")
        }

        localStorage.setItem('formulario_nombre', nombre_form); 
        localStorage.setItem('formulario_email', email_form); 
        localStorage.setItem('formulario_pass', pass_form); 

        $('#cerrarSesion').click(function(){
            localStorage.clear();
            login.show();
            location.reload();

        });

       

        return false;

    });

    //Acordeon

    if (window.location.href.indexOf('sobreMi') > -1){

        $('#acordeon').accordion();

    }

    //Reloj

    if(window.location.href.indexOf('reloj') > -1 ){

        setInterval(function(){
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);

        }, 1000);
        

    }

    //Validación
if(window.location.href.indexOf('contacto') > -1){

  $.validate({
      lang: 'es'
  });


}
    

});