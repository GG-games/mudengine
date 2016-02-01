'use strict';

var Mobile = require_local('Mobile'),
  Item = require_local('Items/Item'),
  AccessLevel = require_local('Mobiles/AccessLevel');

class Spell {

  constructor(caster) {

    this.ID = 0;
    this.Name = ''; // Name string of the entity
    this.Description = ''; // Basic description
    this.ShortDescription = '';
    this.LongDescrption = '';

    this.Caster = caster;
    this.CastSkill = Skill.Magery;

    this.Reagents = [];
    this.CastDelay = 0;

    this.CasterItem = null;
  }

  ConsumeReagents() {
    if (this.CasterItem != null) { // Scrolls or wands do not consume reagents
      return true;
    }
    else if (this.Caster.AccessLevel >= AccesLevel.GameMaster) { // GMs do not consume reagents

    }

    return false;
  }

  TryCast() {
    if (this.CasterItem != null) { // If cast from a scroll of wand, always succeed
      return true;
    }

    return false;
  }

  Cast() {
    if (!this.Caster.IsAlive()) {
      return false;
    }

    return false;
  }

  toString() {
    return this.Name;
  }
}

module.exports = Spell;
