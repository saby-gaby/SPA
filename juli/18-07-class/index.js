class User {
  constructor(userName, location) {
    this.userName = userName;
    this.location = location;
  }

  logIn() {
    console.log(this.userName + " you are logged in from " + this.location);
  }
}

class SuperUser extends User {
    constructor(userName, location, permissions) {
    super(userName, location);
    this.permissions = permissions;
  }

  deleteUser(id) {
    console.log(`User ${id} deleted!`);
  }
}

const maxim = new User("Maxim", 'Cologne');

const adminUser1 = new SuperUser("Manfred", "Berlin");

maxim.logIn();

adminUser1.logIn();

adminUser1.deleteUser(1);
