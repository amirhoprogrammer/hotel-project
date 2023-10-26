const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
$(document).ready(function () {
    $('.png2').click(function () {
        var inputField = $(this).siblings('.pass');
        var icon = $(this);

        inputField.attr('type', 'text');
        icon.addClass('d-none');
        icon.siblings('.png1').removeClass('d-none');
    });

    $('.png1').click(function () {
        var inputField = $(this).siblings('.pass');
        var icon = $(this);

        inputField.attr('type', 'password');
        icon.addClass('d-none');
        icon.siblings('.png2').removeClass('d-none');
    });
});

