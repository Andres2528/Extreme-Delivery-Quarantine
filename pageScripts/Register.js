import { FEMALE_AVATARS, MALE_AVATARS } from "./Avatars.js";
import { User, USERS } from "./Users.js";

export class Register {
    constructor() {
        this.avatars = [];
        this.types = [];
        this.imageNum = 0;
        this.types.male = "male";
        this.types.female = "female";
        this.type = this.types.male;
        this.avatarType = document.getElementById("avatarType");
        this.selectAvatarButtonLeft = document.getElementById("selectAvatarButtonLeft");
        this.selectAvatarButtonRight = document.getElementById("selectAvatarButtonRight");
        this.registerImage = document.getElementById("registerImage");
        this.registerImage.src = "../images/avatars/"+MALE_AVATARS[0];
        this.changeAvatarType();
       this.selectAvatar();
    }

    changeAvatarType(){
        this.avatarType.addEventListener("click", ()=> {
            if( this.type === this.types.male){
                this.type = this.types.female;
                this.avatarType.title = "Avatares para mujer";
                this.avatarType.style.backgroundImage = 'url("../images/female.png")';
                this.avatarType.style.backgroundSize = "15px";
                this.imageNum = 0;
                this.registerImage.src = "../images/avatars/"+FEMALE_AVATARS[this.imageNum];
            
            }
            else if(this.type === this.types.female){
                this.type = this.types.male;
                this.avatarType.title = "Avatares para hombre";
                this.avatarType.style.backgroundImage = 'url("../images/male.png")';
                this.avatarType.style.backgroundSize = "15px";
                this.imageNum = 0;
                this.registerImage.src = "../images/avatars/"+MALE_AVATARS[this.imageNum];
            }
        }, false);
    }

    selectAvatar() {
        this.selectAvatarButtonLeft.addEventListener("click", () => {
            if (this.type == this.types.male) {
                if ( this.imageNum > 0  ) {
                    this.imageNum--;
                    this.registerImage.src = "../images/avatars/"+MALE_AVATARS[this.imageNum];
                }
            }
            if (this.type == this.types.female) {
                if ( this.imageNum > 0 ) {
                    this.imageNum--;
                    this.registerImage.src = "../images/avatars/"+FEMALE_AVATARS[this.imageNum];
                }
            }

        }, false);

        this.selectAvatarButtonRight.addEventListener("click", ()=> {
            if( this.type == this.types.male){
                if(  this.imageNum <= MALE_AVATARS.length-2){
                 this.imageNum++;
                 this.registerImage.src = "../images/avatars/"+MALE_AVATARS[this.imageNum];
                }
            }
            if( this.type == this.types.female){
             if(  this.imageNum <= FEMALE_AVATARS.length-2){
              this.imageNum++;
              this.registerImage.src = "../images/avatars/"+FEMALE_AVATARS[this.imageNum];
             }
         }
            
         },false);
    }

}

let register = new Register();
let user = new User("andreslp08@hotmail.com", "andreslp08", "a", "l", 23, 12345);
console.log(USERS.length);