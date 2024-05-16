const file = './db/db.txt'; // database location
var fs = require('fs'); //module to read/write file


class Book {
  constructor(title, author, isbn, price, availability) {
    // Properties of book
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }

  //Getters
  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getIsbn() {
    return this.isbn;
  }

  getPrice() {
    return this.price;
  }

  getAvailability() {
    return this.availability;
  }

  //Setters
  setTitle(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
  }

  setISBN(isbn) {
    this.isbn = isbn;
  }

  setPrice(price) {
    this.price = price
  }

  setAvailability(availability) {
    this.availability = availability;
  }

  //register book to database
  registerBook(){
    fs.appendFile(file, JSON.stringify(this), (err) => {
      if(err) throw err;
    });
  }

  //find book in database
  findBook() {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
    
      // Split the data by '}' to separate individual JSON objects
      const objects = data.toString().split('}');
    
      objects.forEach((objectString,index) => {
        if(index !== objects.length-1){
          objectString += '}';
        // Parse the JSON object
          try {
              const obj = JSON.parse(objectString);
              // Access object properties here
              if(obj['title'] === this.title)
                console.log('Exists in database');
          } catch (error) {
              console.error("Error parsing JSON:", error);
          }
        }
      });
    });
  }
}

// This class represents a genre of books, that has a exclusive property, description
class mysteryBook extends Book {
  constructor(title, author, isbn, price, availability, description) {
    //properties of book + description which belongs to only this extended class
    super(title, author, isbn, price, availability);
    this.description = description;
  }

  //getters
  getDescription() {
    return this.description;
  }

  //setters
  setDescription(description) {
    this.description = description;
  }

}

module.exports = {Book, mysteryBook};