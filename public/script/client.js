var socket;

function connectToRoom(roomID){
    socket= io.connect('http://localhost:3000');
    socket.emit("roomID",roomID);
}

function setRooms(){
    var num_rooms=0;
    if (num_rooms==0){
        $("#box_containing_rooms").append("<span style='color:red; display:inline-block; height:100%; line-height:"+$("#box_containing_rooms").height()+"px; font-size:2vw;'>No rooms available</span>");
        return;
    }
    for (i=0;i<num_rooms;i++){
        $("#box_containing_rooms").append("<button id='room_"+i+"' class='menu_buttons room-button' onclick=connectToRoom(this.id)><span>Room "+(i+1)+"</span><span style='margin-left:10%;'><i class='fa fa-user'></i></span><span style='color:green;'> 1/4</span></button><br>");
    }
}
//Funzione per interrompere caricamento pagina
// window.onbeforeunload=function(){
//     return "Data will be lost if you leave the page, are you sure?";
// }