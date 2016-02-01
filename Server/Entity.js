'use strict';

var AccessLevel = require_local('Mobiles/AccessLevel');

class Entity {

  constructor() {
    this.ID = 0;
    this.Name = ''; // Name string of the entity
    this.Description = ''; // Basic description
    this.ShortDescription = '';
    this.LongDescrption = '';
    this.ExtraDescription = ''; // For more detailed examination

    this.AccessLevel = AccessLevel.NPC;
  }

  Look(from) {
    // Returns the description of the entity
    return this.Description;
  }

  DisplayName() {
    return this.Name;
  }

  toString() {
    return this.Name;
  }
}

module.exports = Entity;