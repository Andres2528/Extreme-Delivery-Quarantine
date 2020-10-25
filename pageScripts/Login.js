
import { User, USERS } from "./Users.js";

export class Login {


    constructor() {
        this.loginButton = document.getElementById("loginButtonLogin");
        this.registerButton = document.getElementById("registerButtonLogin");
        this.userTextField = document.getElementById("userTextField");
        this.passwordTextField = document.getElementById("passwordTextField");
        this.loginImage = document.getElementById("loginImage");
        this.loginTitle = document.getElementById("loginTitle");
        this.redirectToRegister();
        this.login();
        this.noValidationReasons = [];
        this.noValidationReasons.invalidPassword = "invalidPassword";
        this.noValidationReasons.invalidEmail = "invalidEmail";
        this.noValidationReasons.emptyField = "emptyFields";
        this.loginErrorReason = "none";
    }

    login() {
        this.loginButton.addEventListener("click", (e) => {
            if (this.validate() == true) {
                let isOnline = localStorage.setItem('isOnline', true);
                this.loginImage.src =this.userOnline.avatarPath;
                $("#navBar").find(".logInBtn").css("display", "none");
                $("#navBar").find(".usContainer").css("display", "flex");
                this.loginButton.style.display = "none";
                this.registerButton.style.display = "none";
                this.userTextField.style.display = "none";
                this.passwordTextField.style.display = "none";
                this.loginTitle.innerHTML = "¡Bienvenido<br>" + this.userOnline.user+"!";
                setTimeout(() => {
                    window.location.href = "home.html";
                }, 1000);
                e.preventDefault();
            }
            else {
                if (this.loginErrorReason === this.noValidationReasons.invalidEmail) {
                    alert("El correo ingresado no se encuentra registrado");
                }
                else if (this.loginErrorReason === this.noValidationReasons.invalidPassword) {
                    alert("La contraseña ingresada no es valida");
                }
                else if (this.loginErrorReason === this.noValidationReasons.emptyField) {
                    alert("Los campos no pueden estar vacios");
                }
            }
        });
    }




    validate() {
        let user = null;
        for (let i = 0; i < USERS.length; i++) {
            user = USERS[i];
            if (this.userTextField.value === user.email) {
                if (this.passwordTextField.value == user.password) {
                   this.userOnline = {
                        user: user.user,
                        avatarPath: user.avatarPath
                    };
                    localStorage.setItem('userOnline', JSON.stringify(this.userOnline));
                    return true;
                }
            }
        }
        if (this.userTextField.value.length <= 0 || this.passwordTextField.value.length <= 0) {
            this.loginErrorReason = this.noValidationReasons.emptyField;
        }
        else if( user.email != this.userTextField.value){
            this.loginErrorReason = this.noValidationReasons.invalidEmail;
        }
        else if( user.email != this.passwordTextField.value){
            this.loginErrorReason = this.noValidationReasons.invalidPassword;
        }

        return false;
    }


    redirectToRegister() {
        this.registerButton.addEventListener("click", (e) => {
            window.location.href = "register.html";
            return
        }, false);
    }
}

let login = new Login();
console.log(USERS.length);