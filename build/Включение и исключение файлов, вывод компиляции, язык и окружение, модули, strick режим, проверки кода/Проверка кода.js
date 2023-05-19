"use strict";
class UserCheck {
    constructor(name) {
        this.name = name;
    }
}
function createUser(user) {
    // Логика
    const defaultUser = new UserCheck('default');
    // noFallthroughCasesInSwitch - будет выводить ошибку,
    switch (user.role) {
        case 'admin':
            console.log('log');
            break;
        case 'user':
            return true;
            const a = 1;
        // allowUnreachableCode - недостижимый код
    }
}
const cs = { drive: true };
const d = cs['drive'];
cs.drive;
// exactOptionalPropertyTypes - если свойство (role) с определеными значениями, то только их можно присвоить
// noUnusedParameters - Будет ошибка, если не испльзовать параметры в функциях
// noFallthroughCasesInSwitch -  не дает проваливаться кейсам внутри switch case
