enum PaymentStatus{
    Hold,
    Process,
    Reversed
}

class Payment{
    id: number;
    status: PaymentStatus = PaymentStatus.Hold;
    createdAt: Date = new Date();
    uploadAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime(): number{
        return new Date().getTime() - this.createdAt.getTime();
    }

    unHoledPayment(): void{
        if(this.status == PaymentStatus.Process){
            throw new Error("Платеж не может быть возвращен")
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