const contacto = document.querySelector('.item7');
const botoncancelar=document.querySelector('.btn-danger');
const formulario = document.querySelector('form');
const botonenviar= document.querySelector('.btn-primary');
const nombreformulario=document.querySelector('.nombre');
const apellidoformulario=document.querySelector('.apellido');
const mailformulario=document.querySelector('.email');
const inputformulario=document.querySelector('.texto');
const modalrs=document.querySelector('.modalrs');
const modalservicios=document.querySelector('.modalservicios');
const itembio=document.querySelector('.item2');
const itemrs=document.querySelector('.item5');
const itemservicios=document.querySelector('.item4');
const closers=document.querySelector('.closers');
const closebio=document.querySelector('.closebio');
const closeservicios=document.querySelector('.closeservicios');

function itembioHandler(){
    const modalbio=document.querySelector('.modalbio');
    modalbio.style.display="block";
}

function itemrsHandler(){
    const modalrs=document.querySelector('.modalrs');
    modalrs.style.display="block";
}

function itemserviciosHandler(){
    const modalservicios=document.querySelector('.modalservicios');
    modalservicios.style.display="block";
}

function contactoHandler(){
    formulario.style.display='block';
}

function closebioHandler(){
    closebio.parentNode.parentNode.style.display="none";
}
function closersHandler(){
    closers.parentNode.parentNode.style.display="none";
}

function closeserviciosHandler(){
    closeservicios.parentNode.parentNode.style.display="none";
}

function cancelarHandler(){
    formulario.style.display='none';
    nombreformulario.value="";
    apellidoformulario.value="";
    mailformulario.value="";
    inputformulario.value="";
}

function validarMail(){
    if((mailformulario.value.length!==0) && (mailformulario.value.indexOf !==('@') -1) && (mailformulario.value.indexOf('.') !== -1)){
       mailformulario.classList.add('is-valid');
       mailformulario.classList.remove('is-invalid');
       borrarError();
    } else {
       mailformulario.classList.add('is-invalid');
       mailformulario.classList.remove('is-valid');
       crearError(`Por favor complete un correo electrónico válido.`)
    }
    validarBoton()
}

function validarBoton(){
    if (nombreformulario.classList.contains('is-valid') && apellidoformulario.classList.contains('is-valid') && mailformulario.classList.contains('is-valid') && inputformulario.classList.contains('is-valid')){
        botonenviar.removeAttribute('disabled')
        botonenviar.setAttribute('enabled', 'true')
    } else {botonenviar.setAttribute('disabled', 'true')
        botonenviar.removeAttribute('enabled')}
}

function crearError(texto){
    const error=document.createElement('p');
    error.innerHTML=texto;
    error.style.color="red";
    const errordiv=document.querySelector('.mensajeError');
    errordiv.appendChild(error)
}

function borrarError(){
    const errordiv=document.querySelector('.mensajeError');
    errordiv.innerHTML="";
}

function validarElemento(elemento){
    elemento.onblur=function(){
        if(elemento.value.length!==0){
            elemento.classList.add('is-valid');
            elemento.classList.remove('is-invalid');
            borrarError()

        } else {
            elemento.classList.add('is-invalid');
            elemento.classList.remove('is-valid');
            let error=document.createElement('p');
            crearError(`Por favor complete el ${elemento.id}.`);
        }
        validarBoton()
    }
}

contacto.addEventListener('click', contactoHandler);
botoncancelar.addEventListener('click', cancelarHandler);
itembio.addEventListener('click', itembioHandler);
itemrs.addEventListener('click', itemrsHandler);
itemservicios.addEventListener('click', itemserviciosHandler);
closebio.addEventListener('click', closebioHandler);
closers.addEventListener('click', closersHandler);
closeservicios.addEventListener('click', closeserviciosHandler);

validarElemento(nombreformulario);
validarElemento(apellidoformulario);
validarElemento(inputformulario);
mailformulario.onblur=validarMail;

