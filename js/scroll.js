$(document).ready(function(){

// Scroll listener
$(document).scroll(function(event){

// Scroll position checker
  var scrollpos = $(document).scrollTop();
  if(scrollpos > 900)
  {
    $(".upbutton").children().css({"visibility":"visible"});
  }
  else
  {
    $(".upbutton").children().css({"visibility":"hidden"});
  }

});

// Click listener on upButton
$(".upbutton").children().click(function(){
  $(document).scrollTop(0);
});




});
