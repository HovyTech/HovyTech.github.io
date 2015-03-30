//Total number of <pre> tags
var total = 1;

//HTML values
//var char = /[<>]/g;

function HTHighlight() {
  //Load <pre> tag text into array
  alert('')
  var code = [];
  for (a = 0; a < total; a++) {
    code.push($('pre').eq(a).html());
    alert(code[a])
  }
  $('pre').eq(0).html('rfgdfgdrfgdg');
}
HTHighlight();
