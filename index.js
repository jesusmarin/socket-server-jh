const  Server  = require('./models/server');
require("dotenv").config();
//servidor de socket
const server = new Server();

server.execute();


/*

    //recibe el mensaje desde el cliente
    socketServer.on('mensaje-to-server', (data)=>{
        console.log(data)

        io.emit('mensaje-from-server',  data );//

    });
});*/


