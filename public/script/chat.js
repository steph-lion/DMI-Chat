var socket = io.connect('http://localhost:3000');
$("#join").on("click",function () {
  $("#join").fadeOut("500");
  socket.emit('message','Avaia');
});
