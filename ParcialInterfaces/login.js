var ingresar = document.getElementById('ingresar');
var user = document.getElementById('user');
var password = document.getElementById('password');


ingresar.addEventListener('click', validar);

function validar()
{
    console.log(isNaN(user.value));
    if (isNaN(user.value) || user.value.length < 1){
        alert("El usuario debe ser numerico")
    }
    else{
        if(password.value.length < 4){
            alert("La contrasenia tiene que tener al menos 4 caracteres")
        }
        else{
            localStorage.setItem('usuario', user.value);
            window.location.href = './index.html'  
        }
    }
}
