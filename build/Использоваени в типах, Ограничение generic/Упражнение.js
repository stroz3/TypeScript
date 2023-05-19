"use strict";
const data = [
    { id: 2, name: 'Петя' },
    { id: 3 },
    { id: 1, name: 'Вася' },
];
function filterDataId(data, sort = 'asc') {
    return data.sort((a, b) => {
        switch (sort) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(filterDataId(data));
console.log('------------------------------');
console.log(filterDataId(data, 'desc'));
