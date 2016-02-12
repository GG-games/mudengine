
var BaseMobile = require_local('Mobiles/BaseMobile'),
  PlayerMobile = require_local('Mobiles/PlayerMobile'),
  AccessLevel = require_local('Mobiles/AccessLevel');

Race = {
  // Humanoid Races
  'Human': 0,
  'Elf': 1,

  'Orc',

  //Animals
  'Canine': 101, // Dogs, Wolves, Coyotes, Jackals, Foxes
  'Feline': 102, // Domestic Cats, Lions, Tigers, Ocelots, Lynxs, Cheetahs, Jaguars
  'Cervine': 103, // Deer, Moose, Elk
  'Bovine': 104, // Cows, Bulls, Oxen, Bison, Buffalo, Sheep, Goats
  'Rodent': 105, // Rats, Squirrels, Mice, Chinchilla, Hamster
  'Reptile': 106, // Snakes, Turtles, Lizards, Chameleons, Dragons
  'Avian': 107, // Eagles, Hawks, Owls, Ostriches, Chickens, Vultures,
  'Porcine': 108, // Pigs, Boars
  'Ursine': 109, // Bears
  'Arachnid': 110,
  'Insect': 111,
  'Plant': 112,

  // Misc races
  'Construct': 201,
  'Elemental': 202,
},

MeatType = {

}

HideType = {

}

PackInstinct = {

}

FoodType = {
  'None': 0,
  'Meat': 1,
  'FruitsAndVegies': 2,
  'GrainsAndHay': 3,
  'Fish': 4,
  'Eggs': 5,
  'Metal': 6
}

SophisticationLevel = {
  'Low': 0,
  'Medium': 1,
  'High': 2
}

AttitudeLevel = {
  'Wicked': 0,
  'Neutral': 1,
  'Goodhearted': 2
}

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

function Distance2D(a, b) {
  const dx = a.X - b.X;
  const dy = a.Y - b.Y;

  return Math.sqrt(dx*dx + dy*dy);
}

function Distance3D(a, b) {
  const dx = a.X - b.X;
  const dy = a.Y - b.Y;
  const dz = a.Z - b.Z;

  return Math.sqrt(dx*dx + dy*dy + dz*dz);
}

module.exports = {
  Race: Race,
  ResistanceType: ResistanceType,
  Distance2D: Distance2D,
  Distance3D: Distance3D,
  AccessLevel: AccessLevel,
  BaseMobile: BaseMobile,
  PlayerMobile: PlayerMobile
};