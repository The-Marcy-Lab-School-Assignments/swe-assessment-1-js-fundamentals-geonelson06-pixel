# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
The error that this block of code has is a lack of a condition in the if/else statement. If/else statements require a condition in order for anything to be altered in the function. In this code, there's no condition after if (isReuben) so there is nothing to base these changes off of. Adding one will fix this issue.

### Question 2
The following code would log "Michael Jordan". This is because the variables bestPlayer and theGOAT both refer to the same thing, so when the name was changed from "Lebron James" to "Michael Jordan", the end result would just be "Michael Jordan".

### Question 3
The following code would log "Laisha is the hardest working person in." "Paul is also the hardest working person". This is because of the function-scoped variables that are stopping the hustler variable for Paul from interrupting and changing the hustler variable for Laisha by splitting them into two with the shoutOut variable.

### Question 4
In JavaScript, rest parameters let a function accept any number of arguments as an array. This is useful when you don’t know how many inputs a function will receive. You create a rest parameter by adding three dots (...) before a parameter name — for example, function example(...values) gathers all extra arguments into an array called values. 

Here’s an example using rest parameters to make a flexible sum function:
```function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

console.log(sum(2, 4));          // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum());              // 0
```
In this function, ...numbers collects all arguments passed into sum(). The .reduce() method then adds them up. Rest parameters make your functions more adaptable and cleaner by allowing them to handle any number of inputs.

### Question 5
Scope is essentially the range in which a variable can affect the rest of the function. You can think of scope as an office workspace, some desks or specific areas within the office are blocked off by walls (or block statements like {}) so that different workers (or data types) can accomplish different tasks without interrupting the others.

Take a look at this example:
```let houseKey = "Front Door Key"; // global scope

function bedroom() {
  let diaryKey = "Secret Diary Key"; // local scope
  console.log(houseKey);
  console.log(diaryKey);
}

bedroom();

console.log(houseKey);
console.log(diaryKey);   // diaryKey is not defined
```

"houseKey" is declared outside the function, so it has global scope — it can be accessed anywhere in the code. "diaryKey" is declared inside the bedroom() function, so it has local (function) scope — it only exists within that function. Trying to use diaryKey outside of bedroom() causes an error because the variable doesn’t “exist” beyond that scope. So, scope helps organize your code and prevent variables from interfering with each other.

### Question 6
In JavaScript, a module is a separate file that contains its own code — such as functions, variables, or classes — which can be reused in other files. Think of a module like a toolbox: it keeps related tools (code) together and lets you share them when needed. Modules make your code more organized, reusable, and easier to maintain. Instead of putting everything in one long file, you can break your program into smaller, focused pieces. This makes it simpler to debug, test, and share code between projects. It also prevents variable name conflicts because each module has its own scope.

Look at this example:
```
// mathUtils.js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };

// app.js
const math = require('./mathUtils');

console.log(math.add(2, 3));      // 5
console.log(math.multiply(4, 5)); // 20
```
In the first file (mathUtils.js), we create two functions — add and multiply — and export them using module.exports, which makes them available to other files. In the second file (app.js), we import the module using require('./mathUtils') and store it in a variable called math. Now we can call math.add() and math.multiply() just like built-in functions. By dividing code into modules, you keep your project neat, readable, and easy to grow as it becomes more complex.

### Question 7
When thid code runs, the values that will be held by fruits are "apple, banana, cherry, and date", but fruitsMinusOne will only hold the values "apple, banana, and cherry". It is necessary to make a copy of the array in order to make it a pure function because if we didn't make that copy, we would then be mutating the original array which would make it an impure function. We want to avoid mutating the input array because it would cause the first output to get replaced by the second output when we need both of them to show at the same time.

### Question 8
I would use a string or number to reqresent a single item in the cart because those two usually refer to individual things being put into a larger data type. I would use a function to represent the entire shopping cart because functions are one of the bigger data types that smaller variables are supposed to be inputted into in order to make the entire thing work properly.

Take a look at this example:
```const shoppingCart = [
  { name: "Wireless Mouse", price: 25.99, quantity: 2 },
  { name: "Mechanical Keyboard", price: 89.99, quantity: 1 },
  { name: "USB-C Cable", price: 9.99, quantity: 3 }
];

// Example: Calculate total cost
let total = 0;
for (const item of shoppingCart) {
  total += item.price * item.quantity;
}

console.log("Total: $" + total.toFixed(2));
```
Each item is represented by an object (so we can store item details together), and the array shoppingCart holds all these item objects. This structure makes it easy to perform operations like updating quantities, removing items, or calculating totals — just by looping through the array and accessing each object’s properties.