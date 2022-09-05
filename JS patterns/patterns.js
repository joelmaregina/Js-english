// *********** MODULE PATTERN - Basic structure ************

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       // console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// *********** REVEALING MODULE PATTERN ************
const ItemCtrl = (function() {
    let data = [];
  
    function add(item) {
      data.push(item);
      console.log('Item Added....');
    }
  
    function get(id) {
      return data.find(item => {
        return item.id === id;
      });
    }
  
    return {
      add: add,
      // get: get
    }
  })();
  
  ItemCtrl.add({id: 1, name: 'John'});
  ItemCtrl.add({id: 2, name: 'Mark'});
  console.log(ItemCtrl.get(2));


// ***************** SINGLETON PATTERN *****************
// A manifestation of the module pattern (an immediate anonymous function) but can return only one instance of an object
// As the module pattern it maintains a private reference, which nothing from the ouside can access

  const Singleton = (function() {
    let instance;
  
    function createInstance() {
      const object = new Object({name:'Brad'});
      return object;
    }
  
    return {
      getInstance: function() {
        if(!instance){
          instance = createInstance();
        }
        return instance;
      }
    }
  })();
  
  const instanceA = Singleton.getInstance();
  const instanceB = Singleton.getInstance();
  
  console.log(instanceA === instanceB);
  
  // console.log(instanceA);

// ***************** OBSERVER PATTERN *******************

function EventObserver() {
    this.observers = [];
  }
  
  EventObserver.prototype = {
    subscribe: function(fn) {
      this.observers.push(fn);
      console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
      // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
      this.observers = this.observers.filter(function(item){
        if(item !== fn) {
          return item;
        }
      });
      console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire: function() {
      this.observers.forEach(function(item) {
        item.call();
      });
    }
  }
  
  const click = new EventObserver();
  
  // Event Listeners
  document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
  });
  
  document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
  });
  
  document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurSeconds);
  });
  
  document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurSeconds);
  });
  
  document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
  });
  
  // Click Handler
  const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
  }
  
  const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
  }

// ***************** MEDIATOR PATTERN *******************

  const User = function(name) {
    this.name = name;
    this.chatroom = null;
  }
  
  User.prototype = {
    send: function(message, to) {
      this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
    }
  }
  
  const Chatroom = function() {
    let users = {}; // list of users
  
    return {
      register: function(user) {
        users[user.name] = user;
        user.chatroom = this;
      },
      send: function(message, from, to) {
        if(to) {
          // Single user message
          to.recieve(message, from);
        } else {
          // Mass message
          for(key in users) {
            if(users[key] !== from) {
              users[key].recieve(message, from);
            }
          }
        }
      }
    }
  }
  
  const brad = new User('Brad');
  const jeff = new User('Jeff');
  const sara = new User('Sara');
  
  const chatroom = new Chatroom();
  
  chatroom.register(brad);
  chatroom.register(jeff);
  chatroom.register(sara);
  
  brad.send('Hello Jeff', jeff);
  sara.send('Hello Brad, you are the best dev ever!', brad);
  jeff.send('Hello Everyone!!!!');
  