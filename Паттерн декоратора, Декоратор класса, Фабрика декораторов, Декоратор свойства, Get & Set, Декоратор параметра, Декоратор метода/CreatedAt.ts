interface ServiceCreatedAt {
    users: number;
    getUsersInDatabase(): number;
}
@CreatedAtInClass
class UserServiceCreated implements ServiceCreatedAt {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

function CreatedAtInClass<T extends {new(...args: any[]):{} }>(constructor: T){
    return class extends constructor{
        createdAt = new Date();
    }
}

type CreatedAt = {
    createdAt: Date;
}
console.log(new UserServiceCreated())
console.log((new UserServiceCreated() as UserServiceCreated & CreatedAt).createdAt)
