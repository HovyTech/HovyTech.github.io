function bodyLoad() {
  //--------------------------------------------------Global Variables
  //Show numbers = True or False
  //var showNum = true;
  //Total number of pre tags in body
  //var body = document.body.childNodes;
  var total = 1;
  //for (a = 0; a < body.length; a++) {
    //if (body[a].nodeName = 'PRE') {
      //alert(body[a].nodeName)
      //alert(body[a].nodeType)
      //total = total + 1;
    //}
  //}
  //Store Pre tag text in code array
  var code = [];
  var newCode = [];
  for (b = 0; b < total; b++) {
    code.push(document.getElementsByTagName('PRE')[b].childNodes[0].nodeValue);
  }
  
  //--------------------------------------------------Clean Up
  //Sorting code lines
  //if (showNum = true) {
    //for (c = 0; c < total; c++) {
      //newCode.push(code[c]);
      //newCode[c] = newCode[c].replace(/\n/g, '</li><li>');
      //newCode[c] = '<ol id="code-num"><li>' + newCode[c] + '</li></ol>';
      //while (newCode[c].indexOf('<li></li></ol>') != -1) {
        //newCode[c] = newCode[c].replace('<li></li></ol>', '</ol>');
      //}
    //}
  //} else {
    //for (c = 0; c < total; c++) {
      //newCode.push(code[c]);
      //newCode[c] = newCode[c].replace(/\n/g, '</li><li>');
      //newCode[c] = '<ul id="code-num"><li>' + newCode[c] + '</li></ul>';
      //while (newCode[c].indexOf('<li></li></ul>') != -1) {
        //newCode[c] = newCode[c].replace('<li></li></ul>', '</ul>');
      //}
    //}
  //}
  //Sorting code spaces
  for (d = 0; d < total; d++) {
    newCode.push(code[d]);
    //newCode[d] = newCode[d].replace(/\t/g, '\s\s\s\s');
    newCode[d] = newCode[d].replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
  }
  
  //--------------------------------------------------Insert Clean Code
  for (e = 0; e < total; e++) {
    document.getElementsByTagName('PRE')[e].childNodes[0].nodeValue = newCode[e];
    alert(newCode[e])
  }
}
bodyLoad();
