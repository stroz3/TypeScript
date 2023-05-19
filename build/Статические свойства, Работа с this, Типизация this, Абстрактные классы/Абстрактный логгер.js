"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class ControllerWithLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        let date = new Date();
        this.printDate(date);
        this.log(message);
    }
}
const cc = new ControllerWithLogger();
cc.logWithDate('error');
