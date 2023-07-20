class UserPa {
    constructor(public id: number, public name: string) {}
}


function getData(id: number, name: string){
    return new UserPa(id, 'Vasya');
}

type RT = ReturnType<typeof getData>
type Rt2 = ReturnType<()=> void>
type rt3 = ReturnType<<T extends string>()=> T>

type PT = Parameters<typeof getData>[0];

type CP = ConstructorParameters<typeof UserPa>