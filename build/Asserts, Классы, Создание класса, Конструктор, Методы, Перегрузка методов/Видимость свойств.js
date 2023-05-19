"use strict";
class Vehicle {
    get model() {
        return this._model;
    }
    set model(m) {
        this._model = m;
    }
    addDamage(d) {
        this.damage.push(d);
    }
}
class Truck extends Vehicle {
    setRun(km) {
        this.run = km;
    }
}
