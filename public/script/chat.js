//var socket = io.connect('http://localhost:3000');
function fillRooms(){
   var i;
   for (i=1;i<6;i++){
    $("#box_containing_rooms").append("<button class='room-buttons'>Room "+i+"</button><br>");
   }
}
