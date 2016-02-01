var socket = io();
var messages = document.getElementById('messages');

socket.on('chat message', function(msg){
  messages.innerHTML += '<li>' + msg + '</li>';
});