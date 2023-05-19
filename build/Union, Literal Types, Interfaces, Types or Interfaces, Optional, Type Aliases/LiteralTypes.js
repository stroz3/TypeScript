"use strict";
function fetchWithAuth(url, method) {
}
let Letmethod = 'post';
const Constmethod = 'post';
// fetchWithAuth('r', Letmethod) - ошибка
fetchWithAuth('r', Constmethod);
fetchWithAuth('r', Letmethod); // Нужно быть аккратнее с такой привязкой типов, так как есои передать что-то другое, то проверка пройдет
fetchWithAuth('r', 'get');
// fetchWithAuth('r', 'ge') - ошибка
function fetchWithAuth1(url, method) {
    return 1;
    // return 0 - ошибка
}
fetchWithAuth1('r', 1);
// fetchWithAuth('r', 'get') - ошибка
