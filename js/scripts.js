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