var socket = io.connect('http://localhost:3000');
$(document).ready(function() {
        $("#join").click(function () {
          socket.emit('message','Avaia');
        });
      });
