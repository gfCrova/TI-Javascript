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
    let categoria = document.getElementById('categoria').value;
    let mostrarResultado = document.getElementById('txtPagar');
    let error = document.getElementById('error');
    let ticket = 200;
    let total;

    if (cantidad > 0 || !cantidad == Number) {
        switch (categoria) {
            case 'Estudiante':
                total = (ticket - (ticket * 80) / 100) * cantidad;
                mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
                break;
            case 'Trainee':
                total = (ticket - (ticket * 50) / 100) * cantidad;
                mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
                break;
            case 'Junior':
                total = (ticket - (ticket * 15) / 100) * cantidad;
                mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
                break;
            case 'Ninguna':
                total = ticket * cantidad;
                mostrarResultado.innerHTML = `Total a pagar: $ ${total}`;
                break;
        }
    } else {
        error.classList.toggle('visible');
    }
};

const borrarFunc = () => {
    cantidad.value = ' ';
    categoria.value = 'Ninguna';
    document.getElementById('txtPagar').innerHTML = 'Total a pagar: $';
    error.classList.remove('visible');
};