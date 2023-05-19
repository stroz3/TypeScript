"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const resss = logMiddleware(10);
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, 1);
}
getSplitedHalf([1, 2, 3]);
