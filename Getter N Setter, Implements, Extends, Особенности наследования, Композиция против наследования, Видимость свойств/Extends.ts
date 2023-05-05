type PaymentStatusEx = 'new' | 'paid';

class PaymentExtends {
    id: number;
    status: PaymentStatusEx = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay(){
        this.status = 'paid';
    }

}

// Будут доступны все методы и переменные класса PaymentExtends
// class ParsistedPayment extends PaymentExtends{
//
// }
//
// new ParsistedPayment().


class ParsistedPayment extends PaymentExtends{
    dataBaseId: number;
    paidAt: Date;
    constructor() {
        const id = Math.random();
        super(id);
    }

    // override значит то, что у нас method pay будет использован из калсса PaymentExtends и в случае,
    // если этот метод удалиться из родительского класса, то будет будет ошибка. Можно пользоваться super.pay(), но тогда не бдует ошибки
    override pay(date?: Date){
        if(date){
            this.paidAt = date
        }
    }
}


