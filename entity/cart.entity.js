// Class representing a cart containing the books and the user who will buy the books
class Cart {
  constructor(user) {
    // Properties properties of cart
    this.user = user; //this.user is used to store user corresponding to the cart
    this.books = []; // used to store array of books
  }

  //method to add book into array
  addBook(book) {
    //try to push book into array if avaliable, otherwise logs the error
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
    //try to remove book of array, otherwise logs the error
    try {
      const index = this.books.indexOf(book);
      if(index !== -1) {
        this.books.splice(index,1); 
      } else {
        throw new Error(`Book: ${book.title}  is not on cart`);
      }
    } catch (error) {
      console.error(error.message);
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

module.exports = Cart;