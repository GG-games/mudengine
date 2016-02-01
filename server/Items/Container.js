'use strict';

var Item = requre('Item');

class Container extends Item {

  constructor() {
    super();

    this.contents = [];
    this.MaxItems = 10;
    this.TotalWeight = 0;
  }

  get Contents() {
    return contents;
  }

  AddItem(item) {
    this.contents.push(item);
    OnItemAdded(item);
    UpdateTotals();
  }

  OnItemAdded(item) {
  }

  RemoveItem(item) {
    this.contents.splice();
    OnItemRemoved(item);
    UpdateTotals();
  }

  OnItemRemoved(item) {
  }

  Contains(item) {
    return this.contents.indexOf(item) != -1;
  }

  FindItem(item) {
    return this.contents.indexOf(item);
  }

  UpdateTotals() {
    this.TotalWeight = 0;
    for (i=0; i<this.contents.length; i+=1) {
      this.TotalWeight += this.contents[i].Weight;
    }

    if (this.Parent != null && this.Parent instanceof Container) {
      this.Parent.UpdateTotals();
    }
  }
}

module.exports = Container;
