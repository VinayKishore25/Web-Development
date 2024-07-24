function changeToAdmin(){
    formName.innerHTML = "Admin Login";
    email.placeholder = "Admin Id";
    password.placeholder = "Password";
    login.style.display = "block";
    forgetPassword.style.display = "block";
    signUpButton.style.display = "none";
    form.style.transform = "translateX(-780px)";
    removeDynamicElements();
    login.onclick = null;
    login.onclick = function(event){
        let loginDetailsAdmin = JSON.parse(localStorage.getItem("loginDetailsAdmin"));
        let passwordAdmin = JSON.parse(localStorage.getItem("passwordAdmin"));
        let emailValue = inputDetailsEmail.pop();
        let index = loginDetailsAdmin.indexOf(emailValue);
        if(loginDetailsAdmin.includes(emailValue)){
            let passwordValue = inputDetailsPassword.pop();
            if(passwordAdmin[index] == passwordValue)
            {
                event.preventDefault();
                window.location.href='../home/homepage.html'; 
            }
            else{
                alert("Enter Valid Password");
            }
        }
        else{
            alert("Please Enter Valid Details");
        }
    }
}



function changeToUser()
{
    formName.innerHTML = "User Login";
    email.placeholder = "User Id";
    password.placeholder = "Password";
    login.style.display = "block";
    forgetPassword.style.display = "block";
    signUpButton.style.display = "block";
    form.style.transform = "translateX(-380px)";
    removeDynamicElements();
    login.onclick = null;
    login.onclick = function(event){
        let loginDetailsUser = JSON.parse(localStorage.getItem("loginDetailsUser"));
        let passwordUser = JSON.parse(localStorage.getItem("passwordUser"));
        console.log(passwordUser);
        let emailValue = inputDetailsEmail.pop();
        if(loginDetailsUser.includes(emailValue)){
            let index = loginDetailsUser.indexOf(emailValue);
            let passwordValue = inputDetailsPassword.pop();
            if(passwordUser[index] == passwordValue)
            {
                event.preventDefault();
                window.location.href= '../home/homepage.html';
            }
            else{
                alert("Enter Valid Password");
            }
        }
        else{
            alert("Please Enter Valid Details");
        }
    }
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
    update.onclick = null;
    update.onclick = function(event) {
        let loginDetailsUser = JSON.parse(localStorage.getItem("loginDetailsUser"));
        let passwordUser = JSON.parse(localStorage.getItem("passwordUser"));
        let emailValue = inputDetailsEmail.pop();
        if(loginDetailsUser.includes(emailValue))
        {
            // event.preventDefault();
            let index = loginDetailsUser.indexOf(emailValue);
            passwordUser[index] = password.value;
            console.log(passwordUser);
            localStorage.setItem("passwordUser",JSON.stringify(passwordUser));
            
        }
    }
}
function inputEmail(event)
{
    inputDetailsEmail.push(event.target.value);
}
function inputPassword(event)
{
    inputDetailsPassword.push(event.target.value);
}
function validate(event){
    let loginDetailsUser = JSON.parse(localStorage.getItem("loginDetailsUser"));
    let passwordUser = JSON.parse(localStorage.getItem("passwordUser"));
    console.log(passwordUser);
    let emailValue = inputDetailsEmail.pop();
    if(loginDetailsUser.includes(emailValue)){
        let index = loginDetailsUser.indexOf(emailValue);
        let passwordValue = inputDetailsPassword.pop();
        if(passwordUser[index] == passwordValue)
        {
            event.preventDefault();
            window.location.href= '../home/homepage.html';
        }
        else{
            alert("Enter Valid Password");
        }
    }
    else{
        alert("Please Enter Valid Details");
    }
}
function removeDynamicElements() {
    try { innerForm.removeChild(newInput); } catch {}
    try { innerForm.removeChild(register); } catch {}
    try { innerForm.removeChild(update); } catch {}
    try { innerForm.removeChild(remember); } catch {}
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


var inputDetailsEmail = [];
var inputDetailsPassword = [];

var loginDetailsAdmin1 = ['22a91a61a2','22a91a1275','22a91a12a7','23a95a6113','22mh1a4220','22p31a0402'];
var passwordAdmin1 = ['22a91a61a2','22a91a1275','22a91a12a7','23a95a6113','22mh1a4220','22p31a0402'];
var loginDetailsUser1 = ['22a91a61a2'];
var passwordUser1 = ['22a91a61a2'];
localStorage.setItem("loginDetailsAdmin",JSON.stringify(loginDetailsAdmin1));
localStorage.setItem("passwordAdmin",JSON.stringify(passwordAdmin1));
localStorage.setItem("loginDetailsUser",JSON.stringify(loginDetailsUser1));
localStorage.setItem("passwordUser",JSON.stringify(passwordUser1));