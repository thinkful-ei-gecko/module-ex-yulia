'use strict';
/*global Item, cuid*/

const store = (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  
  //finds a shopping item by id
  const findById = function(id) {
    return this.items.find(function(element) { return element.id === id });
  };
  
  const addItem = function(name) {
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error) {
      console.error('Cannot add item: {error.message}');
    }
  };

  const findAndToggleChecked = function(id) {
    this.findById(id).checked = !this.findById(id).checked;
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(input) {
    this.searchTerm = input;
  };

  const findAndUpdateName = function(id, newName) {
    try{
      Item.validateName(newName);
      this.findById(id).name = newName;
    }
    catch(error) {
      console.error('Cannot update name: {error.message}');
    }
  };

  const findAndDelete = function(id) {
    let foundIndex = this.items.findIndex(function(element){
      return element.id === id;
    });
    this.items.splice(foundIndex, 1);
  };
  return {
    items,
    hideCheckedItems,
    searchTerm,
    setSearchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
  };
}() );