 interface Userr {
    name: string;
 }
 function assertUser(obj: unknown): asserts obj is Userr{
     if(typeof obj === 'object' && !!obj && "name" in obj){
         return;
     }
     throw new Error("Не пользователь")
 }
const userr = {};

assertUser(userr)

userr.name = 'Вася';


