var todoList = {
    items: [
      { text: 'Call Tom at 9pm', done: true },
      { text: 'Buy some drinks at the supermarket' },
      { text: 'Go to watch a football match' }
    ],
  
    getDoneItems: function() {
      // return items that are done
    },
  
    getPendingItems: function() {
      // return not done items
    },
  
    addItem: function(item) {
      // add item to the items list and return this
    },
  
    removeDoneItems: function() {
      // remove done items from the list and return this
    },
  
    markAllAsDone: function() {
      // mark all items as done
    },
  
    toggleItemStatus: function(itemIndex) {
      // if done -> change to not done, and vice versa
      // then return the toggled item
    }
  };
  // write some examples that use all the methods