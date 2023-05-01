interface UserOptional {
    login: string;
    password?: string;  // Либо через union типы допустим string | undefined
}

const userOptional: UserOptional ={
    login: 'Ivan'

}

function multiply(first: number, second?: number): number {
    if(!second){
        return first * first;
    }
    return first * second;
}

multiply(1);



interface UserOptional2 {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    };  // Либо через union типы допустим string | undefined
}


function multiply2(user: UserOptional2) {
    const t = user.password?.type; // ! - означает, что всегда будет
}
function test(param?:string){
    const t = param ?? multiply(1); // Или params null или undefined
}