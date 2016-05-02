//--------------------------------------------------LOADING MAIN
(function(position, blur) {
  $('#cover').css({
    'height': (screen.availHeight / 2) + 'px'
  });
  
  $(window).scrollTop(0);

  $(window).scroll(function() {
    //Parallax Image
    position = ($(window).scrollTop() / 3) * -1;
    
    if ($(window).scrollTop() > 0) {
      $('#parallax').css({
        'background-position': 'center ' + position + 'px'
      });
    } else {
      $('#parallax').css({
        'background-position': 'center 0px'
      });
    }
    
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
        '-webkit-filter': 'blur(1px)',
        '-moz-filter': 'blur(1px)',
        '-ms-filter': 'blur(1px)',
        '-o-filter': 'blur(1px)',
        'filter': 'blur(1px)'
      });
    }
      
    //Hide Image
    if ($(window).scrollTop() > screen.availHeight) {
      $('#parallax').css({
        'visibility': 'hidden'
      });
    } else if ($(window).scrollTop() < screen.availHeight) {
      $('#parallax').css({
        'visibility': 'visible'
      });
    }
  });
})();