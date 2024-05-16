// Class representing a real user
class User {
  constructor(name, email, userId) {
    // Properties of user
    this.name = name;
    this.email = email;
    this.userId = userId;
  }

   //Getters
   getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getUserId() {
    return this.userId;
  }

  // Setters
  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.email = email;
  }

  setUserId(userId) {
    this.userId = userId;
  }

}

module.exports = User;