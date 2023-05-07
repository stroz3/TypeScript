"use strict";
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && "name" in obj) {
        return;
    }
    throw new Error("Не пользователь");
}
const userr = {};
assertUser(userr);
userr.name = 'Вася';
