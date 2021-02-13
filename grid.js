//For pc version
function change_to_nine_grid($grid,$img)
{
  $grid.css({"grid-template-columns":"" + 100/3 + "%" + 100/3 + "%" + 100/3 + "%"});
  $img.css({"height":"auto"});
}
function change_to_four_grid($grid,$img)
{
  $grid.css({"grid-template-columns":"50% 50%"});
  $img.css({"height":"auto"});
}
function change_to_two_grid($grid,$img)
{
  $grid.css({"grid-template-columns":"100%"});
  $img.css({"height":"auto"});
}


//For mobile version
function change_to_nine_grid_mobile($grid,$img,height)
{
  $grid.css({"grid-template-columns":"" + 100/3 + "%" + 100/3 + "%" + 100/3 + "%"});
  $img.css({"height":height/3+"px"});

}
function change_to_four_grid_mobile($grid,$img,height)
{
  $grid.css({"grid-template-columns":"50% 50%"});
  $img.css({"height":height/2+"px"});

}
function change_to_two_grid_mobile($grid,$img,height)
{
  var hheader = $(".header").css("height");
  hheader = parseInt(hheader, 10);
  $grid.css({"grid-template-columns":"100%"});
  $img.css({"height":height - hheader+"px"});
}

//Chenge grid size
function change_grid_state(tpgrid,grid,img)
{
  if(tpgrid == "nine")
  {
    change_to_nine_grid(grid,img);
  }
  else if(tpgrid == "four")
  {
    change_to_four_grid(grid,img);
  }
  else
  {
    change_to_two_grid(grid,img);
  }
}

//Chenge grid size for mobile version
function change_mobile_grid_state(tpgrid,grid,img,height)
{
  // Change grid state
  if(tpgrid == "nine")
  {
    change_to_nine_grid_mobile(grid,img,height);
  }
  else if(tpgrid == "four")
  {
    change_to_four_grid_mobile(grid,img,height);
  }
  else
  {
    change_to_two_grid_mobile(grid,img,height);
  }
}




$(document).ready(function(){
  var tpgrid, grid, img, width, height;

  grid = $(".wallpaper.grid");
  img = grid.children();

  $(window).resize(function(){

    width = $(window).width();
    height = $(window).height();

    if(width > 800){
      $(".grid.panel").children().each(function(){
          if($(this).attr("src").search("red") + 1)
          {
            tpgrid = $(this).attr("id");
            change_grid_state(tpgrid,grid,img);
          }
      });
    }
    else {
      $(".grid.panel").children().each(function(){
          if($(this).attr("src").search("red") + 1)
          {
            tpgrid = $(this).attr("id");
            change_mobile_grid_state(tpgrid,grid,img,height);
          }
      });
    }


  });





  $(".grid.panel").children().click(function(event){

      // Reset all grid icons color to blue
      $(".grid.panel").children().each(function(){
          $(this).attr("src","Icons/blue_" + $(this).attr("id") + "_grid.png");
      });

      width = $(window).width();
      height = $(window).height();
      tpgrid = $(this).attr("id");

      // Change button to active form
      $(this).attr("src","Icons/red_" + tpgrid + "_grid.png");

      if(width > 800)
      {
        change_grid_state(tpgrid,grid,img);
      }
      else
      {
        change_mobile_grid_state(tpgrid,grid,img,height);
      }

  });

});
