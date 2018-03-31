"use strict";

//Inicializamos unas variables con los elementos del DOM que nos interesan
var formulario= document.getElementById('form_prova');
var popup = document.getElementById('popUp');
var close_popup = document.getElementById('close')

// 1) Capturamos la ejecución del evento de submit dentro del elemento del DOM Form
formulario.addEventListener('submit',function(e){
    // 2) Prevenimos que no se ejecute la accion del evento
    e.preventDefault();
    // 3) Modificamos el estilo del elemento popup del DOM
    popup.style.display = 'block'; 
});

// 1) Capturamos el evento click sobre el elemento del DOM en questión
close_popup.addEventListener('click',function(e){
    // 2) Prevenimos que no se ejecute la accion del evento
    e.preventDefault();
    // 3) Modificamos el estilo del elemento popup del DOM
    popup.style.display = 'none';
})
