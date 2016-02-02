'use strict';

var Entity = require_local('Entity'),
  AccessLevel = require_local('Mobiles/AccessLevel'),

Race = {
  'Human': 0,
  'Elf': 1
},

ResistanceType = {
  // Physical
  'Bash': 0,
  'Slash': 1,
  'Pierce': 2,

  // Magical
  'Fire': 10,
  'Cold': 11,
  'Poison': 12,
  'Energy': 13
};

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

    this.Race = Race.Human;

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

  get Player() {
    return false;
  }

  IsAlive() {
    return !this.Dead;
  }

  DistanceTo(target) {
    return Mobile.Distance3D(this, target);
  }

  Location() {
    return {'X': this.X, 'Y': this.Y, 'Z': this.Z}
  };

  Say(message) {
    console.log(this.Name + ' says "' + message + '"')
  }

}

module.exports = BaseMobile;
