const socketController = (socket) => {
  console.log("conectado", socket.id);

  // el primer argumento es el payload,
  socket.on("send-message", (payload, callback) => {
    //el segundo argumento del callback hace referencia al callback en el cliente (socket-client)
    const id = 123456;
    callback(id);
    socket.broadcast.emit('send-message', payload,) //emite un evento a todos los clientes conectados
  });

  socket.on("disconnect", () => {
    console.log("desconectado", socket.id);
  });
};

module.exports = { socketController };
