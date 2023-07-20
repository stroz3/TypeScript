interface IUserviceFabric {
    users: number;
    getUsersInDataBase(): number;
}
@threeUserDecor(3)
@nullUserDecor(1)
class UserServiceDecFabric implements IUserviceFabric {
    users: number = 1000;

    getUsersInDataBase(): number {
        return this.users
    }
}

function nullUserDecor(users: number){
    return (target: Function) =>{
        target.prototype.users = users;
    }
}

function threeUserDecor(users: number){
    return <T extends { new(...args: any[]):{} }> (constructor: T) =>{
        users = users;
    }
}



// Паттерн декоратора
console.log(new UserServiceDecFabric().getUsersInDataBase());
