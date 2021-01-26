
function change_to_nine_grid($grid,$img,height)
{
  $grid.css({"grid-template-columns":"33% 33% 33%"});
  $img.css({"height":height+"px"});
  $img.children().css({"height":height+"px"});
}
function change_to_four_grid($grid,$img,height)
{
  $grid.css({"grid-template-columns":"50% 50%"});
  $img.css({"height":height+"px"});
  $img.children().css({"height":height+"px"});
}
function change_to_two_grid($grid,$img,height)
{
  $grid.css({"grid-template-columns":"100%"});
  $img.css({"height":height+"px"});
  $img.children().css({"height":height+"px"});
}



$(document).ready(function(){


  $(".grid.panel").children().click(function(event){
      // Reset all grid icons color to blue
      $(".grid.panel").children().each(function(){
          $(this).attr("src","Icons/blue_" + $(this).attr("id") + "_grid.png");
      })

      var tpgrid, grid, img;

      tpgrid = $(this).attr("id");
      grid = $(".wallpaper.grid");
      img = grid.children();

      // Change button to active form
      $(this).attr("src","Icons/red_" + tpgrid + "_grid.png");

      // Change grid state
      if(tpgrid == "nine")
      {
        change_to_nine_grid(grid,img,230);
      }
      else if(tpgrid == "four")
      {
        change_to_four_grid(grid,img,300);
      }
      else
      {
        change_to_two_grid(grid,img,550);
      }


  });



});
