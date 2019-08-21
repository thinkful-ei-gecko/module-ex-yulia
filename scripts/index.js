'use strict';
/* global shoppingList */

// eslint-disable-next-line no-unused-vars

function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  });
  shoppingList.render();
}
console.log(Item);

$(main);
