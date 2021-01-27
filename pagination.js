$(document).ready(function() {

  // All main pagination elements
  var elements = $(".pagin-main-panel").children();

  // Pagination overlay
  elements.click(function(){
    $(".pagin-main-panel").children().attr("class","pagin-link");
    $(this).addClass("active");
  });

  // Listener for forward button
  $(".pagin-link.forward").click(function(){

      for(var i = 0; i < elements.length;i++)
      {
        if(elements.eq(i).hasClass("active") && elements.length != i + 1)
        {
          elements.eq(i + 1).addClass("active");
          elements.eq(i).removeClass("active");
          break;
        }
      }

  });

  // Listener for backward button
  $(".pagin-link.backward").click(function(){

      for(var i = 0; i < elements.length;i++)
      {
        if(elements.eq(i).hasClass("active") && i != 0)
        {
          elements.eq(i - 1).addClass("active");
          elements.eq(i).removeClass("active");
          break;
        }
      }

  });


});
