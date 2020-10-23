export class Login {
    constructor(){
        this.loginButton = document.getElementById("loginButtonLogin");
        this.registerButton = document.getElementById("registerButtonLogin");
        this.redirectToRegister();
        this.login();
    }

    login(){
        this.loginButton.addEventListener("click", ()=>{
            var obj = {"nissan": "sentra", "color": "green"};
            localStorage.setItem('myStorage', JSON.stringify(obj));
         $("#navBar").find(".logInBtn").css("display", "none");
         $("#navBar").find(".usContainer").css("display", "flex");
        });
    }


    redirectToRegister(){
        this.registerButton.addEventListener("click", (e) =>{
            window.open("../register.html", "_self");
            return
        }, false); 
    }
}

let login = new Login();