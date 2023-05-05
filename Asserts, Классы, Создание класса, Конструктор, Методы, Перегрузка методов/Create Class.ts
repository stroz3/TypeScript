class UserClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let userWithClass = new UserClass('Вася')

console.log(userWithClass)

userWithClass.name = 'Петя'

console.log(userWithClass)


// Выклчюить strictPropertyInitialization, чтобы использовать class как декоратор или интерфейс
// Либо использовать ! перед переменной role !: number

class Admin{
    role: number;
}

let adminWithClass = new Admin();

adminWithClass.role = 1;

