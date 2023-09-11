// HTML

const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMessage = document.querySelector('#txtMessage')
const btnSend = document.querySelector('#btnSend')

const socket = io();

// el on es para estar escuchando
socket.on('connect', () => {

    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', () => {
    console.log('desconectado');

    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
})

socket.on('send-message', (payload) => {
    console.log(payload);
})

btnSend.addEventListener('click', () => {
    const message = txtMessage.value
    const payload = {
        id:'qweqweqwe',
        message,
        date: new Date().getTime()
    }
    // envia el mensaje al servidor, es recomendable no usar camelcase
    socket.emit('send-message', payload, (id) => { // el callback recibe lo que sea que mandemos
        console.log('Desde el server', id);
    }) 
})