'use strict';

var Entity = require_local('Entity'),
  Mobiles = require_local_dir('Mobiles');

class BaseMobile extends Entity {

  constructor(name) {
    super();

    if (name) {
      this.Name = name;
    }

    this.Dead = false;
    this.Female = false;
    this.Hidden = false;
    this.Paralyzed = false;

    this.Title = '';

    this.Stats = [];
    this.Skills = [];

    this.Hunger = 0;
    this.Thirst = 0;

    this.Weight = 0;
    this.Height = 0;

    this.Race = Mobiles.Race.Human;

    this.Inventory = null;

    this.Room = null;

    this.X = 0;
    this.Y = 0;
    this.Z = 0;

  }

  DistanceTo(target) {
    return Mobiles.Distance3D(this.Location, target.Location);
  }

  get Player() {
    return false;
  }

  get Location() {
    return {'X': this.X, 'Y': this.Y, 'Z': this.Z}
  };

  get IsAlive() {
    return !this.Dead;
  }

  get IsUndead() {
    return false;
  }

  get Bleeds() {
    return !this.IsUndead;
  }

  get CurrentRoom() {
    if (this.Room != null) {
      return this.Room;
    }

    return null;
  }

  get Nocturnal() {
    return false;
  }

  Say(message) {
    console.log(this.Name + ' says "' + message + '"')
  }

  Move(direction) {
    var room = this.CurrentRoom;

    if (room == null) {
      return false;
    }

    if (room.CheckMove(this, direction)) {
      room.Move(this, direction)
      return true;
    }

    return false;
  }

}

module.exports = BaseMobile;
