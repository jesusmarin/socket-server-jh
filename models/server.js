const express = require("express");

const http = require("http");
const socketIO = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    //servidor de socket
    this.server = http.createServer(this.app);

    //servidor de socket server
    this.io = socketIO(this.server, {
      /*configuaraciones*/
    });
  }
  middlewares() {
    //desplegar directorio publico
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configSockets() {
      new Sockets(this.io);
  }

  execute() {
      //iniicializar middleware
      this.middlewares();

      //cofigurar los socket con
      this.configSockets();

      //inicializar server
    this.server.listen(this.port, () => {
      console.log(`server en el puerto http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
