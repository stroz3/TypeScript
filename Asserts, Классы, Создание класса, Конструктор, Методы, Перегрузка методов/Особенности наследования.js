"use strict";
class UserExt {
    constructor() {
        this.name = 'Иван';
        console.log(this.name);
    }
}
class AdminExt extends UserExt {
    constructor() {
        super();
        this.name = 'Иван Админ';
        console.log(this.name);
        // Нельзя обращаться к свойству, перед super, только если мы не будем обращаться ни к каким свойствам, тогда ошибки не будет
    }
}
// Так же можно наследоваться с уже созданных классов, допустим new Error
class HTTPError extends Error {
    constructor(m, code) {
        super(m);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
