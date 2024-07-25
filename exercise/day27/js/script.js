var btn = document.querySelector(".btn-login");
var modalEl = document.querySelector(".modal");
var overlayEl = document.querySelector(".overlay");
var loginEl = document.querySelector(".modal-login");
var registerEl = document.querySelector(".modal-register");
var modalLogin = document.querySelector(".login-content");
var modalRegister = document.querySelector(".register-content");
var emailEl = document.querySelector(".email-input");
var passEl = document.querySelector(".password-input");
var nameEl = document.querySelector(".name-input");

btn.addEventListener("click", function () {
    modalEl.classList.add("show");
});

overlayEl.addEventListener("click", function () {
    modalEl.classList.remove("show");
});

loginEl.addEventListener("click", function () {
    if (modalLogin.classList.contains("d-none")) {
        this.classList.add("active");
        registerEl.classList.remove("active");
        modalLogin.classList.remove("d-none");
        modalRegister.classList.add("d-none");
    }
});

registerEl.addEventListener("click", function () {
    if (modalRegister.classList.contains("d-none")) {
        this.classList.add("active");
        loginEl.classList.remove("active");
        modalRegister.classList.remove("d-none");
        modalLogin.classList.add("d-none");
    }
});

//validator
