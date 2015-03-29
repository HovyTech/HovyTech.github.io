//--------------------Global
//Ammount of each <pre> tag
var html = 1;
var css = 1;
var js = 1;
//Characters
var char = ['<', '>', '</', '/>', '="', '"'];
//Length
var charLen = char.length;
//--------------------HTML
function preHTML() {
var str = '<pre><html></pre>';
alert('')
var preContents = myHTMLString.match(/<pre>.*?<\/pre>/ims).substr(5, -6);
//var preContents = str.match('/(<pre>.*?<\/pre>)|(<code>.*?<\/code>)/igm').substring(5, -6);
alert(preContents)
  for (a = 0; a < html; a++) {
    //Get <pre> string 
    var pre = document.getElementById('html').innerHTML;
alert(pre)
    //Characters
    for (b = 1; b < charLen; b++) {
      //Character count
      var charCount = pre.split(char[b - 1]).length - 1;
      var oldPos = pre.indexOf(char[b - 1]);
      pre.replaceAt(oldPos, '<span id="char">' + char[b - 1] + '</span>');
      for (c = 1; c < charCount; c++) {
        var newPos = pre.indexOf(char[b - 1], oldPos + 1);
        pre.replaceAt(newPos, '<span id="char">' + char[b - 1] + '</span>');
        oldPos = newPos + 1;
      }
    }
  }
}
preHTML();
