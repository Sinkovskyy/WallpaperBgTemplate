$(document).ready(function() {
  var wrap = $(".header>.wrapper"),
      awrap = $(".header>.wrapper.active"),
      wndw = $(window);



  $(".search.button").click(function(){

    if(wndw.width() <= 537)
    {
        wrap.css({"display":"none"});
        awrap.css({"display":"flex"});
    }
  });

  $(".cancel.button").click(function(){
    if(wndw.width() <= 537)
    {
        wrap.css({"display":"grid"});
        awrap.css({"display":"none"});
    }
  });

  wndw.resize(function(){

    if(wndw.width() > 537)
    {
      wrap.css({"display":"grid"});
      awrap.css({"display":"none"});
    }
  });

});
