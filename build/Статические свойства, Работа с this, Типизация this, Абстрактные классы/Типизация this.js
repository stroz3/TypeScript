"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const resUser = new UserBuilder().setName('Vasya');
const resAdmin = new AdminBuilder().setName('Vasya');
let userUnion = new UserBuilder();
if (userUnion.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}
