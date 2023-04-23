  // Business logic
  function Pizza(toppings, size, name, id) {
    this.toppings = toppings;
    this.size = size;
    this.name = name;
    this.id = id;
  }

  Pizza.prototype.countName = function() {
    if ((this.name).length <4) {
      return 'invalid name'
    }
  }

  Pizza.prototype.addPrice = function() {
    if (this.size === null) {
      let sum =this.toppings + 100;
      return sum;
    }
    else {
      let sum = this.toppings + this.size;
      return sum;
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
    const ordersForm = document.querySelector("form#orders");
    const address = document.querySelector('#location').value;
    
    let pizzas = [];
    const newPizza = new Pizza(toppings, size, 'order1', pizzas.length + 1);
    pizzas.push(newPizza);
  
    let priceTotal = 0;
    const pizzaListElement = document.querySelector(".pizza-list");
    pizzaListElement.innerHTML = ""; 
    pizzas.forEach(function(pizza) {
      const pizzaElement = document.createElement("li");
      const pizzaLink = document.createElement("a");
      pizzaLink.href = "#"; 
      pizzaLink.textContent = `Pizza #${pizza.id}`; 
      pizzaLink.addEventListener("click", function() {
      window.alert("Toppings:", pizza.toppings. "Size:", pizza.size);
      });
      pizzaElement.appendChild(pizzaLink);
      pizzaListElement.appendChild(pizzaElement);
      priceTotal += pizza.addPrice(); 
      return priceTotal;
    });

    document.querySelector(".total-price").innerText = `Price is ${priceTotal} dollars. ${address}.`; 

    ordersForm.reset();
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#orders").addEventListener("submit", handleSubmission);
  });