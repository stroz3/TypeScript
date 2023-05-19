"use strict";
class PaymentS {
}
class UserWithPayment extends Payment {
}
class UserWithPayment2 {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
// Композицию стоит использовать тогда, когда не нужно наследовать все не нужные свойсвта и методы класса.
// В свою очередь, наследование нужно использовать, когда нужно наследовать мало отлечающиеся объектов
