"use strict";
// Числовой enum
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    StatusCode[StatusCode["FAILED"] = 2] = "FAILED";
})(StatusCode || (StatusCode = {}));
// Строковый enum
var StatusCode1;
(function (StatusCode1) {
    StatusCode1["SUCCESS"] = "s";
    StatusCode1["IN_PROGRESS"] = "p";
    StatusCode1["FAILED"] = "f";
})(StatusCode1 || (StatusCode1 = {}));
// Гибридный enum
var StatusCode2;
(function (StatusCode2) {
    StatusCode2[StatusCode2["SUCCESS"] = 1] = "SUCCESS";
    StatusCode2["IN_PROGRESS"] = "p";
    StatusCode2["FAILED"] = "f";
})(StatusCode2 || (StatusCode2 = {}));
const ress = {
    message: 'Платеж успешный',
    statusCode: StatusCode.SUCCESS
};
if (ress.statusCode === StatusCode.SUCCESS) {
    // ...
}
function action(status) {
}
action(StatusCode2.FAILED);
action(2);
// action('p')
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["DEVELOPER"] = 1] = "DEVELOPER";
    Roles[Roles["HR"] = 2] = "HR";
})(Roles || (Roles = {}));
