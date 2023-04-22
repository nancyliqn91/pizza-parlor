function handleConfirm() {

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
}