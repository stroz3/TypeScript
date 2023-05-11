"use strict";
class Logger {
    printDate(date) {
        console.log(date);
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
let cc = new ControllerWithLogger();
cc.logWithDate('error');
