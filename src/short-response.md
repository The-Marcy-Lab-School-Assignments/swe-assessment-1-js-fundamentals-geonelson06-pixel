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


### Question 5
Scope is essentially the range in which a variable can affect the rest of the function. You can think of scope as an office workspace, some desks or specific areas within the office are blocked off by walls (or block statements like {}) so that different workers (or data types) can accomplish different tasks without interrupting the others.

Take a look at this example:

### Question 6


### Question 7
When thid code runs, the values that will be held by fruits are "apple, banana, cherry, and date", but fruitsMinusOne will only hold the values "apple, banana, and cherry". It is necessary to make a copy of the array in order to make it a pure function because if we didn't make that copy, we would then be mutating the original array which would make it an impure function. We want to avoid mutating the input array because it would cause the first output to get replaced by the second output when we need both of them to show at the same time.

### Question 8
I would use a string or number to reqresent a single item in the cart because those two usually refer to individual things being put into a larger data type. I would use a function to represent the entire shopping cart because functions are one of the bigger data types that smaller variables are supposed to be inputted into in order to make the entire thing work properly.

Take a look at this example: