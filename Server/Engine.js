global.require_local = function(name) {
  return require(__dirname + '/' + name);
}

var BaseMobile = require_local('Mobiles/Mobile'),
  Item = require_local('Items/Item'),
  Gold = require_local('Items/Gold'),
  Container = require_local('Items/Container');


var m = new BaseMobile('Gar');
console.log(m.AccessLevel)
m.Say('Hi!')


Engine = {
  Listener: function(socket, io, db) {
    console.log('a user connected');

    socket.on('login', function() {

    });

    socket.on('chat', function(msg) {
      console.log('message: ' + msg);

      io.emit('chat', msg);
    });

    socket.on('command', function(msg) {
      console.log('command: ' + msg);
    });

    socket.on('disconnect', function(){
      console.log('user disconnected');
      db.end();
    });
  }
}


var x = new Item.BaseItem();
var y = new Container();
var z = new Gold();
var z2 = new Gold(100);


gameTimer = setInterval(function() {
  console.log('click')
}, 100);
