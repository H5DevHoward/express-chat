var socket = io();
var ip;
$('form').submit(function() {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chat message', function(msg) {
    // $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    //     function(json) {
    //         ip = json.ip;
    //         switch (ip) {
    //             case '153.35.13.33': ip = '我'; break;
    //         }
    //         $('#messages').append('<li>'+ip+'说: '+msg+'</li>');
    //     }
    // );

    $('#messages').append('<li>'+msg+'</li>');
});
