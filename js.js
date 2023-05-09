$(function() {
    var
      Node = $('.white-box'),
      BaseWidth = Node.width();
  
    // To initially run the function:
    $(window).resize();
  
    var $scrollingDiv = Node;
    $(window).scroll(function() {
      var winScrollTop = $(window).scrollTop() - 250,
        zeroSizeHeight = $(document).height() - $(window).height(),
        newSize = BaseWidth * (1 - (winScrollTop / zeroSizeHeight) * (3 / 4));
  
      Node.css({
        width: newSize,
      });
    });
  
  });
  
  // Fade Out Image
  $(window).scroll(function() {
    $(".image").css({
      'opacity': 0.25 - (($(this).scrollTop()) / 2500)
    });
  });