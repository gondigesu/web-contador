const contacto = document.querySelector('.item7')
const botoncancelar=document.querySelector('.btn btn-danger mb-2')
const formulario = document.querySelector('form')

function contactoHandler(){
    formulario.style.display='block'
}

function cancelarHandler(){
    formulario.style.display='none'
}

contacto.addEventListener('click', contactoHandler)
botoncancelar.addEventListener('click', cancelarHandler)


