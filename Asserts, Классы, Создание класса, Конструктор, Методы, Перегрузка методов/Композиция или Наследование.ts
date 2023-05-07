class PaymentS {
    date: Date;
}

class UserWithPayment extends Payment{
    name: string;
}

class UserWithPayment2 {
    user: User;
    payment: Payment;
    constructor(user: User, payment: Payment) {
        this.payment = payment;
        this.user = user;
    }
}

// Композицию стоит использовать тогда, когда не нужно наследовать все не нужные свойсвта и методы класса.
// В свою очередь, наследование нужно использовать, когда нужно наследовать мало отлечающиеся объектов

