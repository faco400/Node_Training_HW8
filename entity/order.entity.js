//Class to represent order process
class Order {
  constructor(user, books) {
    // Properties of order
    this.user = user;
    this.books = books;
  }

    //getters
    getUser() {
      return this.user;
    }
  
    getBooks () {
      return this.books;
    }

    // get total price of order from cart
    getTotalPrice() {
      let totalPrice = 0;
      this.books.forEach(book => {
        totalPrice += book.price;
      })
      return ' total price: R$' + totalPrice;
    }
  
    //setters
    setUser(user) {
      this.user = user;
    }
}

module.exports = Order;