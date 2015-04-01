var str = $('textarea').val();
function abc() {
  var replace = str.replace(/[@/\n](.|\n)*?[*]/ig, '');
  alert(replace)
}
abc();
