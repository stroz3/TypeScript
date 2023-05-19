"use strict";
//В функциях тоже можно делать проверку типизации
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName('Иван', "Куприев"));
