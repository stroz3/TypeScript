"use strict";
class PaymentThis {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new PaymentThis();
const userThis = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow
};
class PaymentPertistent extends PaymentThis {
    save() {
        return this.getDateArrow(); // ошибка, потому что нельзя использовать стрелочную функцию при наследовании
    }
}
