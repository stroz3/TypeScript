interface ServiceMethods {
    users: number;
    getUsersInDatabase(): number;
}
class UserServiceAccessors implements ServiceMethods {
    private _users: number;
    @Log()
    set users(value: number) {
        this._users = value;
    }

    get users(): number {
        return this._users;
    }
    getUsersInDatabase ():number{
        return 1;
    }
}


function Log() {
    return (
    target: Object,
    _: string | symbol,
    descriptor: PropertyDescriptor
)=> {
      const set = descriptor.set;
      descriptor.set = (...args: any) =>{
          console.log(args);
          set?.apply(target, args);
      }
    }
}

const UserServiceas = new UserServiceAccessors();

UserServiceas.users = 1000;
console.log(UserServiceas.users);
