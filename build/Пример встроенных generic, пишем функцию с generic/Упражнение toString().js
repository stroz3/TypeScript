"use strict";
function stoString(param) {
    if (Array.isArray(param)) {
        return param.toString();
    }
    switch (typeof param) {
        case 'string':
            return param;
        case "number":
        case "boolean":
        case "symbol":
        case "function":
            return param.toString();
        case 'object':
            return JSON.stringify(param);
        default:
            return undefined;
    }
}
