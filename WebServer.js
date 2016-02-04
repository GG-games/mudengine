var util = require('util'),
  express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  Engine = require('./Server/Engine');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('public'));


Engine.io = io;
Engine.database = pg;

io.on('connection', function(socket) {
  // var db = new pg.Client(conString);
  // Engine.Listener(socket, db);
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});
