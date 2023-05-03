interface  UserInterface {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string; // тоже самое можно сделать для type
}

// interface UserWithRoleInterface extends User {
//     roleId: number
// }

interface RoleInterface {
    roleId: number
}

interface UserWithRoleInterface extends UserInterface, RoleInterface {
    createdAt: Date
}

let userInterface: UserWithRoleInterface = {
    name: 'Ivan',
    age: 19,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),

    log(id) {
        return '';
    }
}


interface UserDic {
    [index: number/* Либо др*/]: User // Словарь
}

type UserDic2 = {
    [index: number]: User
} 
