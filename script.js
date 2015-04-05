function loadBody(){screen.width<480&&(choose=6,loadHeader()),screen.width>=480&&screen.width<720&&(choose=4),screen.width>=720&&screen.width<1024&&(choose=2),screen.width>=1024&&(choose=0),$.getJSON("http://gdata.youtube.com/feeds/api/users/HovyTech/uploads?alt=json&start-index="+numIndex[pageShow-1]+"&max-results="+numVid[pageShow-1],function(e){totalVid=e.feed.openSearch$totalResults.$t,$("#box").html("");var t="";for(i=0;i<numVid[pageShow-1];i++){var a=e.feed.entry[i].title.$t,n=e.feed.entry[i].media$group.media$thumbnail[0].url,r=e.feed.entry[i].media$group.media$description.$t,o=e.feed.entry[i].link[2].href,s=o.substring(31),u="https://www.youtube.com/embed/"+s+"?rel=0&showinfo=0&autoplay=1&vq=hd1080&autohide=1&modestbranding=1",l="<iframe id=replace"+i+" height="+device[choose]+"px width=100% src="+u+" frameborder=0 allowfullscreen></iframe>",c='<tr><td><table id="video"><tr><th id="title">'+a+"</th></tr>",d='<tr><th><img style="height:60px; position:relative; top:'+device[choose+1]+'px; width:60px; z-index:25;" onClick="document.getElementById(\'video'+i+"').innerHTML = '"+l+"'; this.style.visibility='hidden';\" src=\"Images/Play.png\"></img>",v='<div id="video'+i+'" style="height:'+device[choose]+'px; position:relative; top:-25px; width:100%; z-index:24;"><img style="height:'+device[choose]+'px; width:100%;" src="'+n+'"></img></div></th></tr>';if(r.match("http")){var h=r.search("http"),p=r.substring(h),f=r.substring(0,h-1),m=f+'<br><a href="'+p+'" target="_blank">Link</a>';t='<tr><th><pre id="description">'+m+"</pre></th></tr></table></td></tr>"}else t='<tr><th><pre id="description">'+r+"</pre></th></tr></table></td></tr>";html="",html=c+d+v+t,$("#box").append(html)}$("#pageNum").text(pageShow),$("body").scrollTop(0)})}function loadHeader(){function e(){var e=$(this).scrollTop();Math.abs(i-e)<=a||(e>i&&e>n?$("header").removeClass("show").addClass("hide"):e+$(window).height()<$(document).height()&&$("header").removeClass("hide").addClass("show"),i=e)}var t,i=0,a=5,n=$("header").outerHeight();$(window).scroll(function(){t=!0}),setInterval(function(){t&&(e(),t=!1)},250)}function getFacebookCount(){$.getJSON("https://graph.facebook.com/fql?q=SELECT%20like_count,%20total_count,%20share_count,%20click_count,%20comment_count%20FROM%20link_stat%20WHERE%20url%20=%20%22https://www.facebook.com/pages/HovyTech/755340597847731%22",function(e){var t=e.data[0].total_count;$("#facebook-count").text(t)})}function getTwitterCount(){$.getJSON("http://urls.api.twitter.com/1/urls/count.json?url=https://twitter.com/HovyTech&callback=?",function(e){var t=e.count;$("#twitter-count").text(t)})}function getYouTubeCount(){$.getJSON("http://gdata.youtube.com/feeds/api/users/hovytech?alt=json",function(e){var t=e.entry.yt$statistics.subscriberCount;$("#youtube-count").text(t)})}function getRRVS(){$.getJSON("https://spreadsheets.google.com/feeds/cells/1_Zdo8bgDvRkE13ykZk2iD6dHmPv8GCIgiOqyvOW-3Xc/od6/public/values?alt=json",function(e){var t=e.feed.entry[1].content.$t;$("#rating-count").text(t);var i=e.feed.entry[3].content.$t;$("#rated-count").text(i);var a=e.feed.entry[5].content.$t;$("#review-count").text(a);var n=e.feed.entry[7].content.$t;$("#vote-count").text(n);var r=t.substring(0,1),o=t.substring(2,3);$("#starImage").append(o>=5?'<img id="star" src="Images/Star'+r+'-5.png"></img>':'<img id="star" src="Images/Star'+r+'.png"></img>')})}var submitted=!1;!function(e,t){"function"==typeof define&&define.amd?define(t):e.H5F=t()}(this,function(){var e,t,i,a,n,r,o,s,u,l,c,d,v,h,p,f,m,g,b,y,w,$,C,x,k,N,E=document,A=E.createElement("input"),S=/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,q=/[a-z][\-\.+a-z]*:\/\//i,I=/^(input|select|textarea)$/i;return r=function(e,t){var i=!e.nodeType||!1,a={validClass:"valid",invalidClass:"error",requiredClass:"required",placeholderClass:"placeholder"};if("object"==typeof t)for(var r in a)void 0===t[r]&&(t[r]=a[r]);if(n=t||a,i)for(var s=0,u=e.length;u>s;s++)o(e[s]);else o(e)},o=function(i){var a,n=i.elements,r=n.length,o=!!i.attributes.novalidate;if(b(i,"invalid",u,!0),b(i,"blur",u,!0),b(i,"input",u,!0),b(i,"keyup",u,!0),b(i,"focus",u,!0),b(i,"change",u,!0),b(i,"click",l,!0),b(i,"submit",function(a){e=!0,t||o||i.checkValidity()||w(a)},!1),!v())for(i.checkValidity=function(){return c(i)};r--;)a=!!n[r].attributes.required,"fieldset"!==n[r].nodeName.toLowerCase()&&s(n[r])},s=function(e){var t=e,i=g(t),n={type:t.getAttribute("type"),pattern:t.getAttribute("pattern"),placeholder:t.getAttribute("placeholder")},r=/^(email|url)$/i,o=/^(input|keyup)$/i,s=r.test(n.type)?n.type:n.pattern?n.pattern:!1,u=h(t,s),l=f(t,"step"),v=f(t,"min"),m=f(t,"max"),b=!(""===t.validationMessage||void 0===t.validationMessage);t.checkValidity=function(){return c.call(this,t)},t.setCustomValidity=function(e){d.call(t,e)},t.validity={valueMissing:i,patternMismatch:u,rangeUnderflow:v,rangeOverflow:m,stepMismatch:l,customError:b,valid:!(i||u||l||v||m||b)},n.placeholder&&!o.test(a)&&p(t)},u=function(e){var t=$(e)||e,i=/^(input|keyup|focusin|focus|change)$/i,r=/^(submit|image|button|reset)$/i,o=/^(checkbox|radio)$/i,l=!0;!I.test(t.nodeName)||r.test(t.type)||r.test(t.nodeName)||(a=e.type,v()||s(t),t.validity.valid&&(""!==t.value||o.test(t.type))||t.value!==t.getAttribute("placeholder")&&t.validity.valid?(x(t,[n.invalidClass,n.requiredClass]),C(t,n.validClass)):i.test(a)?t.validity.valueMissing&&x(t,[n.requiredClass,n.invalidClass,n.validClass]):t.validity.valueMissing?(x(t,[n.invalidClass,n.validClass]),C(t,n.requiredClass)):t.validity.valid||(x(t,[n.validClass,n.requiredClass]),C(t,n.invalidClass)),"input"===a&&l&&(y(t.form,"keyup",u,!0),l=!1))},c=function(t){var i,a,n,r,o=!1;if("form"===t.nodeName.toLowerCase()){i=t.elements;for(var s=0,l=i.length;l>s;s++)a=i[s],n=!!a.attributes.required,r=!!a.attributes.pattern,"fieldset"!==a.nodeName.toLowerCase()&&(n||r&&n)&&(u(a),a.validity.valid||o||(e&&a.focus(),o=!0));return!o}return u(t),t.validity.valid},d=function(e){var t=this;t.validationMessage=e},l=function(e){var i=$(e);i.attributes.formnovalidate&&"submit"===i.type&&(t=!0)},v=function(){return k(A,"validity")&&k(A,"checkValidity")},h=function(e,t){if("email"===t)return!S.test(e.value);if("url"===t)return!q.test(e.value);if(t){var a=e.getAttribute("placeholder"),n=e.value;return i=RegExp("^(?:"+t+")$"),n===a?!1:""===n?!1:!i.test(e.value)}return!1},p=function(e){var t={placeholder:e.getAttribute("placeholder")},i=/^(focus|focusin|submit)$/i,r=/^(input|textarea)$/i,o=/^password$/i,s=!!("placeholder"in A);s||!r.test(e.nodeName)||o.test(e.type)||(""!==e.value||i.test(a)?e.value===t.placeholder&&i.test(a)&&(e.value="",x(e,n.placeholderClass)):(e.value=t.placeholder,b(e.form,"submit",function(){a="submit",p(e)},!0),C(e,n.placeholderClass)))},f=function(e,t){var i=parseInt(e.getAttribute("min"),10)||0,a=parseInt(e.getAttribute("max"),10)||!1,n=parseInt(e.getAttribute("step"),10)||1,r=parseInt(e.value,10),o=(r-i)%n;return g(e)||isNaN(r)?"number"===e.getAttribute("type")?!0:!1:"step"===t?e.getAttribute("step")?0!==o:!1:"min"===t?e.getAttribute("min")?i>r:!1:"max"===t?e.getAttribute("max")?r>a:!1:void 0},m=function(e){var t=!!e.attributes.required;return t?g(e):!1},g=function(e){var t=e.getAttribute("placeholder"),i=/^(checkbox|radio)$/i,a=!!e.attributes.required;return!(!a||""!==e.value&&e.value!==t&&(!i.test(e.type)||N(e)))},b=function(e,t,i,a){k(window,"addEventListener")?e.addEventListener(t,i,a):k(window,"attachEvent")&&void 0!==window.event&&("blur"===t?t="focusout":"focus"===t&&(t="focusin"),e.attachEvent("on"+t,i))},y=function(e,t,i,a){k(window,"removeEventListener")?e.removeEventListener(t,i,a):k(window,"detachEvent")&&void 0!==window.event&&e.detachEvent("on"+t,i)},w=function(e){e=e||window.event,e.stopPropagation&&e.preventDefault?(e.stopPropagation(),e.preventDefault()):(e.cancelBubble=!0,e.returnValue=!1)},$=function(e){return e=e||window.event,e.target||e.srcElement},C=function(e,t){var i;e.className?(i=RegExp("(^|\\s)"+t+"(\\s|$)"),i.test(e.className)||(e.className+=" "+t)):e.className=t},x=function(e,t){var i,a,n="object"==typeof t?t.length:1,r=n;if(e.className)if(e.className===t)e.className="";else for(;n--;)i=RegExp("(^|\\s)"+(r>1?t[n]:t)+"(\\s|$)"),a=e.className.match(i),a&&3===a.length&&(e.className=e.className.replace(i,a[1]&&a[2]?" ":""))},k=function(e,t){var i=typeof e[t],a=RegExp("^function|object$","i");return!!(a.test(i)&&e[t]||"unknown"===i)},N=function(e){for(var t=document.getElementsByName(e.name),i=0;t.length>i;i++)if(t[i].checked)return!0;return!1},{setup:r}});var choose=0,device=[500,260,440,230,360,190,180,100],numVid=[5,5,3],numIndex=[1,6,11],pageShow=1,totalVid=0;getFacebookCount(),getTwitterCount(),getYouTubeCount(),getRRVS();


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
