function bodyLoad() {
  //--------------------------------------------------Global Variables
  //Total number of pre tags
  var total = 1;
  //Attributes RGB Color
  var attColor = 'rgb(12, 45, 68)';
  //Store Pre tag text in code array
  var code = [];
  var newCode = [];
  for (a = 0; a < total; a++) {
    code.push(document.getElementsByTagName('PRE')[a].childNodes[0].nodeValue);
    newCode.push(code[a]);
  }
  //Values
  var html = [/<(\/)?[A-Za-z][A-Za-z0-9]*(\/)?>/ig, /<(\/)?[A-Za-z][A-Za-z0-9]*/ig];//, /\s\w(.*?)="/ig, /"(.*?)"/ig, /<!--(.*?)-->/ig];
  var charVal = ['<', '</', '>'];
  
  //--------------------------------------------------Clean Up
  //Sorting code spaces
  for (b = 0; b < total; b++) {
    newCode[b] = newCode[b].replace(/\t/g, '\s\s\s\s');
  }
  //Find attributes
  for (c = 0; c < total; c++) {
    for (d = 0; d < att.length; d++) {
      //Create color text
      function attColorText(color) {
        var attText = newCode[c].match(att[d]);
        return '<span color="' + attColor + '">' + attText + '</span>';
      }
      newCode[c] = newCode[c].replace(att[d], attColorText);
      alert(att[d])
      alert(newCode[c])
    }
  }
  
  //--------------------------------------------------Insert Clean Code
  for (e = 0; e < total; e++) {
    document.getElementsByTagName('PRE')[e].childNodes[0].nodeValue = newCode[e];
    alert(newCode[e])
  }
}
bodyLoad();
