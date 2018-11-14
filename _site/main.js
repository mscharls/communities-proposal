//
// $(document).ready(function() {
//  $(".dropdown-nav").click(function(){
//     console.log("js running");
//     $(".dropdown-nav").removeClass("active");
//     $(this).addClass("active");
//     $(".dropdown-nav").not(".active").children(".dropdown-content").slideUp("200");
//     $(".dropdown-nav.active").children(".dropdown-content").slideDown("200");
//   });
//
//
// });
$( document ).ready(function() {

$(".dropdown-nav").click(function(){
  if($(".dropdown-nav").attr("id") != "down"){
    $(this).siblings(".dropdown-content").slideDown("200");
     $(".dropdown-nav").attr("id","down");
  }

  else if($(".dropdown-nav").attr("id") === "down") {
    $(this).siblings(".dropdown-content").slideUp("200");
    $(".dropdown-nav").removeAttr("id");

  }

  });

  $("#letter_button").click(function(){
      console.log("button clicked"); //debug comments
       $("#letter").removeClass("hide");
       $("#phases").attr("class","hide");
       $("#services").attr("class","hide");
       $("#timeframe").attr("class","hide");
       $("#budget").attr("class","hide");
       $("#team").attr("class","hide");
       $("#accept").attr("class","hide");
       $("#book").attr("class","hide");
    });

  $("#phases_button").click(function(){
      console.log("button clicked"); //debug comments
       $("#letter").attr("class","hide");
       $("#phases").removeClass("hide");
       $("#services").attr("class","hide");
       $("#timeframe").attr("class","hide");
       $("#budget").attr("class","hide");
       $("#team").attr("class","hide");
       $("#accept").attr("class","hide");
       $("#book").attr("class","hide");
    });

  $("#services_button").click(function(){
      console.log("button clicked"); //debug comments
       $("#letter").attr("class","hide");
       $("#phases").attr("class","hide");
       $("#services").removeClass("hide");
       $("#timeframe").attr("class","hide");
       $("#budget").attr("class","hide");
       $("#team").attr("class","hide");
       $("#accept").attr("class","hide");
       $("#book").attr("class","hide");
    });

  $("#timeframe_button").click(function(){
      console.log("button clicked"); //debug comments
       $("#letter").attr("class","hide");
       $("#phases").attr("class","hide");
       $("#services").attr("class","hide");
       $("#timeframe").removeClass("hide");
       $("#budget").attr("class","hide");
       $("#team").attr("class","hide");
       $("#accept").attr("class","hide");
       $("#book").attr("class","hide");
    });

  $("#budget_button").click(function(){
      console.log("button clicked"); //debug comments
       $("#letter").attr("class","hide");
       $("#phases").attr("class","hide");
       $("#services").attr("class","hide");
       $("#timeframe").attr("class","hide");
       $("#budget").removeClass("hide");
       $("#team").attr("class","hide");
       $("#accept").attr("class","hide");
       $("#book").attr("class","hide");
    });

  $("#team_button").click(function(){
      console.log("button clicked"); //debug comments
       $("#letter").attr("class","hide");
       $("#phases").attr("class","hide");
       $("#services").attr("class","hide");
       $("#timeframe").attr("class","hide");
       $("#budget").attr("class","hide");
       $("#team").removeClass("hide");
       $("#accept").attr("class","hide");
       $("#book").attr("class","hide");
    });

  $("#accept_button").click(function(){
      console.log("button clicked"); //debug comments
       $("#letter").attr("class","hide");
       $("#phases").attr("class","hide");
       $("#services").attr("class","hide");
       $("#timeframe").attr("class","hide");
       $("#budget").attr("class","hide");
       $("#team").attr("class","hide");
       $("#accept").removeClass("hide");
       $("#book").attr("class","hide");
    });

  $("#book_button").click(function(){
      console.log("button clicked"); //debug comments
       $("#letter").attr("class","hide");
       $("#phases").attr("class","hide");
       $("#services").attr("class","hide");
       $("#timeframe").attr("class","hide");
       $("#budget").attr("class","hide");
       $("#team").attr("class","hide");
       $("#accept").attr("class","hide");
       $("#book").removeClass("hide");
    });

});
