class UserService {
    static db: any;

    static getUser(id: number){
        return UserService.db.findById(id);
    }
    constructor(id: number) {
    }

    create(){
        UserService.db;
    }
    static {
        UserService.db = '123';
    }
}

UserService.db = '1';
UserService.getUser(1);
let userService = new UserService(1);
userService.create()