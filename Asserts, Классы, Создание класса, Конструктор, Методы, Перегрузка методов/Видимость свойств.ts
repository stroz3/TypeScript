class Vehicle {
    private damage: string[];
    private _model: string; // Можно использовать только в родительском классе, так же можно написать # = private
    protected run: number; // тип протектед, так же нельзя использовать внешне, но можно использовать при наследовании
    get model(){
        return this._model;
    }
    set model(m: string){
        this._model = m;
    }

    addDamage(d: string){
        this.damage.push(d);
    }
}


class Truck extends Vehicle{
    setRun(km: number){
        this.run = km;
    }
}