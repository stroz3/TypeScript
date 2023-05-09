class UserBuilder {
    name: string;

    setName(name: string): this{
        this.name = name;
        return this;
    }

    isAdmin():this is AdminBuilder{
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[];
}

const resUser = new UserBuilder().setName('Vasya');
const resAdmin = new AdminBuilder().setName('Vasya');

let userUnion: UserBuilder | AdminBuilder = new UserBuilder();

if(userUnion.isAdmin()){
    console.log(user);
} else{
    console.log(user);
}