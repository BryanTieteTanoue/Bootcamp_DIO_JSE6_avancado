//EventEMmitter, usado mais no console

const EventEMmitter = require('events');

class Users extends EventEmitter {
    userLogged() {
        this.emit('User logged', data);
    }    
}

const emiter = new EventEMmitter();

EventEMmitter.on('User logged', data => {
    console.log(data);
})

Users.on('User logged', data => { //colocar 'once' ao inves de 'on' garatne que irá realizar apenas uam vez
    console.log(data);
})

//EventTarget permite trablahar com eventos no browser

