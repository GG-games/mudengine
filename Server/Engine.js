global.require_local = function(name) {
    return require(__dirname + '/' + name);
}

var Mobile = require_local('Mobiles/Mobile'),
  Item = require_local('Items/Item'),
  Container = require_local('Items/Container');

engine = {

};

var m = new Mobile('Gar');
m.Say('Hi!')

var x = new Item();
var y = new Container();

console.log(y.toString())
console.log(y instanceof x);
