'use strict';

var Entity = require('Entity');

class GameObject extends Entity {

  constructor() {
    super();

    this.Weight = 0;
    this.Light = 0;
    this.Moveable = false;
  }

  Delete() {

  }
}

module.exports = GameObject;