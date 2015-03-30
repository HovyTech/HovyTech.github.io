//Total number of <pre> tags
var total = 1;

//HTML values
//var char = /[<>]/g;

$(document).ready(function() {
  //Load <pre> tag text into array
  var code = [];
  for (a = 0; a < total; a++) {
    code.push($('pre').eq(a).html());
  }
  $('pre').eq(0).html('rfgdfgdrfgdg');
});
