function bodyLoad() {
  //--------------------------------------------------Global Variables
  //Total number of pre tags
  var total = 1;
  //Store Pre tag text in code array
  var code = [];
  var newCode = [];
  for (a = 0; a < total; a++) {
    code.push(document.getElementsByTagName('PRE')[a].childNodes[0].nodeValue);
    newCode.push(code[a]);
  }
  //Characters
  var att = [/\s.*?="/ig];
  var charVal = ['<', '</', '>'];
  
  //--------------------------------------------------Clean Up
  //Sorting code spaces
  for (b = 0; b < total; b++) {
    newCode[b] = newCode[b].replace(/\t/g, '\s\s\s\s');
  }
  //Find characters
  for (c = 0; c < total; c++) {
    for (d = 0; d < att.length; d++) {
      newCode[c] = newCode[c].replace(att[d], '<span style="color: green;">' + charVal[d] + '</span>');
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
