roomFlags: [
  NONE,
  DARK,
  INDOORS,
  SOUNDPROOF,

  PRIVATE,
  HOUSE,
  PEACEFUL,
  NOMOB,
  NOMAGIC,
]

class Room {
  this.ID = 0;
  this.ZoneID = 0;
  this.Type = 0;

  this.Name = '';
  this.Description = '';
  this.ExtraDescription = '';
  this.LighLevel = 0;

  this.Flags = [];

  this.Exits = [];

  this.Objects = []; // Objects in the room
  this.Mobiles = []; // (N)PCs in the room

}
