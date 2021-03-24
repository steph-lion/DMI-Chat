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
    $("#create_button").remove();
    $("#join_button").remove();
    fillRooms();
  });
};