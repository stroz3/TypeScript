interface ServiceMethods {
    users: number;
    getUsersInDatabase(): number;
}
class UserServiceMethods implements ServiceMethods {
    users: number = 1000;
    @Log({rethrow: false})
    getUsersInDatabase(): number {
        // return 1;
        throw Error('Ошибка')
    }
}


function Log ({rethrow}:{rethrow: boolean} = {rethrow: true}) {
    return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
):TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const oldValue = descriptor.value;
    descriptor.value = async (...args: any[]) =>{
        try {
            return await oldValue?.apply(target, args)
        }
        catch (e){
            if(e instanceof Error){
                console.log(e.message);
                if(rethrow){
                    throw e;
                }
            }

        }
    }
}
}


console.log(new UserServiceMethods().getUsersInDatabase());