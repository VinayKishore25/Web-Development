function changeToAdmin(){
    formName.innerHTML = "Admin Login";
    email.placeholder = "Admin Id";
    password.placeholder = "Password";
    login.style.display = "block";
    forgetPassword.style.display = "block";
    signUpButton.style.display = "none";
    form.style.transform = "translateX(-780px)";
    try {
        innerForm.removeChild(newInput);
    } 
    catch {}
    try {
        innerForm.removeChild(register);
    } 
    catch{}
    try {
        innerForm.removeChild(update);
    } 
    catch{}
    try {
        innerForm.removeChild(remember);
    } 
    catch{}
}
function changeToUser()
{
    formName.innerHTML = "User Login";
    email.placeholder = "User Id";
    password.placeholder = "Password";
    login.style.display = "block";
    let signUpButton = document.getElementById("signUpButton");
    forgetPassword.style.display = "block";
    signUpButton.style.display = "block";
    form.style.transform = "translateX(-380px)";
    try {
        innerForm.removeChild(newInput);
    } 
    catch {}
    try {
        innerForm.removeChild(register);
    } 
    catch{}
    try {
        innerForm.removeChild(update);
    } 
    catch{}
    try {
        innerForm.removeChild(remember);
    } 
    catch{}
}
function changeToSignUp()
{
    formName.innerHTML = "Signing Up"
    email.placeholder = "New User Id";
    newInput.setAttribute("class","password");
    password.placeholder = "New Password";
    newInput.setAttribute("placeholder","Confirm New Password");
    forgetPassword.style.display = "none";
    signUpButton.style.display = "none";
    login.style.display = "none";
    innerForm.appendChild(newInput);
    register.innerHTML ="Register";
    register.setAttribute("class","login");
    innerForm.appendChild(register);
    noRegister.innerHTML = "Have an Account!!!";
    noRegister.setAttribute("class","forget");
    noRegister.style.marginTop = "30px";
    innerForm.appendChild(noRegister);
}
function resetPassword(){
    email.placeholder = "Your Id";
    password.placeholder = "Update Password";
    login.style.display = "none";
    forgetPassword.style.display = "none";
    signUpButton.style.display = "none";
    update.innerHTML = "Update";
    update.setAttribute("class","login");
    innerForm.appendChild(update);
    remember.innerHTML = "Remember Password!!!"
    remember.setAttribute("class","forget");
    remember.style.marginTop = "30px";
    innerForm.appendChild(remember);
}
var newInput = document.createElement("input");
var register = document.createElement("button");
var update = document.createElement("button");
var remember = document.createElement("button");
var noRegister = document.createElement("button");


var form = document.getElementById("form");
var formName = document.getElementById("formName");
var signUpButton = document.getElementById("signUpButton");
var password = document.getElementById("password");
var forgetPassword = document.getElementById("forget");
var innerForm = document.getElementById("innerForm");
var login = document.getElementById("login");
var email = document.getElementById("email");



var loginDetailsAdmin = ['22a91a61a2','22a91a1275','22a91a12a7','23a95a6113','22mh1a4220','22p31a0402'];
var passwordAdmin = ['22a91a61a2','22a91a1275','22a91a12a7','23a95a6113','22mh1a4220','22p31a0402'];
var loginDetailsUser = ['1234'];
var passwordUser = ['1234'];