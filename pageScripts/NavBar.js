import { USER_STATE } from "./UserState.js";

export class NavBar{
    constructor(){
        this.usContainer = document.getElementById("usContainer");
        this.avatar = document.getElementById("avatar");
        this.avatarName = document.getElementById("avatarName");
        this.loginButton = document.getElementById("logInBtn");
        this.logoutButton = document.getElementById("logoutButton");
        this.detectUserState();
        this.showLogin();
        this.logout();
    }

    detectUserState(){
        if( USER_STATE.isOnline == true ){
            this.usContainer.style.display = "flex";
            this.loginButton.style.display = "none";
        }
        else{
            this.usContainer.style.display = "none";
            this.loginButton.style.display = "block"; 
        }
    }

    showLogin(){
        this.loginButton.addEventListener("click", (e) =>{
            window.open("../login.html", "_self");
            return;
        }, false);
    }

    logout(){
        this.logoutButton.addEventListener("click", () =>{
            this.usContainer.style.display = "none";
            this.loginButton.style.display = "block";
            let isOnline = localStorage.setItem('isOnline', false);
        }, false);
    }
}

let navbar = new NavBar();

