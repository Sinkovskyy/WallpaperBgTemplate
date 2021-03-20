function img_scale_hover($img,hover,unhover = "100%")
{

  // Change image size when window change size
  $img.css({
    "height":"auto",
    "width":unhover
  });

  // Hover and unhover
  $img.mouseover(function(){
    $(this).css({
      "width":hover,
      "height":"auto"
    });
  }).mouseleave(function(){
    $(this).css({
      "width":unhover,
      "height":"auto"
    });
  });

}

function img_mobile_scale_hover($img,hover,unhover = "101%")
{
  // Change size when window change size
  $img.css({
    "width":"auto",
    "height":unhover
  });

// Hover and unhover
  $img.mouseover(function(){
    $(this).css({
      "height":hover,
      "width":"auto"
    });
  }).mouseleave(function(){
    $(this).css({
      "height":unhover,
      "width":"auto"
    });
  });

}

// Change container size relatively on img. Bad practive
function changeContainerSizeByImage($container)
{
  var size = $container.children().children().css("height");
  $container.each(function(){
    $(this).css({"height": size});
  });
}

//For pc version
function change_to_nine_grid($grid,$container)
{
  // Declare image variable
  var $img = $container.children().children();

  // Change grid template
  $grid.css({"grid-template-columns":"" + "1fr" + " 1fr" + " 1fr"});


    //Scale image size when hover on them//Scale image size when hover on them
  img_scale_hover($img,"115%");

  changeContainerSizeByImage($container);

  // Change image to absolute after container get scalling relatively on img
  $img.css({"transform":"translate(-50%,-50%)"});
  $img.css({"position":"absolute"});
}


function change_to_four_grid($grid,$container)
{
  // Declare image variable
  var $img = $container.children().children();

  // Change grid template
  $grid.css({"grid-template-columns":"50% 50%"});


  //Scale image size when hover on them
  img_scale_hover($img,"105%");

  changeContainerSizeByImage($container);

  // Change image to absolute after container get scalling relatively on img
  $container.children().children().css({"transform":"translate(-50%,-50%)"});
  $container.children().children().css({"position":"absolute"});

}




function change_to_two_grid($grid,$container)
{
  // Declare image variable
  var $img = $container.children().children();

  // Change grid template
  $grid.css({"grid-template-columns":"100%"});

  //Scale image size when hover on them
  img_scale_hover($img,"100%");

  changeContainerSizeByImage($container);
  // Change image to absolute after container get scalling relatively on img
  $container.children().children().css({"transform":"translate(-50%,-50%)"});
  $container.children().children().css({"position":"absolute"});

}


//For mobile version
function change_to_nine_grid_mobile($grid,$container,height)
{
  var $img = $container.children().children();

  $grid.css({"grid-template-columns":"" + 100/3 + "%" + 100/3 + "%" + 100/3 + "%"});
  $container.css({"height":height/3+"px"})

  // Change image to absolute after container get scalling relatively on img
  $container.children().children().css({"transform":"translate(-50%,-50%)"});
  $container.children().children().css({"position":"absolute"});

  //Scale image size when hover on them
  img_mobile_scale_hover($img,"115%");

}


function change_to_four_grid_mobile($grid,$container,height)
{
  var $img = $container.children().children();
  $grid.css({"grid-template-columns":"50% 50%"});
  $container.css({"height":height/2+"px"});

  // Change image to absolute after container get scalling relatively on img
  $container.children().children().css({"transform":"translate(-50%,-50%)"});
  $container.children().children().css({"position":"absolute"});

  //Scale image size when hover on them
  img_mobile_scale_hover($img,"105%");
}


function change_to_two_grid_mobile($grid,$container,height)
{

  var hheader = $(".header").css("height"),
      $img = $container.children().children();
  hheader = parseInt(hheader, 10);
  $grid.css({"grid-template-columns":"100%"});
  $container.css({"height":height - hheader+"px"});

  // Change image to absolute after container get scalling relatively on img
  $container.children().children().css({"transform":"translate(-50%,-50%)"});
  $container.children().children().css({"position":"absolute"});

  //Scale image size when hover on them
  img_mobile_scale_hover($img,"101%");
}

//Chenge grid size
function change_grid_state(tpgrid,grid,container)
{
  if(tpgrid == "nine")
  {
    change_to_nine_grid(grid,container);
  }
  else if(tpgrid == "four")
  {
    change_to_four_grid(grid,container);
  }
  else
  {
    change_to_two_grid(grid,container);
  }
}

//Chenge grid size for mobile version
function change_mobile_grid_state(tpgrid,grid,container,height)
{
  // Change grid state
  if(tpgrid == "nine")
  {
    change_to_nine_grid_mobile(grid,container,height);
  }
  else if(tpgrid == "four")
  {
    change_to_four_grid_mobile(grid,container,height);
  }
  else
  {
    change_to_two_grid_mobile(grid,container,height);
  }
}

function update_grid()
{
    grid = $(".wallpaper.grid");
    container = grid.children();
    width = $(window).width();
    height = $(window).height();

    // For page.html
    if(!$(".grid.panel")[0])
    {
      if(width <= 800)
      {
        tpgrid = "two";
        change_mobile_grid_state(tpgrid,grid,container,height);
      }
      else
      {
        tpgrid = "nine"
        change_grid_state(tpgrid,grid,container);
      }

    }

    // For main.html
    if(width > 800){
      $(".grid.panel").children().each(function(){
          if($(this).attr("src").search("red") + 1)
          {
            tpgrid = $(this).attr("id");
            change_grid_state(tpgrid,grid,container);
          }
      });
    }
    else {
      $(".grid.panel").children().each(function(){
          if($(this).attr("src").search("red") + 1)
          {
            tpgrid = $(this).attr("id");
            change_mobile_grid_state(tpgrid,grid,container,height);
          }
      });
  }
  grid.css({"opacity":"1"});
}



$(document).ready(function(){


  var tpgrid, grid, container, width, height;

  grid = $(".wallpaper.grid");
  container = grid.children();
  width = $(window).width();
  height = $(window).height();

  // Auto-set red icon for last grid icon
  $(".grid.panel").children().last()
  .attr("src","assets/red_" + $(".grid.panel").children().last().attr("id") + "_grid.png");

  update_grid();

  // Resize trigger
  $(window).resize(function(){
    width = $(window).width();
    height = $(window).height();
    update_grid();
  });




  // On icon grid click
  $(".grid.panel").children().click(function(event){

      // Reset all grid assets color to blue
      $(".grid.panel").children().each(function(){
          $(this).attr("src","assets/blue_" + $(this).attr("id") + "_grid.png");
      });

      width = $(window).width();
      height = $(window).height();
      tpgrid = $(this).attr("id");

      // Change button to active form
      $(this).attr("src","assets/red_" + tpgrid + "_grid.png");

      update_grid();

  });

});
