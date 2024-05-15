# Node_Training_HW8
Repository focusing on Studying node with the focus on javascript object-oriented programming, including its characteristics, such as: classes, encapsulation, inheritance, and polymorphism.

### Task

Design and implement an object-oriented program in JavaScript to simulate the functioning of an online bookstore. This assignment will test your understanding of classes, encapsulation, inheritance, and polymorphism.

### **Part 1: Class Design**

1. **Book Class**: Create a class called `Book` to represent individual books. Each book should have properties like title, author, ISBN, price, and availability.
2. **User Class**: Create a class called `User` to represent users of the bookstore. Users should have properties like name, email, and a unique user ID.
3. **Cart Class**: Design a class called `Cart` to simulate a shopping cart. It should have methods to add books, remove books, and calculate the total price of the books in the cart.
4. **Order Class**: Create an `Order` class to represent a user's order. It should include information about the user, the books ordered, and the total price.

### **Part 2: Implementation**

1. **Create Objects**: Instantiate multiple `Book` objects, representing different books available in the bookstore. Also, create a few `User` objects.
2. **Add Books to Cart**: Simulate users adding books to their cart by creating instances of the `Cart` class and using its methods.
3. **Place Orders**: Implement the process of placing an order. Users should be able to create instances of the `Order` class, specifying the books they want to purchase.

### **Part 3: Demonstration**

1. **Create a Scenario**: Design a scenario where users browse books, add them to their carts, and place orders. Simulate interactions between users, carts, and orders.
2. **Interaction**: Demonstrate how objects of different classes interact with each other. For example, a user interacts with a cart, and a cart interacts with orders.
3. **Polymorphism**: Utilize polymorphism by treating different types of books (e.g., fiction, non-fiction) uniformly when users add them to the cart.

### **Part 4: Documentation**

1. **Documentation**: Provide clear and concise comments and documentation for your code. Explain the purpose of each class, method, and property. Describe the interaction between different objects and how encapsulation is maintained.

### **Submission**

Submit your JavaScript program along with detailed documentation and comments that explain your code. Ensure that your code is well-structured and adheres to best practices in object-oriented programming.

**Example**
Here's a simplified example structure to give you an idea of what your code might look like:

```js
class Book {
  constructor(title, author, isbn, price, availability) {
    // Properties and methods...
  }
}

class User {
  constructor(name, email, userId) {
    // Properties and methods...
  }
}

class Cart {
  constructor(user) {
    // Properties and methods...
  }
}

class Order {
  constructor(user, books) {
    // Properties and methods...
  }
}

// Instantiate objects and simulate bookstore interactions...
```

# Documentation

## Classes Description:
### **Book**: Class to represent a book in the store
- **Properties:**
  - **title:** title of the book.
    - **type:** string.
  - **author:** author of the book
    - **type:** string
  - **isbn:** number isbn-10 of the book
    - **type:** string
  - **price:** price if the book
    - **type:** number
  - **availability:** Determines if book is available to sell or not
    - **type:** boolean

### **mysteryBook**: Class to represent books of mystery
- **Properties:**
  - **title:** title of the book.
    - **type:** string.
  - **author:** author of the book
    - **type:** string
  - **isbn:** number isbn-10 of the book
    - **type:** string
  - **price:** price if the book
    - **type:** number
  - **availability:** 
    - **type:** boolean
  - **description:** Description of story of book
    - **type:** string

### **User**: Class to represent customer
- **Properties:**
  - **name:** Name of customer
    - **type:** string.
  - **email:** email of customer
    - **type:** string.
  - **idUser:** identifier of customer
    - **type:** number.


### **Cart**: Class to represent cart of customer
- **Properties:**
  - **user:** User who uses the shopping cart
    - **type:** Object
  - **books:** Array to store books added to cart
    - **type:** Object

- **Methods:**
  - **addBook(book):** Adds book to the cart.
  - **removeBook(book):** removes book from cart.
  - **calculatePrice():** Calculates total price of books


### **Order**: Class to represent order of customer
- **Properties:**
  - **user:** User who placed order
  - **books:** Array of books in the order

- **Methods:**
  - **getTotalPrice():** returns a string with total price of the order