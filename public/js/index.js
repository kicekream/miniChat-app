const socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit('createMessage', {
    to: "kareem", message: "afar na daddy"
  })
});

socket.on("disconnect", function() {
  console.log("Disconnected from server. Kindly check connection");
});

socket.on('newMessage', function(message) {
  console.log('new message received from server', message)
})