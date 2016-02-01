'use strict';

var GameObject = require_local('GameObject');

class Item extends GameObject {

  constructor() {
    super();

    this.Name = 'Item';
    this.Amount = 1;
    this.Parent = null;
    this.ShortDescription = '';
    this.ActionDescription = '';
    this.Stackable = false;
    this.Moveable = true;
    this.Layer = 0;

    this.TotalWeight = 0;
  }

  CanEquip(mobile) {
    return false;
  }

  StackWith(item) {
    if (item.Stackable && this.Stackable && item.GetType() == this.GetType() && dropped.Name == Name && item != this) {

      this.Amount += item.Amount;
      item.Delete();
      this.UpdateTotals();

      return true;
    }

    return false;
  }

  Consume(amount) {
    amount = amount || 1;

    this.Amount -= amount;
    this.UpdateTotals();

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

  UpdateTotals() {
    this.TotalWeight = this.Weight * this.Amount;

    if (this.Parent != null && this.Parent instanceof Container) {
      this.Parent.UpdateTotals();
    }
  }
}

module.exports = Item;
