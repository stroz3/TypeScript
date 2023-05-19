"use strict";
var Status;
(function (Status) {
    Status["Success"] = "success";
    Status["Failed"] = "failed";
})(Status || (Status = {}));
function isSuccess(res) {
    if (res.status === Status.Success) {
        return true;
    }
    return false;
}
function getIdFromData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
function SizeGuard(pers) {
    return pers.pantSize !== undefined || ('pantSize' in pers);
    // return "pantSize" in pers;
}
function getSize(person) {
    if (SizeGuard(person)) {
        return person.pantSize || 0;
    }
    else {
        return person.braSize;
    }
}
