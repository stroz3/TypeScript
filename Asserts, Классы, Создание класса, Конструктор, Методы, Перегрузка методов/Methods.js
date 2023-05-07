"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Hold"] = 0] = "Hold";
    PaymentStatus[PaymentStatus["Process"] = 1] = "Process";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Hold;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unHoledPayment() {
        if (this.status == PaymentStatus.Process) {
            throw new Error("Платеж не может быть возвращен");
        }
        this.status = PaymentStatus.Reversed;
        this.uploadAt = new Date();
    }
}
const payment = new Payment(1);
payment.unHoledPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);
