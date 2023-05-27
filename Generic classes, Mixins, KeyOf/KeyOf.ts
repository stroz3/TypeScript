interface IUser{
    name: string;
    age: number;
}

type keyOfUser = keyof IUser;

const key:keyOfUser = 'age'; // Другие ключи не получиться встваить

function getValue<T, K extends keyof T> (obj: T, key: K){
    return obj[key];
}

const Iuser: IUser = {
    name: 'Вася',
    age: 15
}

getValue(Iuser, 'name') // Если попробовать вставить несуществующий ключ, то будет ошибка

