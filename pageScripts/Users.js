
export const USERS = [];

export class User{
    constructor(email, user, firstNames, lastNames, age, password){
        this.email = email;
        this.user = user;
        this.firstNames = firstNames;
        this.lastNames = lastNames;
        this.age = age;
        this.password = password;
        // USERS.push(
        //     {
        //         email: this.email,
        //         user: this.user,
        //         firstNames: this.firstNames,
        //         lastNames: this.lastNames,
        //         age: this.age,
        //         password: this.password
        //     }
        // )
        USERS.push(this);
    }
}

