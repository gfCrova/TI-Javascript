// CAMBIAR FONDO 

const cambiarModo = () => {
    let cuerpoweb = document.body;
    cuerpoweb.classList.toggle('oscuro');

    let cardEstudiante = document.body.querySelector('.est')
    cardEstudiante.classList.toggle('cardEst');

    let cardTrainee = document.body.querySelector('.tra')
    cardTrainee.classList.toggle('cardTra');

    let cardJunior = document.body.querySelector('.jr')
    cardJunior.classList.toggle('cardJr');
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
    let ticket = 200;
    let total;

    if (categoria == 'Estudiante') {
        total = (ticket - (ticket * 80) / 100) * cantidad;
        document.getElementById('txtPagar').innerHTML = `Total a pagar: \u0024 ${total}`;
    } else if (categoria == 'Trainee') {
        total = (ticket - (ticket * 50) / 100) * cantidad;
        document.getElementById('txtPagar').innerHTML = `Total a pagar: \u0024 ${total}`;
    } else if (categoria == 'Junior') {
        total = (ticket - (ticket * 15) / 100) * cantidad;
        document.getElementById('txtPagar').innerHTML = `Total a pagar: \u0024 ${total}`;
    } else if (categoria == 'Ninguna') {
        total = ticket * cantidad;
        document.getElementById('txtPagar').innerHTML = `Total a pagar: \u0024 ${total}`;
    }
};

const borrarFunc = () => {
    document.getElementById('name').value = ' ';
    document.getElementById('apellido').value = ' ';
    document.getElementById('email').value = ' ';
    document.getElementById('cantidad').value = ' ';
    document.getElementById('categoria').value = 'Ninguna';
    document.getElementById('txtPagar').innerHTML = 'Total a pagar: \u0024';
};