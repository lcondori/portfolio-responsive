const formulario = document.querySelector('#formulario');

eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', validarFormulario);
}

// Funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( nombre === '' || email === '' || mensaje === ''){
        alert('Todos los Campos son Obigatorios');       
    } else if(!er.test(email)){
        alert('No es un Email Válido');
    } else { 
        alert('Gracias por Comunicarse');
    }   
}
