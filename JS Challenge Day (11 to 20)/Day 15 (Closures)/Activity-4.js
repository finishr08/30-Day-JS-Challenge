/*
Activity 4: Module Pattern
Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
*/

// Task-6

const itemManager = (function () {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      return items;
    },
  };
})();

itemManager.addItem("item1");
itemManager.addItem("item2");
console.log(itemManager.listItems());
itemManager.removeItem("item1");
console.log(itemManager.listItems());
