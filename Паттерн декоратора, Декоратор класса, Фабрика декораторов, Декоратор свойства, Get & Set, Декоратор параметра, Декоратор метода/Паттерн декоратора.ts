interface Iuservice {
    users: number;
    getUsersInDataBase(): number;
}

class UserServiceDec implements Iuservice {
    users: number = 1000;

    getUsersInDataBase(): number {
        return this.users
    }
}

function nullUser(obj: Iuservice){
    obj.users = 0;
    return obj;
}

function logUsers(obj: Iuservice) {
    console.log('Users' + obj.users);
    return obj;
}

// Паттерн декоратора
console.log(nullUser(new UserServiceDec()).getUsersInDataBase());
// Также можно делать вложенность декораторов, работать будет с внутреннего к внешнему
console.log(logUsers(nullUser(new UserServiceDec())).getUsersInDataBase());
