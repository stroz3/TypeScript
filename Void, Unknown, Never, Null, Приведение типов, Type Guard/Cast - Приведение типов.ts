let a1 = 5;
let b1: string = a1.toString();
// let e = new String(a).valueOf();
// let f = new Boolean(a).valueOf();


// let с = 'sdsds';
// let d: number = parseInt(c); // или поставить +


interface User1 {
    name: string;
    email: string;
    login: string;
}
// Первый спобос
// const user12: User1 = {
//     name: 'Вася',
//     email: 'vasiliy@yandex.ru',
//     login: 'vasia'
// }

// Второй спобос
// const user12 = {
//     name: 'Вася',
//     email: 'vasiliy@yandex.ru',
//     login: 'vasia'
// } as User1

// Третий, но лучше не использовать, так как React не поддерживает такой способ
// const user12 = <User> {
//     name: 'Вася',
//     email: 'vasiliy@yandex.ru',
//     login: 'vasia'
// }

 interface Admin {
    name: string;
    role: number;
 }

 function userToAdmin (user:User1):Admin{
    return {
        name: user.name,
        role: 1
    }
 }
