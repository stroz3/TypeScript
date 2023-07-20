function runTransaction(transaction: {
    fromTo: [string, string]
}) {
    console.log(transaction);
}

const transaction: GetFirstArg<typeof runTransaction> = {
    fromTo: ['1', '1']
}

runTransaction(transaction);

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;