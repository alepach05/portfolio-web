window.onload = function() {
    var formulario = document.getElementById('formulario-contacto');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        if (nombre === '') {
            alert('Por favor, introduce tu nombre.');
            return false; 
        }

        if (email === '') {
            alert('Por favor, introduce tu correo electrónico.');
            return false; 
        }

        if (mensaje === '') {
            alert('Por favor, escribe un mensaje.');
            return false; 
        }

        setTimeout(function() {
            alert('¡El formulario se ha enviado correctamente!');
            // Vaciar los campos del formulario
            document.getElementById('nombre').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensaje').value = '';
            // Recargar la página después de 3 segundos
            setTimeout(function() {
                location.reload();
            }, 3000);
        }, 1000); // Espera 1 segundos antes de mostrar el mensaje de éxito

    });
};
