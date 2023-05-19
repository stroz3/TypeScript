"use strict";
const n = null;
const n2 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Вася'
        };
    }
}
const user33 = getUser();
if (user33) {
    const n55 = user33.name;
}
