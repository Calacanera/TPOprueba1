function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var contrasena = document.getElementById('contrasena');
var error = document.getElementById('error');
error.style.color = 'red';


function enviarFormulario(){
    console.log("Enviando Formulario.....");

    var mensajesError = [];
    
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingrese Su Nombre');
     }

     if(email.value === null || email.value === ''){
        mensajesError.push('Ingrese Su E-mail');
     }

     if(contrasena.value === null || contrasena.value === ''){
        mensajesError.push('Ingrese Su Password');
     }

     error.innerHTML = mensajesError.join(', ');

    return false;
}