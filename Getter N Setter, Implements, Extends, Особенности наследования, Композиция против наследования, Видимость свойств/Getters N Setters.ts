class UserGetterSetters{
    private _login: string;
    private _password: string;


    get password(): string {
        return this._password;
    }
    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    set password(value: string) {
        this._password = value;
    }
}

const userrr = new UserGetterSetters()
userrr.login = 'Name';
console.log(userrr.login)