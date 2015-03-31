$(function() {
  var total = 1;
  var pre = [];
  
  for (a = 0; a < total; a++) {
    pre.push($('pre').eq(a).html());
  }
  
  for (b = 0; b < total; b++) {
    var broken = [];
    var start = pre[b].indexOf('&lt;');
    pre[b].substring();
  }
});
