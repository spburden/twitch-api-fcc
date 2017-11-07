$(document).ready(function() {
        var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        channels.forEach(function(channel) {
            var url = 'https://wind-bow.gomix.me/twitch-api/streams/'+channel+'?callback=?';
            $.getJSON( url ).done(function( data ) {
                console.log( data );
                var link = 'https://www.twitch.tv/'+channel;
                console.log(link);
                if (data.stream) {
                    var status = "Online";
                    var game = data.stream.game;
                } else {
                    var status = "Offline";
                }
                var html = '<div class="'+status+'"><a href='+link+'><h3>'+channel+'</h3></a><p class="status">Status: '+status+'</p>';
                if (game) {
                    html += '<p>Game: '+game+'</p>';
                }
                html += '<hr>';
                console.log(html);
                $('.results').append(html);
                // var status = data.stream ? "Online" : "Offline";
              });
    });

    $('#online').click(function() {
        $('.Online').show();
        $('.Offline').hide();
    });
    $('#offline').click(function() {
        $('.Offline').show();
        $('.Online').hide();
    });
    $('#all').click(function() {
        $('.Online').show();
        $('.Offline').show();
    });
});
