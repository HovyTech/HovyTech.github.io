//--------------------------------------------------LOADING MAIN
(function(position, opacity, blur, header, offset) {
  if (screen.width < 480) {
    header = 150;
    offset = 170;
  } else if (screen.width >= 480 && screen.width < 720) {
    header = 250;
    offset = 140;
  } else if (screen.width >= 720 && screen.width < 1024) {
    header = 250;
    offset = 120;
  } else {
    header = 400;
    offset = 100;
  }

  $('header').css({
    'height': header + 'px'
  });
  
  $('#parallax').css({
    'background-position': 'center -' + offset + 'px',
    'height': (header + (offset * 2)) + 'px'
  });
  
  $('#title').css({
    'line-height': header + 'px'
  });


  $(window).scrollTop(0);

  $(window).scroll(function() {
    //Parallax Image
    position = ($(window).scrollTop() / 3) * -1;
    
    if ($(window).scrollTop() > 0) {
      $('#parallax').css({
        'background-position': 'center ' + (position - offset) + 'px'
      });
      
      $('#title').css({
        'top': position + 'px'
      });
    } else {
      $('#parallax').css({
        'background-position': 'center -' + offset + 'px'
      });
      
      $('#title').css({
        'top': '0px'
      });
    }
    
    //Title Opacity
    opacity = $(window).scrollTop() / header;
    
    if ($(window).scrollTop() < header) {
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
    if ($(window).scrollTop() > header) {
      $('#parallax').css({
        'visibility': 'hidden'
      });
    } else {
      $('#parallax').css({
        'visibility': 'visible'
      });
    }
  });
})();
