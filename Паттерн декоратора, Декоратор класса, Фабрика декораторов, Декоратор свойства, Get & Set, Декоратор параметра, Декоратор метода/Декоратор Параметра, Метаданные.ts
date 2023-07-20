import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

interface ServiceMethodsa {
    getUsersInDatabase(): number;
}
class MetaDann implements ServiceMethodsa {
    private _users: number;

    getUsersInDatabase ():number{
        return this._users;
    }
    @Validate()
    setUsersInDatabase (@Positive() num: number): void{
        this._users = num;
    }
}


function Positive() {
    return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
)=> {
        let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineProperty(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    }
}

function Validate() {
    return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
)=> {
        let method = descriptor.value;
        descriptor.value = function (...args: any) {
            let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
            if(positiveParams){
                for(let i of positiveParams){
                    if(args[i] < 0){
                        throw new Error('Число должно быть больше нуля');
                    }
                }
            }
            return method?.apply(this, args);
        }
    }
}

const UserServiceasa = new MetaDann();

