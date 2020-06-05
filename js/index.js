const contacto = document.querySelector('.item7');
const botoncancelar=document.querySelector('.btn-danger');
const formulario = document.querySelector('form');
const botonenviar= document.querySelector('.btn-primary');
const nombreformulario=document.querySelector('.nombre');
const apellidoformulario=document.querySelector('.apellido');
const mailformulario=document.querySelector('.email');
const inputformulario=document.querySelector('.texto');


function contactoHandler(){
    formulario.style.display='block';
}

function cancelarHandler(){
    formulario.style.display='none';
}

function validarNombre(){
    if(nombreformulario.value.length!==0){
        nombreformulario.classList.add('is-valid');
        nombreformulario.classList.remove('is-invalid');
    } else {
        nombreformulario.classList.add('is-invalid');
        nombreformulario.classList.remove('is-valid');
    }
}

function validarMail(){
    if((mailformulario.value.length!==0) && (mailformulario.value.indexOf !==('@') -1) && (mailformulario.value.indexOf('.') !== -1)){
       mailformulario.classList.add('is-valid');
       mailformulario.classList.remove('is-invalid');
    } else {
       mailformulario.classList.add('is-invalid');
       mailformulario.classList.remove('is-valid');
    }
}

function validarApellido(){
    if(apellidoformulario.value.length!==0){
        apellidoformulario.classList.add('is-valid');
        apellidoformulario.classList.remove('is-invalid');
    } else {
        apellidoformulario.classList.add('is-invalid');
        apellidoformulario.classList.remove('is-valid');
    }
}

function validarInput(){
    if(inputformulario.value.length!==0){
        inputformulario.classList.add('is-valid');
        inputformulario.classList.remove('is-invalid');
    } else {
        inputformulario.classList.add('is-invalid');
        inputformulario.classList.remove('is-valid');
    }
}

contacto.addEventListener('click', contactoHandler);
botoncancelar.addEventListener('click', cancelarHandler);
nombreformulario.onblur=validarNombre;
apellidoformulario.onblur=validarApellido;
mailformulario.onblur=validarMail;
inputformulario.onblur=validarInput;

if (nombreformulario.classList.contains('is-valid') && apellidoformulario.classList.contains('is-valid') && mailformulario.classList.contains('is-valid') && inputformulario.classList.contains('is-valid')){
    console.log('dale')
}