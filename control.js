var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var formulario = document.querySelector('form');

formulario.onsubmit = function (e) {
    if ((usuario.value === '') && (clave.value === '')) {
        alert("Debe ingresar su Usuario y Clave")
        usuario.focus();
        return false
    } else {
        if (usuario.value === '') {
            alert("Debe ingresar su Usuario");
            usuario.focus();
            return false;
        } else {
            if (clave.value === '') {
                alert("Debe ingresar su Clave");
                clave.focus();
                return false;
            } else {
                if (usuario.value.includes('@')) {
                    alert("Sus datos son correctos...");
                } else {
                    alert("Falta el arroba en el usuario")
                    usuario.focus();
                    return false;
                }
            }
        }
    }

}
