//Global variables
//Total number of HTML <pre> tags
var html = 1;
//Total number of CSS <pre> tags
var css = 1;
//Total number of JS <pre> tags
var js = 1;

//--------------------------------------------------HTML
function preHTML(char, tag, all, charLen, tagLen, allLen, str) {
  //Elements
  //Characters
  char = ['/</igm', '/<\//igm', '/>/igm', '/\/>/igm', '/="/igm', '/"\s/igm', '/=\'/igm', '/\'\s/igm'];
  //Tags
  tag = ['html', 'head'];
  //All the arrays
  all = [char.length, tag.length];
  //Elements length
  charLen = char.length;
  tagLen = tag.length;
  allLen = all.length;
  //Loop for each <pre> tag
  for (a = 1; a < html; a++) {
    //Loop for each HTML element
    for (b = 1; b < allLen; b++) {
      //Loop for each HTML tag
      for (c = 1; c < all[c - 1]; c++) {
        //Set <pre> text
        str = document.getElementById('html-' + html);
        //If element = character
        if (all[c - 1] = charLen) {
          str.replace(char[c - 1], '<span id="char">' + char[c - 1] + '</span>');
        }
        //If element = tag
        if (all[c - 1] = tagLen) {
          str.replace(tag[c - 1], '<span id="tag">' + tag[c - 1] + '</span>');
        }
        //If element = attribute
        if (all[c - 1] = attLen) {
          str.replace(att[c - 1], '<span id="att">' + att[c - 1] + '</span>');
        }
      }
    }
    //Load highlighted text into <pre>
    $('#html-' + a).html(str);
  }
}
