// Числовой enum
enum StatusCode{
    SUCCESS,
    IN_PROGRESS,
    FAILED
}

// Строковый enum
enum StatusCode1{
    SUCCESS = 's',
    IN_PROGRESS = 'p',
    FAILED = 'f'
}

// Гибридный enum

enum StatusCode2{
    SUCCESS = 1,
    IN_PROGRESS = 'p',
    FAILED = 'f'
}

const ress = {
    message: 'Платеж успешный',
    statusCode: StatusCode.SUCCESS
}

if(ress.statusCode === StatusCode.SUCCESS){
    // ...
}

function action(status: StatusCode2){

}

action(StatusCode2.FAILED)
action(2);
// action('p')

enum Roles{
    ADMIN,
    DEVELOPER,
    HR
}
