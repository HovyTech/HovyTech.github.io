//Total number of <pre> tags
var total = 1;

//HTML values
//var char = /[<>]/g;

function HTHighlight() {
  //Load <pre> tag text into array
  var code = [];
  for (a = 0; a < total; a++) {
    code.push(document.getElementsByTagName('PRE')[a].childNodes[0].nodeValue);
    alert(code[a])
  }
  document.getElementsByTagName('PRE')[0].innerHTML = 'dfgdf';
  $('pre').eq(0).html('rfgdfgdrfgdg');
}
HTHighlight();
