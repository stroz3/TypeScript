const n: null = null;
const n2: any = null;
// const n3: number = null; - нельзя использовать тип string, boolean, undefined


interface User1 {
    name: string
}

function getUser() {
    if(Math.random() > 0.5){
        return null;
    }
    else{
        return {
            name: 'Вася'
        } as User
    }
}

const user33 = getUser();

if(user33){
    const n55 = user33.name;
}
