var socket = io.connect('http://localhost:3000');
/*socket.on("message",function(message){
    alert(message);
})*/
$("#join").on("click",function(){
    socket.emit("message","Evaion");
})
