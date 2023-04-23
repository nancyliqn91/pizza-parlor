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
    // Get the current list of pizzas from local storage, or create an empty array if it doesn't exist yet
    const pizzas = JSON.parse(localStorage.getItem('pizzas')) || [];

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
    
    const newPizza = new Pizza(toppings, size, 'order1', pizzas.length + 1);
    pizzas.push(newPizza);
    // Save the updated list of pizzas to local storage
    localStorage.setItem('pizzas', JSON.stringify(pizzas));

    let totalPrice = 0;
    const pizzaListElement = document.querySelector(".pizza-list");
    pizzaListElement.innerHTML = ""; 
    pizzas.forEach(function(pizza) {
      const pizzaElement = document.createElement("li");
      const pizzaLink = document.createElement("a");
      pizzaLink.href = "#"; 
      pizzaLink.textContent = `Pizza #${pizza.id}`; 
      // pizzaLink.addEventListener("click", function() {
      //   window.alert("Toppings:" + Array.from(pizza.toppings).join(", ")+"Size:" + Array.from(pizza.size).join(", "));
      // });
      pizzaElement.appendChild(pizzaLink);
      pizzaListElement.appendChild(pizzaElement);
      totalPrice += newPizza.addPrice(); 
    });
    
    document.querySelector(".total-price").innerText = `Price is ${totalPrice} dollars. ${address}`; 
  }
  
  function handleConfirm(event) {
    event.preventDefault();
    // Clear the list of pizzas from local storage
    localStorage.removeItem('pizzas'); 
    const ordersForm = document.querySelector("form#orders");
    ordersForm.reset();
  }

  window.addEventListener("load", function() {
    document.querySelector("form#orders").addEventListener("submit", handleSubmission);
    document.getElementById("confirm").addEventListener("click", handleConfirm); 
  });