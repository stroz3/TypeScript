"use strict";
class VehicleGen {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends VehicleGen {
}
const vehicle = kmToMiles(new VehicleGen());
const lcv = kmToMiles(new LCV());
// Тоже самое со всеми сущностями, которые можно наследовать
kmToMiles({ run: 1 });
function logId(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
