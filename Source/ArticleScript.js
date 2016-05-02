//--------------------------------------------------LOADING MAIN
(function(position, opacity, blur) {
  $(window).scrollTop(0);

  $(window).scroll(function() {
    //Parallax Image
    position = ($(window).scrollTop() / 3) * -1;
    
    if ($(window).scrollTop() > 0) {
      $('#parallax').css({
        'background-position': 'center ' + (position - 100) + 'px'
      });
      
      $('#title').css({
        'position': 'fixed',
        'top': (position * -1) + 'px'
      });
    } else {
      $('#parallax').css({
        'background-position': 'center -100px'
      });
      
      $('#title').css({
        'position': 'fixed',
        'top': '0px'
      });
    }
    
    //Title Opacity
    opacity = $(window).scrollTop() / 400;
    
    if ($(window).scrollTop() < 400) {
      $('#title').css({
        'opacity': (1 - opacity)
      });
    } else {
      $('#title').css({
        'opacity': '0'
      });
    }
    
    //Blur Image
    blur = $(window).scrollTop() / 30;
    
    if (blur > 2) {
      $('#parallax').css({
        '-webkit-filter': 'blur(' + blur + 'px)',
        '-moz-filter': 'blur(' + blur + 'px)',
        '-ms-filter': 'blur(' + blur + 'px)',
        '-o-filter': 'blur(' + blur + 'px)',
        'filter': 'blur(' + blur + 'px)'
      });
    } else {
      $('#parallax').css({
        '-webkit-filter': 'blur(2px)',
        '-moz-filter': 'blur(2px)',
        '-ms-filter': 'blur(2px)',
        '-o-filter': 'blur(2px)',
        'filter': 'blur(2px)'
      });
    }
      
    //Hide Image
    if ($(window).scrollTop() > 400) {
      $('#parallax').css({
        'visibility': 'hidden'
      });
    } else {//else if ($(window).scrollTop() < screen.availHeight) {
      $('#parallax').css({
        'visibility': 'visible'
      });
    }
  });
})();
