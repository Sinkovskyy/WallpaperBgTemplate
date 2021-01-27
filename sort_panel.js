$(document).ready(function() {

  $(".sort.panel").click(function(){
    var menu = $(".sort.panel>.dropdown-content");
    var arrow = $(".sort.arrow");

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
