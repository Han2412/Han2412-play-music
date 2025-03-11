const btnLogin = document.querySelector(".btn-login");
const emailEle = document.querySelector(".E-mail ");
const passwordEle = document.querySelector(".password");
const RetypeEle = document.querySelector(".Retype")
const messageEle = document.querySelector(".message");
const inputLNEle = document.querySelector(".input-ln")
const inputNEle = document.querySelector(".input-n")
const inputEmailele = document.querySelector(".email")
const inputDOBEle = document.querySelector(".day")



btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    const emailInput = emailEle.value;
    const passwordInput = passwordEle.value;
    const RetypeInput = RetypeEle.value;
    const LastNameInput = inputLNEle.value;
    const NameInput = inputNEle.value;
    const DOBInput = inputDOBEle.value;
    const PhoneNumberInput = inputEmailele.value;
    if (!emailInput) {
        messageEle.textContent = "Enter Email";
        return;
    }
    if (!passwordInput) {
        messageEle.textContent = "Enter password";
        return;
    }
    if (!RetypeInput) {
        messageEle.textContent = "retype password";
        return;
    }

    if (passwordInput != RetypeInput) {
        messageEle.textContent = "retype password";
        return;
    }
    if (!LastNameInput) {
        messageEle.textContent = "Enter-LastName";
        return;
    }
    if (!NameInput) {
        messageEle.textContent = "Enter-Name";
        return;
    }
    if (!DOBInput) {
        messageEle.textContent = "Enter-Date-Of-Birth";
        return;

    }
    if (!PhoneNumberInput) {
        messageEle.textContent = "Enter-Phone-Number";
        return;
    } else {
        window.location.href = "../login/login.html";
    }
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