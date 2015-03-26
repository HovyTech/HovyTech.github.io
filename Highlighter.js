//Global variables
//Total number of HTML <pre> tags
var html = 1;
//Total number of CSS <pre> tags
var css = 1;
//Total number of JS <pre> tags
var js = 1;

//--------------------------------------------------HTML
alert(str)
function preHTML() {
  //Elements
  //Characters
  var char = ['/</igm', '/<\//igm', '/>/igm', '/\/>/igm', '/="/igm', '/"\s/igm', '/=\'/igm', '/\'\s/igm'];
  //Tags
  //var tag = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'city', 'code', 'col', 'colgroup', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];
  //All the arrays
  var all = [char.length, tag.length];
  //Elements length
  var charLen = char.length;
  var tagLen = tag.length;
  var allLen = all.length;
  //Loop for each <pre> tag
  for (a = 1; a < html; a++) {
    //Loop for each HTML element
    for (b = 1; b < allLen; b++) {
      //Loop for each HTML tag
      for (c = 1; c < all[c - 1]; c++) {
        //Set <pre> text
        var str = document.getElementById('html-' + html);
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
alert(str)
      }
alert(str)
    }
    alert(str)
    //Load highlighted text into <pre>
    $('#html-' + a).html(str);
  }
}
preHTML();
