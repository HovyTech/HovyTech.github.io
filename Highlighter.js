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
  char = ['/</igm', '/<\/\/igm', '/</igm'];
  //Tags
  tag = ['html', 'head'];
  //All the arrays
  all = [char.length, tag.length];
  //Elements length
  charLen = char.length;
  tagLen = tag.length;
  allLen = all.length;
  for (a = 1; a < html; a++) {
    for (b = 1; b < allLen; b++) {
      for (c = 1; c < all[c - 1]; c++) {
        str = document.getElementById('html-' + html);
        if (all[c - 1] = charLen) {
          str.replace(char[c - 1], '<span id="char">' + char[c - 1] + '</span>');
        }
        if (all[c - 1] = tagLen) {
          str.replace(tag[c - 1], '<span id="tag">' + tag[c - 1] + '</span>');
        }
      }
    }
  }
  $('#html-' + html).html(str);
}
