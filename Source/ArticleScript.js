//--------------------------------------------------LOADING MAIN
(function(position, blur) {
  $('header').css({
    'height': '50%'
  });
  
  $('#cover').css({
    'height': '50%'
  });
  
  $(window).scrollTop(0);

  $(window).scroll(function() {
    //Parallax Image
    position = ($(window).scrollTop() / 3) * -1;
    
    $('#parallax').css({
      'background-position': 'center ' + position + 'px'
    });
    
    //Blur Image
    blur = $(window).scrollTop() / 30;
    
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
