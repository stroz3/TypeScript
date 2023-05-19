interface Interface<T> {
    timeStamp: Date,
    data: T
}

type Type<T> = {
    timeStamp: Date,
    data: T
}
// С типами работает точно также
const interFace: Interface<{a: number}> = {
    timeStamp: new Date(),
    data: {a: 1}
}
