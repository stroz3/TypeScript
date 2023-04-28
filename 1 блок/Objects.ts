//

function getFull(userEntity: {firstName:string, surName: string} ): string {
    return `${userEntity.firstName} ${userEntity.surName}`
}



const user = {
    firstName: 'Иван',
    surName: 'Куприев',
    city: 'Ростов-на-Дону',
    age: 33,
    skills:{
        dev: true,
        devops: true
    }
}

console.log(getFull(user))