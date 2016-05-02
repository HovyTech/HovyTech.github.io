//--------------------------------------------------LOADING MAIN
(function(position, blur, factor) {
  $('header').css({
    'height': (screen.height / 2) + 'px'
  });
  
  $('#cover').css({
    'height': (screen.height / 2) + 'px'
  });
  
  factor = 3;

  $(window).scrollTop(0);

  $(window).scroll(function() {
    //Parallax Image
    position = ($(window).scrollTop() / factor) * -1;
    
    $('#parallax').css({
      'background-position': 'center ' + position + 'px'
    });
    
    //Blur Image
    blur = $(window).scrollTop() / factor;
    
    if ($(window).scrollTop() > 0) {
      $('#parallax').css({
        '-webkit-filter': 'blur(' + blur + 'px)',
        '-moz-filter': 'blur(' + blur + 'px)',
        '-ms-filter': 'blur(' + blur + 'px)',
        '-o-filter': 'blur(' + blur + 'px)',
        'filter': 'blur(' + blur + 'px)'
      });
    } else {
      $('#parallax').css({
        '-webkit-filter': 'blur(0px)',
        '-moz-filter': 'blur(0px)',
        '-ms-filter': 'blur(0px)',
        '-o-filter': 'blur(0px)',
        'filter': 'blur(0px)'
      });
    }
      
    //Hide Image
    if ($(window).scrollTop() > screen.height) {
      $('#parallax').css({
        'visibility': 'hidden'
      });
    } else if ($(window).scrollTop() < screen.height) {
      $('#parallax').css({
        'visibility': 'visible'
      });
    }
  });
})();
