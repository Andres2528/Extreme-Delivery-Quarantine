import { MALE_AVATARS } from "./Avatars.js";

export const USERS = [];

export class User{
    constructor( avatarPath, email, user, firstNames, lastNames, age, password){
        this.avatarPath = avatarPath;
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

let AndresLopez = new User( "images/avatars/"+MALE_AVATARS[2],"balopez@unipanamericana.edu.co", "Andrés López", "Bryan Andrés", "López palacios", 23, "12345");
let AndresOrtega = new User( "images/avatars/"+MALE_AVATARS[2],"acortega@unipanamericana.edu.co", "Andres Ortega", "Andres Camilo", "Ortega Muñoz", 19, "12345");

