//В функциях тоже можно делать проверку типизации

function getFullName(firstname: string, surname: string): string {
    return `${firstname} ${surname}`
}

const  getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`
}

console.log(getFullName('Иван', "Куприев"))