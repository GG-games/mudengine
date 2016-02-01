var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat', function(msg){
    console.log('message: ' + msg);

    io.emit('chat', msg);
  });

  socket.on('command', function(msg){
    console.log('command: ' + msg);
  });


  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});
