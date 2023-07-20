interface Iform {
    name: string,
    password: string
}
const formMap: Iform = {
    name: 'Вася',
    password: '123'
}
const  formValidationMap: FormModifier<Iform> ={
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Пароль должен быть не менее 5 символов'}
}
type FormModifier<Type> = {
    [Property in keyof Type]: {isValid: true} | {isValid: false, errorMessage: string};
}

