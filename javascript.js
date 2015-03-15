//--------------------------------------------------LOADING DESKTOP VIDEOS AND INFO
//Get video image
var getDesktop = function() {
  $.getJSON('http://gdata.youtube.com/feeds/api/users/HovyTech/uploads?alt=json', function(data) {
    var html = '';
    var strDescription = '';
//Get total amount of videos
    var numVid = data.feed.openSearch$totalResults.$t;
//Get needed information
    for (i = 0; i < numVid; i++) {
      var title = data.feed.entry[i].title.$t;
      var image = data.feed.entry[i].media$group.media$thumbnail[0].url;
      var link = data.feed.entry[i].link[2].href;
      var id = link.substring(31);
      var url = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1&vq=hd1080&autohide=1';
      var iframe = '<iframe id=replace' + i + ' height=500px width=100% src=' + url + ' frameborder=0 allowfullscreen></iframe>';
      var description = data.feed.entry[i].media$group.media$description.$t;
      var strTitle = '<tr><td><table id="video"><tr><th id="title">' + title + '</th></tr>';
      var strImage = '<tr><th><img style="height:60px; position:relative; top:260px; width:60px; z-index:25;" onClick="document.getElementById(' + "'" + 'video' + i + "'" + ').innerHTML = ' + "'" + iframe + "'" + '; this.style.visibility=' + "'" + 'hidden' + "'" + ';" src="Images/Play.png"></img>';
      var strIframe = '<div id="video' + i + '" style="height:500px; position:relative; top:-25px; width:100%; z-index:24;"><img style="height:500px; width:100%;" src="' + image + '"></img></div></th></tr>';
      if (description.match('http')) {
        var beginPos = description.search('http');
        var descLink = description.substring(beginPos);
        var descText = description.substring(0, beginPos - 1);
        var strDescStitch = descText + '<br /><a href="' + descLink + '" target="_blank">Link</a>';
        strDescription = '<tr><th><pre id="description">' + strDescStitch + '</pre></th></tr></table></td></tr>';
      } else {
        strDescription = '<tr><th><pre id="description">' + description + '</pre></th></tr></table></td></tr>';
      }
//Check if there is a description
      html = html.concat(strTitle, strImage, strIframe, strDescription);
    }
//Load information into table
    $('#box').html(html);
  });
};
//--------------------------------------------------LOADING TABLET VIDEOS AND INFO
//Get video image
var getTablet = function() {
  $.getJSON('http://gdata.youtube.com/feeds/api/users/HovyTech/uploads?alt=json', function(data) {
    var html = '';
    var strDescription = '';
//Get total amount of videos
    var numVid = data.feed.openSearch$totalResults.$t;
//Get needed information
    for (i = 0; i < numVid; i++) {
      var title = data.feed.entry[i].title.$t;
      var image = data.feed.entry[i].media$group.media$thumbnail[0].url;
      var link = data.feed.entry[i].link[2].href;
      var id = link.substring(31);
      var url = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1&vq=hd1080&autohide=1';
      var iframe = '<iframe id=replace' + i + ' height=440px width=100% src=' + url + ' frameborder=0 allowfullscreen></iframe>';
      var description = data.feed.entry[i].media$group.media$description.$t;
      var strTitle = '<tr><td><table id="video"><tr><th id="title">' + title + '</th></tr>';
      var strImage = '<tr><th><img style="height:60px; position:relative; top:230px; width:60px; z-index:25;" onClick="document.getElementById(' + "'" + 'video' + i + "'" + ').innerHTML = ' + "'" + iframe + "'" + '; this.style.visibility=' + "'" + 'hidden' + "'" + ';" src="Images/Play.png"></img>';
      var strIframe = '<div id="video' + i + '" style="height:440px; position:relative; top:-25px; width:100%; z-index:24;"><img style="height:440px; width:100%;" src="' + image + '"></img></div></th></tr>';
      if (description.match('http')) {
        var beginPos = description.search('http');
        var descLink = description.substring(beginPos);
        var descText = description.substring(0, beginPos - 1);
        var strDescStitch = descText + '<br /><a href="' + descLink + '" target="_blank">Link</a>';
        strDescription = '<tr><th><pre id="description">' + strDescStitch + '</pre></th></tr></table></td></tr>';
      } else {
        strDescription = '<tr><th><pre id="description">' + description + '</pre></th></tr></table></td></tr>';
      }
//Check if there is a description
      html = html.concat(strTitle, strImage, strIframe, strDescription);
    }
//Load information into table
    $('#box').html(html);
  });
};
//--------------------------------------------------LOADING PHABLET VIDEOS AND INFO
//Get video image
var getPhablet = function() {
  $.getJSON('http://gdata.youtube.com/feeds/api/users/HovyTech/uploads?alt=json', function(data) {
    var html = '';
    var strDescription = '';
//Get total amount of videos
    var numVid = data.feed.openSearch$totalResults.$t;
//Get needed information
    for (i = 0; i < numVid; i++) {
      var title = data.feed.entry[i].title.$t;
      var image = data.feed.entry[i].media$group.media$thumbnail[0].url;
      var link = data.feed.entry[i].link[2].href;
      var id = link.substring(31);
      var url = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1&vq=hd1080&autohide=1';
      var iframe = '<iframe id=replace' + i + ' height=360px width=100% src=' + url + ' frameborder=0 allowfullscreen></iframe>';
      var description = data.feed.entry[i].media$group.media$description.$t;
      var strTitle = '<tr><td><table id="video"><tr><th id="title">' + title + '</th></tr>';
      var strImage = '<tr><th><img style="height:60px; position:relative; top:190px; width:60px; z-index:25;" onClick="document.getElementById(' + "'" + 'video' + i + "'" + ').innerHTML = ' + "'" + iframe + "'" + '; this.style.visibility=' + "'" + 'hidden' + "'" + ';" src="Images/Play.png"></img>';
      var strIframe = '<div id="video' + i + '" style="height:360px; position:relative; top:-25px; width:100%; z-index:24;"><img style="height:360px; width:100%;" src="' + image + '"></img></div></th></tr>';
      if (description.match('http')) {
        var beginPos = description.search('http');
        var descLink = description.substring(beginPos);
        var descText = description.substring(0, beginPos - 1);
        var strDescStitch = descText + '<br /><a href="' + descLink + '" target="_blank">Link</a>';
        strDescription = '<tr><th><pre id="description">' + strDescStitch + '</pre></th></tr></table></td></tr>';
      } else {
        strDescription = '<tr><th><pre id="description">' + description + '</pre></th></tr></table></td></tr>';
      }
//Check if there is a description
      html = html.concat(strTitle, strImage, strIframe, strDescription);
    }
//Load information into table
    $('#box').html(html);
  });
};
//--------------------------------------------------LOADING MOBILE VIDEOS AND INFO
//Get video image
var getMobile = function() {
  $.getJSON('http://gdata.youtube.com/feeds/api/users/HovyTech/uploads?alt=json', function(data) {
    var html = '';
    var strDescription = '';
//Get total amount of videos
    var numVid = data.feed.openSearch$totalResults.$t;
//Get needed information
    for (i = 0; i < numVid; i++) {
      var title = data.feed.entry[i].title.$t;
      var image = data.feed.entry[i].media$group.media$thumbnail[0].url;
      var link = data.feed.entry[i].link[2].href;
      var id = link.substring(31);
      var url = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1&vq=hd1080&autohide=1';
      var iframe = '<iframe id=replace' + i + ' height=180px width=100% src=' + url + ' frameborder=0 allowfullscreen></iframe>';
      var description = data.feed.entry[i].media$group.media$description.$t;
      var strTitle = '<tr><td><table id="video"><tr><th id="title">' + title + '</th></tr>';
      var strImage = '<tr><th><img style="height:60px; margin:50% 0; position:relative; top:auto; width:60px; z-index:25;" onClick="document.getElementById(' + "'" + 'video' + i + "'" + ').innerHTML = ' + "'" + iframe + "'" + '; this.style.visibility=' + "'" + 'hidden' + "'" + ';" src="Images/Play.png"></img>';
      var strIframe = '<div id="video' + i + '" style="height:180px; position:relative; top:-25px; width:100%; z-index:24;"><img style="height:auto; width:100%;" src="' + image + '"></img></div></th></tr>';
      if (description.match('http')) {
        var beginPos = description.search('http');
        var descLink = description.substring(beginPos);
        var descText = description.substring(0, beginPos - 1);
        var strDescStitch = descText + '<br /><a href="' + descLink + '" target="_blank">Link</a>';
        strDescription = '<tr><th><pre id="description">' + strDescStitch + '</pre></th></tr></table></td></tr>';
      } else {
        strDescription = '<tr><th><pre id="description">' + description + '</pre></th></tr></table></td></tr>';
      }
//Check if there is a description
      html = html.concat(strTitle, strImage, strIframe, strDescription);
    }
//Load information into table
    $('#box').html(html);
  });
};
var headerLoad = function() {
//--------------------------------------------------HIDE SHOW HEADER
//Header Show Hide
  var didScroll;
  var oldScroll = 0;
  var delta = 5;
  var headerHeight = $('header').outerHeight();
//Checking for scroll
  $(window).scroll(function(event) {
    didScroll = true;
  });
//Scrolled a certain amount
  setInterval(function() {
    if(didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
//Execute hide show
  function hasScrolled() {
    var newScroll = $(this).scrollTop();
    if (Math.abs(oldScroll - newScroll) <= delta)
      return;
//Determan hide or show
    if ((newScroll > oldScroll) && (newScroll > headerHeight)) {
      $('header').removeClass('show').addClass('hide');
    } else if ((newScroll + $(window).height()) < $(document).height()) {
      $('header').removeClass('hide').addClass('show');
    }
    oldScroll = newScroll;
  }
};
//--------------------------------------------------GET SOCIAL COUNTS  
//Facebook count
var getFacebookCount = function() {
  $.getJSON('https://graph.facebook.com/fql?q=SELECT%20like_count,%20total_count,%20share_count,%20click_count,%20comment_count%20FROM%20link_stat%20WHERE%20url%20=%20%22https://www.facebook.com/pages/HovyTech/755340597847731%22', function(data) {
    var facebook = data.data[0].total_count;
    $('#facebook_count').text(facebook);
  });
};
//Twitter count
var getTwitterCount = function() {
  $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url=https://twitter.com/HovyTech&callback=?', function(data) {
    var twitter = data.count;
    $('#twitter_count').text(twitter);
  });
};
//YouTube count
var getYouTubeCount = function() {
  $.getJSON('http://gdata.youtube.com/feeds/api/users/hovytech?alt=json', function(data) {
    var youtube = data.entry.yt$statistics.subscriberCount;
    $('#youtube_count').text(youtube);
  });
};
