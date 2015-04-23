(function() {
  window.DS || (window.DS = {});

  window.DS.DSError = function(message) {
    return this.message = message;
  };

  window.DS.DSError.prototype = new Error();

  window.DS.List = (function() {
    function List() {
      this.items = [];
      this.currentPosition = 0;
    }

    List.prototype.getItem = function() {
      if (!this.isLast()) {
        return this.items[this.currentPosition];
      }
    };

    List.prototype.getElement = List.prototype.getItem;

    List.prototype.find = function(item) {
      var i, index, len, ref, token;
      ref = this.items;
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        token = ref[index];
        if (token === item) {
          return index;
        }
      }
      return -1;
    };

    List.prototype.contains = function(item) {
      return this.find(item) > -1;
    };

    List.prototype.has = List.prototype.contains;

    List.prototype.remove = function(item) {
      var position;
      position = this.find(item);
      if (position !== -1) {
        this.items.splice(position, 1);
        this.moveTo(position);
        return true;
      }
      return false;
    };

    List.prototype.append = function(item) {
      return this.items.push(item);
    };

    List.prototype.insert = function(item, index) {
      if (this.length() <= index || index < 0) {
        return;
      }
      return this.items.splice(index || this.currentPosition, 0, item);
    };

    List.prototype.hasNext = function() {
      return this.currentPosition !== this.length();
    };

    List.prototype.hasPrevious = function() {
      return this.currentPosition > 0;
    };

    List.prototype.next = function() {
      if (this.hasNext()) {
        return ++this.currentPosition;
      }
    };

    List.prototype.previous = function() {
      if (this.hasPrevious()) {
        return --this.currentPosition;
      }
    };

    List.prototype.isLast = function() {
      return this.currentPosition === this.length();
    };

    List.prototype.length = function() {
      return this.items.length;
    };

    List.prototype.size = List.prototype.length;

    List.prototype.clear = function() {
      this.items.splice(0, this.length());
      this.currentPosition = 0;
      return null;
    };

    List.prototype.empty = List.prototype.clear;

    List.prototype.moveTo = function(position) {
      if ((this.length() > position && position >= 0)) {
        return this.currentPosition = position;
      } else {
        throw new window.DS.DSError("Can't move the cursor beyond range");
      }
    };

    List.prototype.front = function() {
      return this.moveTo(0);
    };

    List.prototype.first = function() {
      this.front();
      return this.getItem();
    };

    List.prototype.end = function() {
      return this.moveTo(this.length() - 1);
    };

    List.prototype.last = function() {
      this.end();
      return this.getItem();
    };

    List.prototype.isEmpty = function() {
      return this.length() === 0;
    };

    List.prototype.toString = function() {
      return this.items.toString();
    };

    return List;

  })();

  window.DS.Queue = (function() {
    function Queue() {
      this.items = [];
    }

    Queue.prototype.dequeue = function() {
      return this.items.shift();
    };

    Queue.prototype.enqueue = function(item) {
      return this.items.push(item);
    };

    Queue.prototype.length = function() {
      return this.items.length;
    };

    Queue.prototype.size = Queue.prototype.length;

    Queue.prototype.clear = function() {
      this.items.splice(0, this.items.length);
      return null;
    };

    Queue.prototype.empty = Queue.prototype.clear;

    Queue.prototype.back = function() {
      return this.items[this.items.length - 1];
    };

    Queue.prototype.front = function() {
      return this.items[0];
    };

    Queue.prototype.isEmpty = function() {
      return this.items.length === 0;
    };

    Queue.prototype.toString = function() {
      return this.items.toString();
    };

    return Queue;

  })();

  window.DS.Stack = (function() {
    function Stack() {
      this.items = [];
    }

    Stack.prototype.pop = function() {
      return this.items.pop();
    };

    Stack.prototype.remove = Stack.prototype.pop;

    Stack.prototype.push = function(item) {
      return this.items.push(item);
    };

    Stack.prototype.add = Stack.prototype.push;

    Stack.prototype.length = function() {
      return this.items.length;
    };

    Stack.prototype.size = Stack.prototype.length;

    Stack.prototype.clear = function() {
      this.items.splice(0, this.items.length);
      return null;
    };

    Stack.prototype.empty = Stack.prototype.clear;

    Stack.prototype.top = function() {
      return this.items[this.items.length - 1];
    };

    Stack.prototype.peek = Stack.prototype.top;

    Stack.prototype.isEmpty = function() {
      return this.items.length === 0;
    };

    Stack.prototype.toString = function() {
      return this.items.toString();
    };

    return Stack;

  })();

}).call(this);

//# sourceMappingURL=maps/DS.js.map
