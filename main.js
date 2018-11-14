
$(document).ready(function() {
 $(".dropdown-nav").click(function(){
    console.log("js running");
    $(".dropdown-nav").removeClass("active");
    $(this).addClass("active");
    $(".dropdown-nav").not(".active").children(".dropdown-content").slideUp("200");
    $(".dropdown-nav.active").children(".dropdown-content").slideDown("200");
  });
  

});
