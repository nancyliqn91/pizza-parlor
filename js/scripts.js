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
    const address = document.querySelector('#location').value;
    
    let pizzas = [];
    const newPizza = new Pizza(toppings, size, 'order1', pizzas.length + 1);
    pizzas.push(newPizza);
    console.log(pizzas);
    
    const pizzaListElement = document.querySelector(".pizza-list");
    pizzaListElement.innerHTML = ""; 
    pizzas.forEach(function(pizza) {
      const pizzaElement = document.createElement("li");
      const pizzaLink = document.createElement("a");
      pizzaLink.href = "#"; 
      pizzaLink.textContent = `Pizza #${pizza.id}`; 
      pizzaLink.addEventListener("click", function() {
      window.alert("Toppings:", pizza.toppings);
      });
      pizzaElement.appendChild(pizzaLink);
      pizzaListElement.appendChild(pizzaElement);
      // let priceTotal = 0;
      // priceTotal += newPizza.addPrice(); 
      // console.log(priceTotal);
    });

    let priceTotal = 0;
    pizzas.forEach(function(pizza) {
      priceTotal += pizza.addPrice(); 
    });

    document.querySelector(".total-price").innerText = `Price is ${priceTotal} dollars. ${address}.`; 
  }
  
  function handleConfirm(event) {
    event.preventDefault();
    const ordersForm = document.querySelector("form#orders");
    ordersForm.reset();
  }

  window.addEventListener("load", function() {
    document.querySelector("form#orders").addEventListener("submit", handleSubmission);
    document.getElementById("confirm").addEventListener("click", handleConfirm); 
  });