//--------------------------------------------------Highlight
function highlight() {
  var tag = /(&lt;|&lt;\/)([\w]+)|&gt;/ig;
  var abcd = $('pre').html();
  var dcba = abcd.replace(tag, '<span id="tag">$&</span>';
  $('pre').html(dcba);
}
highlight();
