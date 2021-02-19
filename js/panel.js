$(document).ready(function() {

  $(".panel").click(function(){
    var menu = $(this).children(".dropdown-content");
    var arrow =  $(this).children(".button").children(".sort.arrow");

    if(menu.css("opacity") == "1")
    {
      menu.css({"opacity":"0"});
      arrow.css({"transform":"rotate(0deg)"});
    }
    else
    {
      menu.css({"opacity":"1"});
      arrow.css({"transform":"rotate(180deg)"});
    }
  });


});
