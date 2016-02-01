'use strict';

var Entity = require('./entity');

RoomFlags: [
  'DARK', // Probably remove this for light level instead
  'INDOORS', // Weather, etc. won't apply here
  'SOUNDPROOF', // Combat, yelling, etc. can't be heard outside of this room

  'PRIVATE', //
  'HOUSE', // Player owned home
  'PEACEFUL', // No combat can take place here
  'NOMOB', // NPCs can't enter
  'NOMAGIC', // No magic can be used here
]

class Room extends Entity {

  constructor() {
    super();

    this.ID = 0; // Room ID in the database
    this.ZoneID = 0; // Zone ID in the database
    this.Type = 0; // Room Type

    this.LightLevel = 0; // Brightness of the room. 0 is pitch black

    this.Flags = []; // All RoomFlags applied to this room

    this.Exits = []; // Defines connections to other rooms

    this.AccessLevel = AccessLevel.All; // Defines who can access this room. Set to GameMaster to prevent players from entering.

    this.Objects = []; // Objects in the room
    this.Mobiles = []; // (N)PCs in the room
  }

}

module.exports = Room;