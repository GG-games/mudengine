
Race = {
  Human: 0,
  Elf: 1
}

ResistanceType = {
  Physical,
  Fire,
  Cold,
  Poison,
  Energy
}

Mobile = function() {

  this.Name = '';

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

  get Location = function() {
    return {this.X, this.Y, this.Z}
  };

}
