var clientID = "ooqlww27vvtq8fth1dmfdft5wzbzg7z";
var usersArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin"];


function insertHTML() {
    
    var userDataHTML = "";
    var userStreaming = "";
    var counter = 0;
    usersArray.forEach(function(user) {
        var rowClass = "primary";
        // user = usersArray[u];
        userDataHTML = "";
        userStreaming = "";
        var accountActive = false;
        console.log("https://api.twitch.tv/kraken/users/" + user + "?client_id=" + clientID);
        
            $.getJSON("https://api.twitch.tv/kraken/users/" + user + "?client_id=" + clientID, function(userData) {
                // accountActive = true;
                var userImage = "<img src=\"" + userData.logo + "\" alt=\"" + userData.display_name + "\">";
                var userName = "<div class=\"userDisplayName\">" + userData.display_name + "</div>";
                var userUrl = " onclick=\"window.open('http://twitch.tv/" + user + "')\"";
                userDataHTML += userImage + userName;
                console.log("https://api.twitch.tv/kraken/streams/"+ userData.display_name + "?client_id=" + clientID);
                console.log(accountActive);
                if (userData.logo != null) {
                    $.getJSON("https://api.twitch.tv/kraken/streams/"+ userData.display_name + "?client_id=" + clientID, function(userStream) {
                    if (counter % 2 == 1) {
                        rowClass = "secondary"
                    }
                    console.log(counter);
                    counter++;
                            console.log("stream = ");
                            console.log(userStream.stream);
                            if (userStream.stream != null) {
                                console.log(userStream.stream.game);
                                userStreaming = "<div class=\"userStreamStatus\"><strong>STATUS:</strong> Online now playing " + userStream.stream.game + "</div>";
                                userDataHTML += userStreaming;
                                // $("#" + user).append(userStreaming);
                            } else {
                                userStreaming = "<div class=\"userStreamStatus\"><strong>STATUS:</strong> Offline</div>";
                            }
                            $("#userList").prepend("<div class=\"row userDetails " + rowClass + "\" id=\"" + user + "\"" + userUrl + "\"><div class=\"col-xs-12\">" +
                            userImage + userName + userStreaming + "</div></div>");
                        
                    });
                } else {
                    $("#userList").append("<div class=\"row userDetails\"><div class=\"col-xs-12 userDisplayName\" id=\"" + user + "\">" + user + " has closed their account</div></div>");
                }
                
            })
            .fail(function() {
            });
    });
}

$(document).ready(function() {
    insertHTML();
var liveStatus = false;
var urlStreams =  "https://api.twitch.tv/kraken/streams/freecodecamp?client_id=" + clientID;

var urlChannel = $.getJSON("https://api.twitch.tv/kraken/channels/freecodecamp?client_id=" + clientID, function(data) {
    // console.log(data);
    self = data;
    var liveStatusHTML = "";
    var streamsJSON = $.getJSON(urlStreams,function(streamData) {
        if (streamData.stream != null) {
            liveStatus = true;
            liveStatusHTML = "<strong>Free Code Camp is LIVE! Tune in now!</strong><br>";
        }
    });
    var channelBannerHTML = "<div class=\"row\"><div class=\"col-xs-12\"><div id=\"bannerDiv" + self.id + "\" class=\"banner\"><a href=\"" + self.url + "\" target=\"_blank\"><img src=\"" + self.profile_banner + "\" alt=\"\"></a></div></div></div>\n";
    var channelStatusHTML = "<div class=\"row\" id=\"channelStatus\"><div class=\"col-xs-12\ status\"><strong>Status: </strong> <a href=\"" + self.url + "\" target=\"_blank\">" + liveStatusHTML + self.status + "</a></div></div>"
    $("#container").prepend(channelBannerHTML + channelStatusHTML);
//   for (objs in data) {
//     self = data[objs];
//     if (self.stream) {
//       if (self.stream.video_banner) {
//         var bannerHTML = "<div class=\"row\"><div class=\"col-xs-12\"><div id=\"bannerDiv" + objs + "\" class=\"banner\"><a href=\"" + self.stream.url + "\" target=\"_blank\"><img src=\"" + self.stream.profile_banner + "\" alt=\"\"></a></div></div></div>\n";
//         var statusHTML = "<div class=\"row\"><div class=\"col-xs-12\ status\"><strong>Status: </strong> <a href=\"" + self.stream.url + "\" target=\"_blank\">" + self.stream.status + "</a></div></div>"
//         
//         console.log(self.stream["video_banner"]);
//       }
//     }
    
//   }
});
// var channelJSON = $.getJSON(urlChannel,function(data) {
    // document.querySelector(".userDetails").addEventListener("click",function() {
    //     window.open("http://twitch.tv/" + this.id,"_blank");
    // });

$("#refresh").on("click", function() {
// });
  // console.log(urlChannel);
  //for (objs in urlChannel) {
    // $("#container").html += ("<div id=\"bannerDiv" + objs + "\"><img src=\"" + objs.stream.video_banner + "\" alt=\"\"></div>");
    // console.log(objs);
    
  //}

function xmlhttpProcess (url, div) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        //myFunction(myArr);
      
      $(div).html("url = " + url + "; myArr = " + Object.keys(myArr) + "; status = " + myArr.status);
      
      return myArr;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}
  // console.log(channelJSON);
  // console.log(streamsJSON);
function myFunction(arr) {
    var out = "out = ";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += arr[i];
    }
    console.log(out);
}
//console.log(JSON.parse(url.responseText));
            
 $.getJSON("https://api.twitch.tv/kraken/streams/freecodecamp?callback=?",function(json) {
    var videoArray = json.videos;
    // for (var i = 0; i < videoArray.length; i++) {
      // console.log(videoArray[i]);
    // }
   //console.log(json);
  })
 });
});