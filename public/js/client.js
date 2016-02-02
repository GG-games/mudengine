var socket = io();
var messages = document.getElementById('messages');

socket.on('chat', function(msg){
  messages.innerHTML += '<li>' + msg + '</li>';
});