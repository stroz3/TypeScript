type ModifierMap = 'read' | 'update' | 'create';

type UserRolesMap = {
    customers?: ModifierMap,
    projects?: ModifierMap,
    adminPanel?: ModifierMap
}
// Этот способ плох, потому что придётся вручную заполнять данные. Не подойдет, если данные будут изменяться
type UserAccessMap1 = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean
}

// Map который позволяет поменять не только тип поля, но и название, изменяемость и настроить фильтрацию
type ModifierToAccess<Type> = {
    [Property in keyof Type]: boolean;
    // Так же можно изменять название - [Property in keyof Type as Exclude<`Название${string & Property}`, 'canAcessadminPanel'>]
}
type UserAccessMap2 = ModifierToAccess<UserRolesMap>;


