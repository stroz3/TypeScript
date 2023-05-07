"use strict";
// Union тип id: number | string
function logId(id) {
    // Сужение типов
    if (typeof id === 'number') {
        console.log(id);
    }
    else if (typeof id === 'string') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
// Сужение объектов
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        console.log(a);
    }
    else {
        console.log(a);
    }
}
