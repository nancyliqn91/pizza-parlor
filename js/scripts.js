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
    
    const newPizza = new Pizza(toppings, size, 'order1', 1);
    let priceTotal = newPizza.addPrice();
    document.querySelector(".total-price").innerText = `Price is ${priceTotal} dollars. ${address}.`;

    let totalPrice = 0;
    const pizzaListElement = document.querySelector(".pizza-list");
    pizzaListElement.innerHTML = ""; // Clear the pizza list
    pizzas.forEach(function(pizza) {
      const pizzaElement = document.createElement("li");
      const pizzaLink = document.createElement("a");
      pizzaLink.href = "#"; // Set the link's href to a placeholder value
      pizzaLink.textContent = `Pizza #${pizza.id}`; // Display the pizza order number as link text
      pizzaLink.addEventListener("click", function() {
        // Add click event listener to show pizza details
        // You can implement the logic to show pizza details here
        console.log(`Pizza #${pizza.id} Details:`);
        console.log("Toppings:", pizza.toppings);
        console.log("Size:", pizza.size);
      });
      pizzaElement.appendChild(pizzaLink);
      pizzaListElement.appendChild(pizzaElement);
      totalPrice += newPizza.addPrice(pizza.toppings.concat(pizza.size[0])); // Calculate total price for all pizzas
    });
    document.querySelector(".total-price").innerText = totalPrice + " dollars"; // Update the total price in the HTML

    ordersForm.reset();
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#orders").addEventListener("submit", handleSubmission);
  });