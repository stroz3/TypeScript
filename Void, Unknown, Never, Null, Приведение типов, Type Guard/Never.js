"use strict";
function throwErr(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case "checkout":
            //...
            break;
        case "refund":
            //...
            break;
        default:
            //const _:never = action; // Ошибка, потому что нету нового кейса
            throw new Error('Нет такого action');
    }
}
function returnBoolean(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    throwErr('Прилетел неизвестный тип');
}
