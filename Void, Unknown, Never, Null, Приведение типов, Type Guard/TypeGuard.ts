interface User1 {
    name: string;
    email: string;
    login: string;
}

const user12 = {
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasia'
} as User1

interface Admin {
    name: string;
    role: number;
}


function logId(id: number | string){
    if(isString(id)){
        console.log(id)
    }else{
        console.log(id)
    }
}

// Для подобных тривиальных вещей, лучше не использовать, так как легче просто сделать одной строкой
function isString(x: number | string): x is string{
    return typeof x === "string";
}

function isAdmin(user: User | Admin): user is Admin{
    return 'role' in user // Приоритетнее
}

function isAdminAlternative(user: User | Admin ): user is Admin{
    return (user as Admin).role !== undefined; // Если пользователь не undefined, то это Admin
}

function setRoleZero(user: User | Admin){
    if(isAdmin(user)){
        user.role = 0;
    }
    else{
        throw new Error('Пользователь не админ');
    }
}



