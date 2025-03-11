const btnLogin = document.querySelector(".btn-login");
const emailEle = document.querySelector(".E-mail ");
const passwordEle = document.querySelector(".password");
const messageEle = document.querySelector(".message");
const btnforget = document.querySelector(".forget")
const ModalEle = document.querySelector(".modal")
const btnOk = document.querySelector(".ok")
    // const loginController = require('')
    // loginController.loginuser
console.log(emailEle)
console.log(passwordEle)
const users = [{
        email: "admin",
        password: "admin",
        name: "David admin",
        role: "admin",
    },
    {
        email: "user",
        password: "user",
        name: "Maria user",
        role: "user",
    },
];

btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    messageEle.classList.remove("login-success", "login-fail");
    const emailInput = emailEle.value;

    const passwordInput = passwordEle.value;

    if (!emailInput || !passwordInput) {
        messageEle.textContent = "Login Fail";
        messageEle.classList.add("login-fail");
        return;
    }
    messageEle.textContent = "";

});

const LoginEle = document.querySelector(".a-login");
const SinginEle = document.querySelector(".a-singin");
const btnEle = document.querySelectorAll(".title-2 .style");

console.log(btnEle);
const clearClassActive = () => {
    btnEle.forEach((val) => val.classList.remove("active"));
};

LoginEle.addEventListener("click", () => {
    clearClassActive();
    LoginEle.classList.add("active");
});

SinginEle.addEventListener("click", () => {
    clearClassActive();
    SinginEle.classList.add("active");
});
document.addEventListener("click", (e) => {
    if (e.target === btnforget || e.target.closest(".forget") || e.target.closest(".ok") || e.target.closest(".input-forget")) {
        ModalEle.style.display = "block"
    } else {
        messageModalEle.textContent = ""
        ModalEle.style.display = "none"
    }
})
const input_forgetEle = document.querySelector(".input-forget")
const messageModalEle = document.querySelector(".message-modal")
btnOk.addEventListener("click", (e) => {
    e.preventDefault();
    const forget_email_input = input_forgetEle.value

    if (!forget_email_input) {
        messageModalEle.textContent = "Enter Email !"
        messageModalEle.classList.add("login-fail")
    }
    console.log(document.getElementsByClassName(".E-mail"));
})


// function setCookie(mailInput, cvalue, passwordInput, pvalue) {
//     const emailInput = emailEle.value;
//     const passInput = passwordEle.value;
//     cvalue = emailInput;
//     pvalue = passInput;
//     document.cookie = mailInput + "=" + cvalue + ";" + ";path=/";
//     document.copkie = passwordInput + "=" + pvalue + ";" + ";path=/";
// }

// function getCookie(mailInput, passwordInput) {
//     let name = mailInput + "=";
//     let pass = passwordInput += "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// function checkCookie() {
//     let user = getCookie("emailInput");
//     let pass = getCookie("passwordInput")
//     if (user != "") {
//         alert("Welcome again " + user + pass);
//     } else {
//         user = document.getElementsByClassName(".E-mail");
//         if (user != "" && user != null) {
//             setCookie("emailInput", user, 30);
//         }
//     }
// }