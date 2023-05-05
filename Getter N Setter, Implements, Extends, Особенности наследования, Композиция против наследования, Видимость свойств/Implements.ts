interface ILoger {
    log(...args: any[]):void;
    error(...args: any[]):void;
}

class Loger implements ILoger{
    error(...args: any[]): void {
        console.log(...args);
    }

    async log(...args: any[]): Promise<void> {
        console.log(...args);
    }

}

interface Payable {
    pay(paymentId: number): void;
    price?: number;
}

class UserPayment implements Payable{

    pay(paymentId: number): void {
        // ...
    }

}