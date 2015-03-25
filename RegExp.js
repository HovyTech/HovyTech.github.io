//------------------------------------------------------------HTML
//var HTRegExp = new RegExp('=".*?"|=' + "'" + '.*?' + "'" + '', 'igm');
//RegExp
var = HTRegExp = new RegExp(/\="(.*?)\"|\='(.*?)\'/, 'igm');

//Tags
var tag = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'city', 'code', 'col', 'colgroup', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];
//Attributes
var att = ['accesskey', 'class', 'contenteditable', 'contextmenu', 'data-*', 'dir', 'draggable', 'dropzone', 'hidden', 'id', 'lang', 'spellcheck', 'style', 'tabindex', 'title', 'translate', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onerror	script', 'onhashchange', 'onload', 'onmessage', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onresize', 'onstorage', 'onunload',


onblur	script	Fires the moment that the element loses focus
onchange	script	Fires the moment when the value of the element is changed
oncontextmenu	script	Script to be run when a context menu is triggered
onfocus	script	Fires the moment when the element gets focus
oninput	script	Script to be run when an element gets user input
oninvalid	script	Script to be run when an element is invalid
onreset	script	Fires when the Reset button in a form is clicked
onsearch	script	Fires when the user writes something in a search field (for <input="search">)
onselect	script	Fires after some text has been selected in an element
onsubmit	script	Fires when a form is submitted
onkeydown	script	Fires when a user is pressing a key
onkeypress	script	Fires when a user presses a key
onkeyup	script	Fires when a user releases a key
onclick	script	Fires on a mouse click on the element
ondblclick	script	Fires on a mouse double-click on the element
ondrag	script	Script to be run when an element is dragged
ondragend	script	Script to be run at the end of a drag operation
ondragenter	script	Script to be run when an element has been dragged to a valid drop target
ondragleave	script	Script to be run when an element leaves a valid drop target
ondragover	script	Script to be run when an element is being dragged over a valid drop target
ondragstart	script	Script to be run at the start of a drag operation
ondrop	script	Script to be run when dragged element is being dropped
onmousedown	script	Fires when a mouse button is pressed down on an element
onmousemove	script	Fires when the mouse pointer is moving while it is over an element
onmouseout	script	Fires when the mouse pointer moves out of an element
onmouseover	script	Fires when the mouse pointer moves over an element
onmouseup	script	Fires when a mouse button is released over an element
onmousewheel	script	Deprecated. Use the onwheel attribute instead
onscroll	script	Script to be run when an element's scrollbar is being scrolled
onwheel	script	Fires when the mouse wheel rolls up or down over an element
oncopy	script	Fires when the user copies the content of an element
oncut	script	Fires when the user cuts the content of an element
onpaste	script	Fires when the user pastes some content in an element
onabort	script	Script to be run on abort
oncanplay	script	Script to be run when a file is ready to start playing (when it has buffered enough to begin)
oncanplaythrough	script	Script to be run when a file can be played all the way to the end without pausing for buffering
oncuechange	script	Script to be run when the cue changes in a <track> element
ondurationchange	script	Script to be run when the length of the media changes
onemptied	script	Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)
onended	script	Script to be run when the media has reach the end (a useful event for messages like "thanks for listening")
onerror	script	Script to be run when an error occurs when the file is being loaded
onloadeddata	script	Script to be run when media data is loaded
onloadedmetadata	script	Script to be run when meta data (like dimensions and duration) are loaded
onloadstart	script	Script to be run just as the file begins to load before anything is actually loaded
onpause	script	Script to be run when the media is paused either by the user or programmatically
onplay	script	Script to be run when the media is ready to start playing
onplaying	script	Script to be run when the media actually has started playing
onprogress	script	Script to be run when the browser is in the process of getting the media data
onratechange	script	Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode)
onseeked	script	Script to be run when the seeking attribute is set to false indicating that seeking has ended
onseeking	script	Script to be run when the seeking attribute is set to true indicating that seeking is active
onstalled	script	Script to be run when the browser is unable to fetch the media data for whatever reason
onsuspend	script	Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason
ontimeupdate	script	Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media)
onvolumechange	script	Script to be run each time the volume is changed which (includes setting the volume to "mute")
onwaiting	script	
onerror	script	Fires when an error occurs while loading an external file
onshow	script	Fires when a <menu> element is shown as a context menu
ontoggle	script	Fires when the user opens or closes the <details> element
