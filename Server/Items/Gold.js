'use strict';

var Item = require_local('Items/Item');

class Gold extends Item.BaseItem {

  constructor(amount) {
    amount = amount || 1;
    super();

    this.Name = 'Gold Coin';
    this.Amount = amount;
  }

}

module.exports = Gold;