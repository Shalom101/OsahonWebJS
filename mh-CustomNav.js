//--------------- nav customization  

	var originalNavBgColor = $('.navbar-two').css('background-color');
  var navItemColor= $('.nav-item').css('color');
  var logoColor = $('.brand').css('color');
  var originalMarginLeft = parseFloat($('.nav-line').css('margin-left'));
  var originalMarginRight = parseFloat($('.nav-line').css('margin-right'));

$(window).scroll(function() {
  // Calculate the scroll position
  var scrollPosition = $(window).scrollTop();

  // Check if the user has scrolled beyond a certain threshold
  if (scrollPosition > 0) {
    // Add the CSS styles for the scrolled state
    $('.navbar-two').css({
      'background-color': 'white'
    });
    $('.nav-item').css({
      'color': '#01172F'
    });
    $('.brand').css({
      'color': '#00879B'
    });
    $('.nav-line').css({
      'margin-left': '0px',
      'margin-right': '0px',
      'transform': 'translateY(-4px)'
    });
  } else {
    // Remove the CSS styles for the initial state
    $('.navbar-two').css({
      'background-color': originalNavBgColor,
    });
     $('.nav-item').css({
      'color': navItemColor,
    });
      $('.brand').css({
      'color': logoColor,
    });
    $('.nav-line').css({
      'margin-left': originalMarginLeft,
      'margin-right': originalMarginRight,
      'transform': 'translateY(4px)'
    });
  }
});
