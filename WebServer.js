var settings = {
    port: 8080,
    debug: true,

    pg: {
      user: '',
      pass: '',
      host: 'localhost',
      db: ''
    }
  },

  util = require('util'),
  express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  Engine = require('./Server/Engine'),
  pg = require('pg'),
  conString = util.format('postgres://%s:%s@%s/@s', settings.pg.user, settings.pg.pass, settings.pg.host, settings.pg.db);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('public'));


io.on('connection', function(socket) {
  // var db = new pg.Client(conString);
  // Engine.Listener(socket, io, db);
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});
