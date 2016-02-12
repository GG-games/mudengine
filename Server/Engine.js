global.require_local = function(name) {
  return require(__dirname + '/' + name);
}
global.require_local_dir = function(name) {
  return require(__dirname + '/' + name + '/' + name);
}

var util = require('util'),
  Client = require_local('Client'),
  Mobiles = require_local_dir('Mobiles'),
  Item = require_local('Items/Item'),
  Gold = require_local('Items/Gold'),
  Container = require_local('Items/Container')
  pg = require('pg');


Engine = {
  io: null,
  db: null,
  clients: [],
  timer: null,
  settings: {
    port: 8080,
    debug: true,

    pg: {
      user: '',
      pass: '',
      host: 'localhost',
      db: ''
    }
  },

  Database: function() {
    util.format('postgres://%s:%s@%s/@s', settings.pg.user, settings.pg.pass, settings.pg.host, settings.pg.db);
  },

  StartTimer: function() {
    Engine.timer = setInterval(Engine.Tick, 100);
  },

  StopTimer: function() {
    Engine.timer.stop();
    Engine.timer = null;
  },

  Tick: function() {

  },

  Log: function() {

  },

  Error: function() {

  },

  AddClient: function(client) {
    if (client instanceof Client) {
      Engine.clients.push(client);
      return true;
    }
    return false;
  },

  RemoveClient: function(client) {
    client.db.end();
    return false;
  },

  CreateClient: function(socket, db) {
    var client = new Client(socket);
    client.db = db;

    if (AddClient(client)) {
      return client;
    }
  },

  Listener: function(socket, db) {
    var client = Engine.CreateClient(socket, db);

    console.log('A user connected from %s', socket.address);

    socket.on('login', function() {
      console.log('User %s authenticated');

    });

    socket.on('chat', function(msg) {
      console.log('message: ' + msg);

      io.emit('chat', msg);
    });

    socket.on('command', function(msg) {
      console.log('command: ' + msg);
    });

    socket.on('disconnect', function(){
      console.log('User disconnected');
      RemoveClient(client);
    });
  },

  Test: function() {
    var x = new Item.BaseItem();
    var y = new Container();
    var z = new Gold();
    var z2 = new Gold(100);

    var m = new Mobiles.BaseMobile('Gar');
    console.log(m.AccessLevel);
    m.Say('Hi!');
  }
}
