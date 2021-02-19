$(document).ready(function() {
  var wrap = $(".header>.wrapper"),
      awrap = $(".header>.wrapper.active"),
      wndw = $(window);
  const width = 800;

  // search button listener
  $(".search.button").click(function(){

    if(wndw.width() <= width + 37)
    {
        wrap.css({"display":"none"});
        awrap.css({"display":"flex"});
    }
  });
  // cancel butoon listener
  $(".cancel.button").click(function(){
    if(wndw.width() <= width + 37)
    {
        wrap.css({"display":"grid"});
        awrap.css({"display":"none"});
    }
  });

  // resize window listener
  wndw.resize(function(){

    //change markup for 500+px screen width when search button is active
    if(wndw.width() > width + 37)
    {
      wrap.css({"display":"grid"});
      awrap.css({"display":"none"});
    }
  });

});
