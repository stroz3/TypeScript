function logId(id: string | number): void {
    console.log(id);
}

const a = logId(1);

function multily1(f: number, s?:number){
    if(!s){
        return f*f;
    }
    // return f * s
}

multily1(1);


type voidFunction = () => void;

const f1: voidFunction = () => {

}

const f2: voidFunction = () => {
    return true
}

const a2 = f2();


const arr = ['Dev', 'DevOps'];
const usr: { s: string[] } = {
    s: []
}

skills.forEach((skill) => usr.s.push(skill) )
