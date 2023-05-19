"use strict";
class UserGetterSetters {
    get password() {
        return this._password;
    }
    get login() {
        return this._login;
    }
    set login(value) {
        this._login = value;
    }
    set password(value) {
        this._password = value;
    }
}
const userrr = new UserGetterSetters();
userrr.login = 'Name';
console.log(userrr.login);
