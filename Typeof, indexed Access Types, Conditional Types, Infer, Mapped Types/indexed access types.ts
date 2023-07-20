interface RoleIndx {
    name: string;
}

interface Permission{
    endDate: Date;
}
interface UserIndx{
    name: string;
    roles: RoleIndx[];
    permission: Permission;
}

const userIndx: UserIndx = {
    name: "Вася",
    roles: [],
    permission:{
        endDate: new Date()
    }
}
// Это объекты
const nameUser = userIndx['roles'];
const roleNames = 'roles';

// Это типы, объекты нельзя использовать в типы, только если их преобразовать в typeof(не будет работать с let, только если задать ей тип 'roles')
type rolesTypes = UserIndx['roles'];
type rolesType2 = UserIndx[typeof roleNames];


// Тут мы задаем, что конкретно мы хотим получить
type roleType = UserIndx['roles'][number/*здесь мы получаем типы*/];

// Чтобы сделать union тип для разграничения между типами, можно использовать следующее

const roles = ['admin', 'user', 'super-user'] as const /*Задаст константе конкретный объект*/;
type roleTypes = typeof roles[number/*Здесь мы получим union из всех типов объекта*/];



// Так же можем получать типы из разных уровней

type endDate = UserIndx['permission']['endDate'];