var socket = io.connect('http://localhost:3000');
$("#join").on("click",function () {
  $("#join").fadeOut("500", function(){
    $("#div_chat_list").slideDown("slow").fadeIn("slow");
  });
  
  
  socket.emit('message','Avaia');
});
