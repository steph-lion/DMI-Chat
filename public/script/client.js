var socket;

function connectToRoom(roomID){
    socket= io.connect('http://localhost:3000');
    socket.emit("join",roomID);
}
//setInterval(setRooms,5000);
function setRooms(){
    //Aggiungere un pulsante di aggiornamento per ricaricare la lista delle stanze
    $.get("http://localhost:3000/numrooms", function(data){
        var num_rooms=data;
        if (num_rooms==0){
            $("#box_containing_rooms").html("<span style='color:red; display:inline-block; height:100%; line-height:"+$("#box_containing_rooms").height()+"px; font-size:2vw;'>No rooms available</span>");
            return;
        }
        $("#box_containing_rooms").html(null);
        for (i=0;i<num_rooms;i++){
            $("#box_containing_rooms").append("<button id='room_"+(i+1)+"' class='menu_buttons room-button' onclick=connectToRoom(this.id)><span class='room-name'>Room "+(i+1)+"</span><hr class='vertical-hr'><div class='users-count'><span><i class='fa fa-user'></i></span><span style='color:green;'> 1/4</span></div></button><br>");
        }
    });
}

//Funzione per interrompere caricamento pagina
// window.onbeforeunload=function(){
//     return "Data will be lost if you leave the page, are you sure?";
// }