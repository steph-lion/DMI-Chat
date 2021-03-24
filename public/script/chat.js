//var socket = io.connect('http://localhost:3000');
function fillRooms(){
   var i;
   $("#middle_box").append("<div id='box_containing_rooms'>");
   for (i=1;i<6;i++){
    $("#box_containing_rooms").append("<button class='room-buttons rounded'><span class='text-green'>Room "+i+"</span></button><br>");
   }
   $("#middle_box").append("</div>");
   $("#back_button").fadeIn("slow");
}
function menuSelect(){
    $("#middle_box").append("<div id='box_menu' class='box-menu'><button class='menu-buttons' id='create_button'> Create a room </button><button class='menu-buttons' id='join_button' onclick=showRoomList()>Join a room</button></div>");
}
