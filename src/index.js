// CAMBIAR FONDO 

const cambiarModo = () => {
    let cuerpoweb = document.body;
    cuerpoweb.classList.toggle('oscuro');
}

// TEXTO VALOR DE TICKET

new TypeIt("#textTicket", {
    speed: 20,
    waitUntilVisible: true,
    loop: true
})
    .type('VALOR DE TICKET $200')
    .pause(2500)
    .go();


// FORMULARIO 

const resumenFunc = () => {

    let cantidad = document.getElementById('cantidad').value;
    cantidad = parseInt(cantidad);
    let categoria = document.getElementById('categoria').value;
    let mostrarResultado = document.getElementById('txtPagar');
    let error = document.getElementById('error');
    let ticket = 200;
    let total;

    if (cantidad > 0 || !cantidad == Number) {
        if (categoria == 'Estudiante') {
            total = (ticket - (ticket * 80) / 100) * cantidad;
            mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
        } else if (categoria == 'Trainee') {
            total = (ticket - (ticket * 50) / 100) * cantidad;
            mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
        } else if (categoria == 'Junior') {
            total = (ticket - (ticket * 15) / 100) * cantidad;
            mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
        } else if (categoria == 'Ninguna') {
            total = ticket * cantidad;
            mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
        }
    } else {
        error.classList.toggle('visible');
    }
};

const borrarFunc = () => {
    document.getElementById('name').value = ' ';
    document.getElementById('apellido').value = ' ';
    document.getElementById('email').value = ' ';
    cantidad.value = ' ';
    categoria.value = 'Ninguna';
    document.getElementById('txtPagar').innerHTML = 'Total a pagar: $';
    error.classList.remove('visible');
};