class Container extends Item {
  this.contents = [];

  get Contents() {
    return contents;
  }

  AddItem(item) {
    this.contents.push(item);
  }

  RemoveItem(item) {
    this.contents.splice()
  }

  Contains(item) {
    this.contents.indexOf(item) != -1;
  }

  FindItem(item) {
    return this.contents.indexOf(item);
  }
}