class UserExt {
    name: string = 'Иван';

    constructor() {
        console.log(this.name);
    }
}

class AdminExt extends UserExt{
    name: string = 'Иван Админ';
    constructor() {
        super();
        console.log(this.name)
        // Нельзя обращаться к свойству, перед super, только если мы не будем обращаться ни к каким свойствам, тогда ошибки не будет
    }
}

// Так же можно наследоваться с уже созданных классов, допустим new Error

class HTTPError extends Error {
    code: number;
    constructor(m: string, code: number) {
        super(m);
        this.code = code ?? 500

    }

}