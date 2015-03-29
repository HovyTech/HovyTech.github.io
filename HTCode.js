//--------------------------------------------------Global Variables
//Total number of pre tags in body
var body = document.body.childNodes;
var total = 0;
for (a = 0; a < body.length; a++) {
  if (body[a].nodeName = 'PRE') {
    total = total + 1;
  }
}
//Store Pre tag text in code array
var code = [];
for (b = 0; b < total; b++) {
  code.push(document.getElementsByTagName("PRE")[b].childNodes[0].nodeValue);
}

//--------------------------------------------------Clean Up

//--------------------------------------------------
