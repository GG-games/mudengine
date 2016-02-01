'use strict';

var AccessLevel = [
  'All',
  'Player',
  'GameMaster'
];

class Entity {

  constructor() {
    this.Name = ''; // Name string of the entity
    this.Description = ''; // Basic description
    this.ExtraDescription = ''; // For more detailed examination

    this.AccessLevel = AccessLevel.All;
  }

  Look(from) {
    // Returns the description of the entity
    return this.Description;
  }

  toString() {
    return this.Name;
  }
}

module.exports = Entity;
