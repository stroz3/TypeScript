"use strict";
class UserService {
    static getUser(id) {
        return UserService.db.findById(id);
    }
    constructor(id) {
    }
    create() {
        UserService.db;
    }
}
(() => {
    UserService.db = '123';
})();
UserService.db = '1';
UserService.getUser(1);
let userService = new UserService(1);
userService.create();
