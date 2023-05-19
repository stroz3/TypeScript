"use strict";
const user12 = {
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasia'
};
function logId(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
// Для подобных тривиальных вещей, лучше не использовать, так как легче просто сделать одной строкой
function isString(x) {
    return typeof x === "string";
}
function isAdmin(user) {
    return 'role' in user; // Приоритетнее
}
function isAdminAlternative(user) {
    return user.role !== undefined; // Если пользователь не undefined, то это Admin
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
