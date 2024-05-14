//---------- PART 1 ----------------
class Book {
  constructor(title, author, isbn, price, availability) {
    // Properties and methods...
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }
}

class User {
  constructor(name, email, userId) {
    // Properties and methods...
    this.name = name;
    this.email = email;
    this.userId = userId;
  }
}

class Cart {
  constructor(user) {
    // Properties and methods...
    this.user = user;
    this.books = [];
  }

  //push book into this.book array
  addBook(book) {
    try {
      if(book.availability === true){
        this.books.push(book);
      } else {
       throw new Error(`Book: ${book.title}  is unavailble`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  //removing book from array of books property
  removeBook(book) {
    const index = this.books.indexOf(book)
    if(index !== -1) {
      this.books.splice(index,1);
    }
  }

  //calculate price by iterating through array of books property
  calculatePrice() {
    let totalPrice = 0;
    this.books.forEach(book => {
      totalPrice += book.price;  
    });
    return totalPrice
  }
}

class Order {
  constructor(user, books) {
    // Properties and methods...
    this.user = user;
    this.books = books;
  }

  // get total price of order from cart
  totalPrice(cart) {
    return ' total price: R$' + cart.calculatePrice();
  }
}
//------------------------------------

// ---------- PART 2 -----------------

// Instantiate objects and simulate bookstore interactions...

//Creating Books
const book1 = new Book('O alienista', 'Machado de Assis', '856356093X', 32.17, true);
const book2 = new Book('Harry Potter: A pedra filosofal', 'J.K. Rowlling', '8532530788', 46.50, true);
const book3 = new Book('Um caminho para a liberdade', 'Jojo Moyes', '8551005456', 55.92, true)

//Creating Users
const user1 = new User('Vinicius', 'vvieiradesouza.laba@solvd.com', 1);
const user2 = new User('John', 'jdoe.laba@solvd.com', 2);

//Creating cart and order for user 1
const cart1 = new Cart(user1);
const order1 = new Order(user1, cart1.books);

//Creating cart and order for user 2
const cart2 = new Cart(user2);
const order2 = new Order(user2, cart2.books);

// Adding books to cart1
cart1.addBook(book1);
cart1.addBook(book3);

// Adding books to cart2
cart2.addBook(book2);

//logging orders
console.log('\nOrder 1: ');
console.log(order1);
console.log(order1.totalPrice(cart1));

console.log('\nOrder 2: ');
console.log(order2);
console.log(order2.totalPrice(cart2));

//-------------------------------------