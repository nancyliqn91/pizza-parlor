# Pizza Parlor

#### By _Qian Li_ 😊

#### This is my forth project which demonstrates uses of test-driven development, understanding of constructors and prototypes. 

## Technologies Used

* HTML
* CSS
* JavaScript
* VS code

## Description

It will serve as a website for a pizza company where a user can choose one or more individual toppings (green pepper, cheese, etc.), a size to order a pizza, and see the final cost.

## Setup/Installation Requirements

* Clone the project from Github to the local desktop.
* Open the project folder(pizza-parlor).
* Open the index.html on the Chrome broswer.

## Tests
```
Describe: Pizza()

  Test: "It should return a Pizza object with three properties for toppings, size and name."
  Code: 
  const myPizza = new Pizza(1, 2, 'order1');
  Expected Output: Pizza {toppings: 1, size: 2, name: 'order1'}

Describe: Pizza.prototype.countName()

  test: "It should  checks if object name is less than 4 letters long, and if so changes this name to equal "invalid name"."
  Code:
  const myPizza = new Pizza(1, 2, 'ord');
  myPizza.prototype.countName()
  Expected Output: "invalid name"
  
Describe: Pizza.prototype.addPrice()

  test: "It should return a sum of numbers from inputted number."
  Code:
  const myPizza = new Pizza(1, 2, 'order1');
  myPizza.addPrice()
  Expected Output: 3
  
    
```
## Known Bugs

No bugs 

## License
[MIT](license.txt)
Copyright (c) 2023 Qian Li