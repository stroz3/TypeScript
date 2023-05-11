abstract class Logger {
    abstract log(message: string): void;

    public printDate(date: Date): void {
        this.log(date.toString());
    }
}

class ControllerWithLogger extends Logger{
    log(message: string): void {
        console.log(message);
    }
    public logWithDate(message: string){
        let date = new Date();
        this.printDate(date);
        this.log(message);

    }
}

const  cc = new ControllerWithLogger();
cc.logWithDate('error');
