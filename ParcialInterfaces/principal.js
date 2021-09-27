var salir = document.getElementById('salir');
var usuariocaja = document.getElementById('usuario');
var usuariofinal;

function asignarNombre(){
    usuariofinal = localStorage.getItem('usuario');
    usuariocaja.value = "Usuario: " + usuariofinal;
}

salir.addEventListener('click', redireccionar);

function redireccionar(){
    window.location.href = './login.html'
}