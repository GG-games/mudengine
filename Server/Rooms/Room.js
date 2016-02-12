'use strict';

var Entity = require_local('Entity');

RoomFlags: {
  // Basic Flags
  'INDOORS': 0, // Weather, etc. won't apply here
  'SOUNDPROOF': 1, // Combat, yelling, etc. cannot be heard outside of this room

  // Restriction Flags
  'PEACEFUL': 10, // combat cannot take place here
  'NOMOB': 11, // NPCs cannot enter this room
  'NOMAGIC': 12, // magic cannot be used here

  // Special Flags
  'HOUSE': 20, // Player owned home
}

Directions: {
  'north': 0,
  'south': 1,
  'east',
  'west',
  'northeast',
  'northwest',
  'southeast',
  'southwest'
}

class Room extends Entity {

  constructor() {
    super();

    this.ZoneID = 0; // Zone ID in the database
    this.Type = 0; // Room Type

    this.LightLevel = 0; // Brightness of the room. 0 is pitch black

    this.Flags = []; // All RoomFlags applied to this room

    this.Exits = {}; // Defines connections to other rooms

    this.AccessLevel = AccessLevel.All; // Defines who can access this room. Set to GameMaster to prevent players from entering.

    this.Objects = []; // Objects in the room
    this.Mobiles = []; // (N)PCs in the room
  }

  CheckMove(mobile, direction) {
    var exit;

    if (mobile == null || !(mobile instanceof BaseMobile)) {
      return false;
    }
    if (!mobile.CanMove) {
      return false;
    }
    if (!this.HasExit(direction)) {
      return false;
    }

    exit = this.GetExit(direction);
    if (this.CanAccess(mobile, exit))

    return false;
  }

  GetExit(direction) {
    return this.Exits[direction];
  }

  HasExit(direction) {
    if (GetExit(direction) != undefined) {
      return true;
    }

    return false;
  }

  CanAccess(mobile, exit) {
    if (exit.AccessLevel > mobile.AccessLevel) {
      return false;
    }
    if (exit.Locked == true) {
      return false;
    }

    return true;
  }

}

module.exports = Room;