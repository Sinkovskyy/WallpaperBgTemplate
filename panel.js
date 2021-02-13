$(document).ready(function() {

  $(".panel").click(function(){
    var menu = $(this).children(".dropdown-content");
    var arrow =  $(this).children(".button").children(".sort.arrow");

    if(menu.css("display") == "flex")
    {
      menu.css({"display":"none"});
      arrow.css({"transform":"rotate(0deg)"});
    }
    else
    {
      menu.css({"display":"flex"});
      arrow.css({"transform":"rotate(180deg)"});
    }
  });


});
