class UserConstructor {

    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrName?: string | number, age?: number) {
        if(typeof ageOrName === 'string'){
            this.name = ageOrName;
        }else if(typeof ageOrName === 'number'){
            this.age = ageOrName;
        }else if(typeof age === 'number'){
            this.age = age;
        }
    }
}


const usr1 = new UserConstructor('Вася');
const usr2 = new UserConstructor();
const usr3 = new UserConstructor(33);
const usr4 = new UserConstructor('asdf', 33);
