function throwErr(message: string):never {
    throw new Error(message);
}

function dumpError(): never {
    while (true){ }
}

function rec(): never{
    return rec();
}


type paymentActions = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentActions){
    switch (action){
        case "checkout":
            //...
            break;
        case "refund":
            //...
            break;
        default:
            //const _:never = action; // Ошибка, потому что нету нового кейса
            throw new Error('Нет такого action');
    }
}



function returnBoolean(x: string | number): boolean{
    if(typeof x === 'string'){
        return true;
    }
    else if(typeof x === 'number'){
        return false;
    }
    throwErr('Прилетел неизвестный тип');
}