function loadBody(){}function loadHeader(){function t(){var t=$(this).scrollTop();Math.abs(o-t)<=n||(t>o&&t>c?$("header").removeClass("show").addClass("hide"):t+$(window).height()<$(document).height()&&$("header").removeClass("hide").addClass("show"),o=t)}var e,o=0,n=5,c=$("header").outerHeight();$(window).scroll(function(){e=!0}),setInterval(function(){e&&(t(),e=!1)},250)}function getFacebookCount(){$.getJSON("https://graph.facebook.com/fql?q=SELECT%20like_count,%20total_count,%20share_count,%20click_count,%20comment_count%20FROM%20link_stat%20WHERE%20url%20=%20%22https://www.facebook.com/pages/HovyTech/755340597847731%22",function(t){var e=t.data[0].total_count;$("#facebook-count").text(e)})}function getTwitterCount(){$.getJSON("http://urls.api.twitter.com/1/urls/count.json?url=https://twitter.com/HovyTech&callback=?",function(t){var e=t.count;$("#twitter-count").text(e)})}function getYouTubeCount(){$.getJSON("http://gdata.youtube.com/feeds/api/users/hovytech?alt=json",function(t){var e=t.entry.yt$statistics.subscriberCount;$("#youtube-count").text(e)})}function getRRVS(){$.getJSON("https://spreadsheets.google.com/feeds/cells/1_Zdo8bgDvRkE13ykZk2iD6dHmPv8GCIgiOqyvOW-3Xc/od6/public/values?alt=json",function(t){var e=t.feed.entry[1].content.$t;$("#rating-count").text(e);var o=t.feed.entry[3].content.$t;$("#rated-count").text(o);var n=t.feed.entry[5].content.$t;$("#review-count").text(n);var c=t.feed.entry[7].content.$t;$("#vote-count").text(c);var a=e.substring(0,1),u=e.substring(2,3);$("#starImage").append(u>=5?'<img id="star" src="HovyTech/Images/Star'+a+'-5.png"></img>':'<img id="star" src="HovyTech/Images/Star'+a+'.png"></img>')})}getFacebookCount(),getTwitterCount(),getYouTubeCount(),getRRVS();
