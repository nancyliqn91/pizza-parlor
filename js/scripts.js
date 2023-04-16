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

  function handleSubmission(event) {
    event.preventDefault();
    function toppingFunction() {
      let toppingPrice = 0;
      const toppings = document.getElementsByName("toppings");
      for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
          toppingPrice += parseInt(toppings[i].value);
        }
      }
      return toppingPrice;
    }

    const toppings = toppingFunction();
    const sizeInput = document.querySelector("input[name='size']:checked");
    const size = sizeInput ? parseInt(sizeInput.value) : null;
    
    const newPizza = new Pizza(toppings, size, 'order');
    let priceTotal = newPizza.addPrice();
    document.querySelector(".total-price").innerText = priceTotal + " dollars";
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#orders").addEventListener("submit", handleSubmission);
  });