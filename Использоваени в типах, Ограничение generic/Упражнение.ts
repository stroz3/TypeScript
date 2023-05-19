const data = [
    {id: 2, name: 'Петя'},
    {id: 3},
    {id: 1, name: 'Вася'},
]


interface DataWithId {
    id: number,
    name?: string
}
function filterDataId<T extends DataWithId>(data: T[], sort: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b )=>{
        switch (sort) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id
        }
    })
}


console.log(filterDataId(data));
console.log('------------------------------')
console.log(filterDataId(data, 'desc'));
