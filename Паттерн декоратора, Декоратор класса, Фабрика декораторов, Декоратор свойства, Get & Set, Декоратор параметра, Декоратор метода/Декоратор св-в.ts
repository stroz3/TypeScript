interface ServiceMethods {
    users: number;
    getUsersInDatabase(): number;
}
class UserServiceMethod implements ServiceMethods {
    @Max(100)
    users: number = 1000;
    getUsersInDatabase(): number {
        return 1;
        // throw Error('Ошибка')
    }
}


function Max(max: number) {
    return (
    target: Object,
    propertyKey: string | symbol,
)=> {
        let value: number;
        const setter = function (newValue: number){
            if(newValue > max){
                console.log(`нельзя выставить значение больше ${max}`)
            }else{
                value = newValue;
            }
        }
        const getter = function () {
             return value;
        }
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

const UserServicea = new UserServiceMethod();

UserServicea.users = 1000;
console.log(UserServicea.users);
UserServicea.users = 10;
console.log(UserServicea.users);