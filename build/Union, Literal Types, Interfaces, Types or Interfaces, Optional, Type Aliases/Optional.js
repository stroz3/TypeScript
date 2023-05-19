"use strict";
const userOptional = {
    login: 'Ivan'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(1);
function multiply2(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type; // ! - означает, что всегда будет
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(1); // Или params null или undefined
}
