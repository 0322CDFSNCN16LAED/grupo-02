const fs = require ('fs');

const user = {
  filename: "./data/users.json",

  getData: function () {
    return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
  },
  generateId: function () {
    const allUsers = this.findAll();
    const lastUser = allUsers.pop();
    if (lastUser) {
        return lastUser.id + 1;
    } else {
        return 1;
    }
  },
  findAll: function () {
    return this.getData();
  },
  findById: function name(id) {
    const allUsers = this.findAll();
    const userFound = allUsers.find((oneUser) => oneUser.id === id);
    return userFound;
  },
  findByField: function name(field, text) {
    const allUsers = this.findAll();
    const userFound = allUsers.find((oneUser) => oneUser[field] === text);
    return userFound;
  },
  create: function (userData) {
    const allUsers = this.findAll();
    const newUser = {
        id: this.generateId(),
        ...userData
    }
    allUsers.push(newUser);
    fs.writeFileSync(this.filename, JSON.stringify(allUsers, null,  ' '));
    return newUser;
  },
  delete: function (id) {
    const allUsers = this.findAll();
    const finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
    fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, " "));
    return true;
  }
};

module.exports = user;

