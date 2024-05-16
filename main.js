// --------------- PART 2 -------------------------
const {Book, mysteryBook} = require("./entity/book.entity");
const User = require('./entity/user.entity');
const Cart = require('./entity/cart.entity');
const Order = require('./entity/order.entity');

// Creating Books
const book1 = new Book('O alienista', 'Machado de Assis', '856356093X', 32.17, true);
const book2 = new Book('Harry Potter: A pedra filosofal', 'J.K. Rowlling', '8532530788', 46.50, true);
const book3 = new Book('Um caminho para a liberdade', 'Jojo Moyes', '8551005456', 55.92, true);

// -------- Registering books in database (BONUS) ------------
book1.registerBook();
book2.registerBook();
book3.registerBook();
// -----------------------------------------------------------

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
console.log(order1.getTotalPrice());

console.log('\nOrder 2: ');
console.log(order2);
console.log(order2.getTotalPrice());

//-------------------------------------

//---------- PART 3 -----------------
// On a hypothetical scenario a costumer wants to browse 
// through the mystery category and buy the sherlock holmes book.
// In order to implement Polymorphism in this situation we are
// considering that a class mysteryBook is extended from book, and has a 
// property exclusive to it, which is description, 
// this prop will contain description about the book.
// Since mysteryBook extends from book it should be treated uniformly when being added(or removed) to (or from) cart

// creating user3
const user3 = new User('Thomas', 'tjones.laba@solvd.com', 3);

//creating mystery books4
const book4 = new mysteryBook(
'O Homem de Giz',
'C. J. Tudor',
'8551002937',
52.19,
true, 
`Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela
pacata vizinhança em busca de aventuras.
Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem.
Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque.
Depois disso, nada mais é como antes.`
);

//creating mystery books5
const book5 = new mysteryBook(
'Sherlock Holmes - Casos Extraordinários: Casos Extraordinários',
'Sir Arthur Conan Doyle',
'8520003982',
63.99,
true, 
`é uma coletânea de histórias de Sherlock Holmes, o famoso detetive criado por Sir Arthur Conan Doyle.
É uma obra que reúne diversos contos e aventuras do personagem,
escritos por diferentes autores que se inspiraram no universo de Sherlock Holmes.
Essas histórias geralmente exploram mistérios intrigantes,
resoluções engenhosas e o caráter peculiar do próprio Sherlock Holmes.
Se você é fã do detetive e de mistérios, provavelmente encontrará muito para gostar nessa coletânea.`
);

// -------- Registering books in database (BONUS) ------------
book4.registerBook();
book5.registerBook();
// -----------------------------------------------------------

//creating cart and order for user 3
const cart3 = new Cart(user3); //receives user as a argument for constructor to associate user and cart of books
const order3 = new Order(user3, cart3.books); // receives both the user and the list of books in his cart

//Adding books to the cart
cart3.addBook(book4); // adding book 4 by mistake
cart3.addBook(book5); // adding book 5 correctly

cart3.removeBook(book4) // removing book 4 from cart

console.log('\nOrder 3 (Demonstration Scenario)');
console.log('Books in the order: ')
order3.books.forEach(book => {
  console.log(`title: ${book.title}\nauthor: ${book.author}\ndescrition: ${book.description}\n\n`);
})
console.log(order3.getTotalPrice());