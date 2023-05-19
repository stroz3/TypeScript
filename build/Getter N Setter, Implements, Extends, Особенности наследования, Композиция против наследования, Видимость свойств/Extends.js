"use strict";
class PaymentExtends {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
// Будут доступны все методы и переменные класса PaymentExtends
// class ParsistedPayment extends PaymentExtends{
//
// }
//
// new ParsistedPayment().
class ParsistedPayment extends PaymentExtends {
    constructor() {
        const id = Math.random();
        super(id);
    }
    // override значит то, что у нас method pay будет использован из калсса PaymentExtends и в случае,
    // если этот метод удалиться из родительского класса, то будет будет ошибка. Можно пользоваться super.pay(), но тогда не бдует ошибки
    pay(date) {
        if (date) {
            this.paidAt = date;
        }
    }
}
