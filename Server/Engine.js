global.require_local = function(name) {
    return require(__dirname + '/' + name);
}

var Mobile = require_local('Mobiles/Mobile'),
  Item = require_local('Items/Item'),
  Gold = require_local('Items/Gold'),
  Container = require_local('Items/Container');

engine = {

};

var m = new Mobile.BaseMobile('Gar');
console.log(m.AccessLevel)
m.Say('Hi!')

var x = new Item.BaseItem();
var y = new Container();
var z = new Gold();
var z2 = new Gold(100);

console.log(y.DisplayName())
console.log(x.DisplayName())
console.log(z.DisplayName())
console.log(z2.DisplayName())
