function myFunction() {
    var elmnt = document.getElementById("srsrandsakr");
    elmnt.scrollLeft = 50;
    elmnt.scrollLeft.css("background-color","red");
  }
  $("#div4").delay(2000).fadeIn();
  $("#cancel").click(function(){
$("#div4").fadeOut()})

$(".menu").css("visibility","hidden");

  $("#menu").mouseenter(function(){
    $(".menu").css("visibility","visible");
  });
  $(".menu").mouseleave(function(){
    $(".menu").css("visibility","hidden")
  });
  $("#div1").mouseleave(function(){
    $("#div2").css("visibility","hidden")
  });
 
 