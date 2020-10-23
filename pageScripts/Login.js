import { User, USERS } from "./Users.js";

export class Login {
    constructor(){
        this.loginButton = document.getElementById("loginButtonLogin");
        this.registerButton = document.getElementById("registerButtonLogin");
        this.userTextField = document.getElementById("userTextField");
        this.passwordTextField = document.getElementById("passwordTextField");
        this.redirectToRegister();
        this.login();
      
    }

    login(){
        this.loginButton.addEventListener("click", ()=>{
            if( this.validate() == true ){
                let isOnline = localStorage.setItem('isOnline', true);
                $("#navBar").find(".logInBtn").css("display", "none");
                $("#navBar").find(".usContainer").css("display", "flex");
            }
        });
    }

    validate(){
        for (let i = 0; i < USERS.length; i++) {
            const user = USERS[i];
            if( this.userTextField.value === user.email ){
                if( this.passwordTextField.value == user.password){
                    return true;
                }
                else{
                    alert("La contraseña ingresada no es valida");
                    break;
                }
            }
            else{
                alert("El correo ingresado no se encuentra registrado");
                break;
            }
            
        }
        return false;
    }


    redirectToRegister(){
        this.registerButton.addEventListener("click", (e) =>{
            window.open("../register.html", "_self");
            return
        }, false); 
    }
}

let login = new Login();
console.log(USERS.length);