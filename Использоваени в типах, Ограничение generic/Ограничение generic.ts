class VehicleGen {
    run: number;
}


function kmToMiles <T extends VehicleGen> (vehicle: T): T{
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

class LCV extends VehicleGen{
    capacity: number;
}

const vehicle = kmToMiles(new VehicleGen());
const lcv = kmToMiles(new LCV());

// Тоже самое со всеми сущностями, которые можно наследовать

kmToMiles({run: 1});



function logId<T extends string | number, Y> (id: T, additionalData: Y): {id: T, data: Y}{
    console.log(id);
    console.log(additionalData);
    return {id, data: additionalData};
}
