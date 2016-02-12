'use strict';

var BaseItem = require_local('Items/BaseItem');

class Gold extends BaseItem {

  constructor(amount) {
    amount = amount || 1;
    super();

    this.Name = 'Gold Coin';
    this.Amount = amount;
  }

}

module.exports = Gold;