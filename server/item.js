'use strict';

var GameObject = require('./object');

class Item extends GameObject {
  this.Amount = 0;
  this.Parent = null;

  Consume(amount) {
    amount = amount || 1;

    this.Amount -= amount;
    if (this.Amount <= 0) {
      this.Delete();
    }
  }

  IsAccessibleTo(mobile) {
    return true;
  }

  IsChildOf(container) {
    if (container instanceof Container) {
      return container.Contains(this);
    }
    return false;
  }
}

module.exports = Item;
