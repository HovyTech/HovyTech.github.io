alert('')
//--------------------------------------------------Global Variables
//Total pre tags
var total = 1;
//Text for pre tags
var html = '';
var css = '';
var js = '';
//-------------------------HTML
//Clean
var html-clean = [/[<]/g, /[>]/g, /[/]/g, /["]/g, /[&]/g];
//Replace
var html-cleanRep = ['&lt;', '&gt;', '&frasl;', '&quot;', '&amp;'];
//Doctype
var html-doctype = /&lt;\!DOCTYPE([\s\S]*?)&gt;/ig;
//Comment
var html-comment = /&lt;\!--([\s\S]*?)--&gt;/ig;
//Tag
var html-tag = /&lt;([\w]+)|&gt;/ig;
//Attribute
var html-att = /([\w\W]+)=/ig;
//Value
var html-val = /&quot;([\s\S]*?)&quot;/ig;
//-------------------------CSS
//Clean
var css-clean = [/["]/g];
//Replace
var css-cleanRep = ['&quot;'];
//Comment
var css-comment = /\/\*([\s\S]*?)\*\//ig;
//Selector
var css-selector = /([\w.#]+)(.|\n){|}/ig;
//Property
var css-property = /([\w\-]+):/ig;
//Value
var css-val = /[\w"'()!,.%\-]+);/ig;
//-------------------------JS
//Clean
var clean = [/[<]/g, /[>]/g, /[/]/g, /["]/g, /[&]/g];
//Replace
var cleanRep = ['&lt;', '&gt;', '&frasl;', '&quot;', '&amp;'];
//Comment
var js-comment = /\/\/([\s\S]*?)\n/ig;

//--------------------------------------------------Highlight
function HTHighlight() {
alert('')
  for (a = 0; a < total; a++) {
alert(html)
    //-------------------------HTML
    if (document.getElementById('html-' + a) != undefined || null) {
      html = getElementById('html').childNodes[a].innerHTML;
alert(html)
      //Clean
      for (b = 0; b < html-clean.length; b++) {
        html = html.replace(html-clean[b], html-cleanRep[b]);
      }
      //DOCTYPE
      html = html.replace(html-doctype, '<span id="html-doctype">$&</span>');
      //Comment
      html = html.replace(html-comment, '<span id="html-comment">$&</span>');
      //Tag
      html = html.replace(html-tag, '<span id="html-tag">$&</span>');
      //Attribute
      html = html.replace(html-att, '<span id="html-att">$&</span>');
      //Value
      html = html.replace(html-val, '<span id="html-val">$&</span>');
    }
alert(html)
    //-------------------------CSS
    if (document.getElementById('css' + a + 1) != undefined || null) {
      css = getElementById('css').childNodes[a].innerHTML;
      //Clean
      for (c = 0; c < css-clean.length; c++) {
        css = css.replace(css-clean[c], css-cleanRep[c]);
      }
      //Comment
      css = css.replace(css-comment, '<span id="css-comment">$&</span>');
      //Selector
      css = css.replace(css-selector, '<span id="css-selector">$&</span>');
      //property
      css = css.replace(css-property, '<span id="css-property">$&</span>');
      //Value
      css = css.replace(css-val, '<span id="css-val">$&</span>');
    //-------------------------JS
    if (document.getElementById('js' + a + 1) != undefined || null) {
      js = getElementById('js').childNodes[a].innerHTML;
      //Clean
      for (b = 0; b < js-clean.length; b++) {
        js = js.replace(js-clean[b], js-cleanRep[b]);
      }
      //DOCTYPE
      js = js.replace(js-doctype, '<span id="js-doctype">$&</span>');
      //Comment
      js = js.replace(js-comment, '<span id="js-comment">$&</span>');
      //Tag
      js = js.replace(js-tag, '<span id="js-tag">$&</span>');
      //Attribute
      js = js.replace(js-att, '<span id="js-att">$&</span>');
      //Value
      js = js.replace(js-val, '<span id="js-val">$&</span>');
    }
  }
}
HTHighlight();
