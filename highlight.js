//--------------------Global
//Ammount of each <pre> tag
var html = 1;
var css = 1;
var js = 1;
//HTML code
//Put code in order
//Characters
var char = ['<', '>', '</', '/>', '="', '"'];
//Length
var charLen = char.length;
//--------------------HTML
function preHTML() {
  for (a = 0; a < html; a++) {
    var str = document.getElementById('html-' + a).value;
    //Characters
    for (b = 1; b < charLen; b++) {
      //Character count
      var charCount = str.split(char[b - 1]).length - 1;
      var oldPos = str.indexOf(char[b - 1], 0);
      str.replace(oldPos, '<span id="char">' + char[b - 1] + '</span>');
      for (c = 1; c < charCount; c++) {
        var newPos = str.indexOf(char[b - 1], oldPos + 1);
        str.replace(newPos, '<span id="char">' + char[b - 1] + '</span>');
        oldPos = newPos + 1;
      }
    }
    document.getElementById('html-div-' + a).innerHTML = '<pre id="pre">' + str + '</pre>';
  }
}
preHTML();
