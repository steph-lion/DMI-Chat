//Animazione per la scritta in movimento
var textWrapper = document.querySelector('.animated-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var animation=anime.timeline({ loop: true })
  .add({
    targets: '.animated-text .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animated-text .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

//Animazione per scomparsa bottone e apparizione box
$("#join").on("click", function () {
  $("#join").fadeOut("500", function () {
    $("#dmi_chat").fadeOut("slow",function(){ //Prima scompare DMI Chat, poi lo modifico, riappare. Dopo appare il box chat e dopo ancora developed_by
      $("#dmi_chat").css("text-align","left").css("margin-left","2%").css("margin-top","0").css("padding-top","15px").fadeIn("slow",function(){
        $("#div_chat_list").slideDown("slow").fadeIn("slow",function(){
          $("#developed_by_me").fadeIn("slow");
        });
      });
    });
    $("#anim_text").fadeOut("slow");
  });
  menuSelect();
});
function showRoomList(){
  $("#box_menu").fadeOut("slow",function(){
    $("#menu_title").html("SELECT A ROOM");
    $("#box_menu").remove();
    fillRooms();
  });
};
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
  $("#back_button").fadeOut("slow");
  $("#menu_title").html("CHOOSE AN OPTION");
  $("#middle_box").append("<div id='box_menu' class='box-menu'><button class='menu-buttons' id='create_button'> Create a room </button><button class='menu-buttons' id='join_button' onclick=showRoomList()>Join a room</button></div>");
}

function goBack(){
  $("#box_containing_rooms").fadeOut("slow",function(){
    $("#box_containing_rooms").remove();
    menuSelect();
  })
  
}