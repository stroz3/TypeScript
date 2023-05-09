class PaymentThis {
    private date: Date = new Date();
    getDate(this: PaymentThis){
        return this.date;
    }
    getDateArrow = () => {
        return this.date;
}
}


const p = new PaymentThis();

const userThis = {
    id: 1,
    paymentDate: p.getDate.bind(p), // bind нужен для того, чтобы привязать контекст
    paymentDateArrow: p.getDateArrow
}


class PaymentPertistent extends PaymentThis {
    save(){
        return this.getDateArrow(); // ошибка, потому что нельзя использовать стрелочную функцию при наследовании
    }
}





