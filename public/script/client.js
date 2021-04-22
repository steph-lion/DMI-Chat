var socket;

function connectToRoom(roomID){
    socket= io.connect('http://localhost:3000');
    socket.emit("roomID",roomID);
}

