'use strict';

var Entity = require_local('Entity'),

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
    this.Female = false;

    this.Stats = [];
    this.Skills = [];

    this.Hunger = 0;
    this.Thirst = 0;

    this.Weight = 0;
    this.Height = 0;

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

  static Distance3D(a, b) {
    const dx = a.X - b.X;
    const dy = a.Y - b.Y;
    const dz = a.Z - b.Z;

    return Math.sqrt(dx*dx + dy*dy + dz*dz);
  }

  DistanceTo(target) {
    return Mobile.Distance3D(this, target);
  }

  Location() {
    // return {this.X, this.Y, this.Z}
  };

  Say(message) {
    console.log(this.Name + ' says "' + message + '"')
  }

}

module.exports = Mobile;
