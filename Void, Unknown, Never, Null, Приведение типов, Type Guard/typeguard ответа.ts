interface  IPayment {
    sum: number;
    from: number;
    to: number;
}

enum Status {
    Success = 'success',
    Failed = 'failed'
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IDataPaymentSuccess {
    status: Status.Success,
    data: IDataSuccess;
}

interface IDataPaymentFailed {
    status: Status.Failed,
    data: IDataFailed;
}

type Res = IDataPaymentSuccess | IDataPaymentFailed;

function isSuccess(res: Res): res is IDataPaymentSuccess{
    if(res.status === Status.Success){
        return true;
    }
    return false;
}
function getIdFromData(res: Res): number {
    if(isSuccess(res)){
        return res.data.databaseId;
    }
    else{
        throw new Error(res.data.errorMessage)
    }
}




interface Man {
    age: number;
    pantSize: number | undefined;
}

interface Woman{
    age: number;
    braSize: number;
}

type PersUnion = Man | Woman

function SizeGuard(pers: PersUnion): pers is Man{
    return (pers as Man).pantSize !== undefined || ('pantSize' in pers);
    // return "pantSize" in pers;
}

function getSize(person: PersUnion): number{
    if(SizeGuard(person)){
        return person.pantSize || 0
    }else{
        return person.braSize
    }
}


