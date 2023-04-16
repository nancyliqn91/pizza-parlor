  // Business logic
  function Pizza(toppings, size, name) {
    this.toppings = toppings;
    this.size = size;
    this.name = name;
  }

  Pizza.prototype.countName = function() {
    if ((this.name).length <4) {
      return 'invalid name'
    }
  }

  Pizza.prototype.addPrice = function() {
    let sum;
    if (this.size === null) {
      return sum = this.toppings + 100;
    }
    else {
      return sum = this.toppings + this.size;
    }
  }