const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/controller");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {};
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server); // Toda la info de los sockets conectados

    //Middlewares ----> funcion que siempre se va a ejecutar cuando levantemos el servidor (mas adelante profundizamos)
    this.middlewares();

    this.routes(); // esto dispara el metodo

    this.sockets()
  }

  middlewares() {
    // Cors: nos permite proteger nuestro servidor de una forma superficial
    // es un middleware
    this.app.use(cors());

    this.app.use(express.static("public")); //use es la palabra clave para decir que es un middleware
  }

  routes() {}

  sockets(){
    this.io.on('connection', socketController);
  }

  listen() {
    this.server.listen(this.port);
  }
}

module.exports = Server;