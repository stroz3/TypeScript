type httpMethod = 'post' | 'get'

function methods(url: string, method: httpMethod) {

}

type User = {
    name: string,
    age: number,
    skills: string[]
}
type Role = {
    id: number,
    name: string
}
// intersection
type UserWithRole = User & Role // user || role - или это или то

// Разграничение полей у Алиасов


type UserWithRole1 = {
    user: User,
    role: Role
}

let user1: UserWithRole = {
    id: 1,
    name:'Ivan',
    age: 19,
    skills: ['Dev', 'DevOps']
}

let user2: UserWithRole1 = {
        user: {
            name:'Ivan',
            age: 19,
            skills: ['Dev', 'DevOps']
        },
        role: {
            id: 1,
            name: '1'
        }
}





