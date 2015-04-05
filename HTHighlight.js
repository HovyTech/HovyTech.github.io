alert('')
//--------------------------------------------------Highlight
function highlight() {
  var tag = /(&lt;|&lt;\/)([\w]+)|&gt;/ig;
  var c = document.getElementById("html-0").childNodes[0].innerHTML;
  var dcba = abcd.replace(tag, '<span id="tag">$&</span>';
  document.getElementById("html-0").innerHTML = dcba;
}
highlight();
