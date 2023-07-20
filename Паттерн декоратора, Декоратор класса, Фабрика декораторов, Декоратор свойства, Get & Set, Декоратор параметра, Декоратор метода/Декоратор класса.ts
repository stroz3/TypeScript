interface IUservice {
    users: number;
    getUsersInDataBase(): number;
}
@nullUserDecorClass
@threeUserDecorClass
class UserServiceDecClass implements IUservice {
    users: number = 1000;

    getUsersInDataBase(): number {
        return this.users
    }
}

function nullUserDecorClass(target: Function){
    target.prototype.users = 0;
}

function threeUserDecorClass<T extends { new(...args: any[]):{} }> (constructor: T){
    return class extends constructor {
        users = 3;
    }
}



// Паттерн декоратора
console.log(new UserServiceDecClass().getUsersInDataBase());
