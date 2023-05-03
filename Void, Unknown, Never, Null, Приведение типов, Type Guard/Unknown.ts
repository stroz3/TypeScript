let input: unknown;

input = 3;
input = ['s', 's2'];

// let resU: string = input; // нужно класть в unknown или any

function run(i: unknown){
    if(typeof i == 'number'){
        i++;
    }
    else {
        i
    }
}

run(input);

async function getData(){
    try{
        await fetch('');
    } catch (err){
        if(err instanceof Error){
            console.log(err.message) // Такое не приведет к неожиданной ошибке
                /*
                * Так же можно сделать const e = error as Error;
                * console.log(err.message);
                * Но в таком случае может возникнуть непридвиденная ошибка, если придет что-то другое
                * */
        }
        // console.log(err.message); если просто задать err  catch, то нельзя использовать его
    }
}

type U1 = unknown | null;
