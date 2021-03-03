//For pc version
function change_to_nine_grid($grid,$img)
{
  $grid.css({"grid-template-columns":"" + 100/3 + "%" + 100/3 + "%" + 100/3 + "%"});
  $img.each(function(){
  $(this).css({"height": $(this).children().children().css("height")});
  });
  
  $img.children().children().css({"transform":"translate(-50%,-50%)"});
  $img.children().children().css({"position":"absolute"});
}
function change_to_four_grid($grid,$img)
{
  $grid.css({"grid-template-columns":"50% 50%"});
  $img.each(function()
{
  $(this).css({"height": $(this).children().children().css("height")});

});
  $img.children().children().css({"transform":"translate(-50%,-50%)"});
  $img.children().children().css({"position":"absolute"});

}
function change_to_two_grid($grid,$img)
{
  $grid.css({"grid-template-columns":"100%"});
  $img.each(function()
{
  $(this).css({"height": $(this).children().children().css("height")});

});
  $img.children().children().css({"transform":"translate(-50%,-50%)"});
  $img.children().children().css({"position":"absolute"});

}


//For mobile version
function change_to_nine_grid_mobile($grid,$img,height)
{
  $grid.css({"grid-template-columns":"" + 100/3 + "%" + 100/3 + "%" + 100/3 + "%"});
  $img.css({"height":height/3+"px"})
  $img.children().children().css({"transform":"translate(-50%,-50%)"});
  $img.children().children().css({"position":"absolute"});

}
function change_to_four_grid_mobile($grid,$img,height)
{
  $grid.css({"grid-template-columns":"50% 50%"});
  $img.css({"height":height/2+"px"});
  $img.children().children().css({"transform":"translate(-50%,-50%)"});
  $img.children().children().css({"position":"absolute"});

}
function change_to_two_grid_mobile($grid,$img,height)
{
  var hheader = $(".header").css("height");
  hheader = parseInt(hheader, 10);
  $grid.css({"grid-template-columns":"100%"});
  $img.css({"height":height - hheader+"px"});
  $img.children().children().css({"transform":"translate(-50%,-50%)"});
  $img.children().children().css({"position":"absolute"});
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

function upgrade_grid(tpgrid,grid,img,height,width)
{
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
}




$(document).ready(function(){
  var tpgrid, grid, img, width, height;

  grid = $(".wallpaper.grid");
  img = grid.children();
  width = $(window).width();
  height = $(window).height();

  $(".grid.panel").children().last()
  .attr("src","Icons/red_" + $(".grid.panel").children().last().attr("id") + "_grid.png");

  upgrade_grid(tpgrid,grid,img,height,width);


  $(window).resize(function(){

    width = $(window).width();
    height = $(window).height();
    upgrade_grid(tpgrid,grid,img,height,width);
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
