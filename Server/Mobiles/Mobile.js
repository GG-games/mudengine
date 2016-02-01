'use strict';

var Entity = require('./entity'),

Race = [
  'Human',
  'Elf'
],

ResistanceType = [
  'Physical',
  'Fire',
  'Cold',
  'Poison',
  'Energy'
];

class Mobile extends Entity {

  constructor(name) {
    super();

    if (name) {
      this.Name = name;
    }

    this.Race = Race.Human;

    this.Stats = [];
    this.Skills = [];

    this.Hunger = 0;
    this.Thirst = 0;

    this.Hidden = false;
    this.Paralyzed = false;

    this.Inventory = null;

    this.X = 0;
    this.Y = 0;
    this.Z = 0;

  }

  static Distance(a, b) {
    const dx = a.X - b.X;
    const dy = a.Y - b.Y;

    return Math.sqrt(dx*dx + dy*dy);
  }

  DistanceTo(target) {
    return Mobile.Distance(this, target);
  }

  Location() {
    // return {this.X, this.Y, this.Z}
  };

  Say(message) {
    console.log(this.Name + ' says "' + message + '"')
  }

}

module.exports = Mobile;
