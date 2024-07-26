// var AdminUserNames = ["1","2"];
// var AdminPasswords = ["1","2"];
// var UserUserNames = ["11","22"];
// var UserPasswords = ["11","22"];
if(localStorage.getItem("AdminUserNames")){

}
else{
    localStorage.setItem("AdminUserNames",JSON.stringify(['1','2']));
}

if(localStorage.getItem("AdminPasswords")){

}
else{
    localStorage.setItem("AdminPasswords",JSON.stringify(['1','2']));
}


if(localStorage.getItem("UserUserNames")){
}
else{
    localStorage.setItem("UserUserNames",JSON.stringify(['11','22']));
}

if(localStorage.getItem("UserPasswords")){

}
else{
    localStorage.setItem("UserPasswords",JSON.stringify(['11','22']));
}



const ChangetoAdmin = () => {
    var card = document.getElementsByClassName("Moving_forms")[0];
    card.style.left = "0%";
    const div1 = document.getElementsByClassName("User_login")[0];
    div1.style.display = "none";
    const div2 = document.getElementsByClassName("Forget_password")[0];
    div2.style.display = "none";
    const div3 = document.getElementsByClassName("SignUP_form")[0];
    div3.style.display = "none";
    const div4 = document.getElementsByClassName("Admin_login")[0];
    div4.style.display = "flex";
}
const ChangetoUser = () => {
    var card = document.getElementsByClassName("Moving_forms")[0];
    card.style.left = "50%";
    const div1 = document.getElementsByClassName("User_login")[0];
    div1.style.display = "flex";
    const div2 = document.getElementsByClassName("Forget_password")[0];
    div2.style.display = "none";
    const div3 = document.getElementsByClassName("SignUP_form")[0];
    div3.style.display = "none";
    const div4 = document.getElementsByClassName("Admin_login")[0];
    div4.style.display = "none";
}

const Forgot = () => {
    const div2 = document.getElementsByClassName("User_login")[0];
    div2.style.display = "none";
    const div1 = document.getElementsByClassName("Forget_password")[0];
    div1.style.display = "flex";
}

const Update = () => {
    
    var Email = document.getElementsByClassName("User_login_Email_fr")[0];
    var Password = document.getElementsByClassName("User_login_Password_fr")[0];
    UserUserNames = JSON.parse(localStorage.getItem("UserUserNames"));
    UserPasswords = JSON.parse(localStorage.getItem("UserPasswords"));
    var Index = UserUserNames.indexOf(Email.value);
    if(Index != -1){
        UserPasswords[Index] = Password.value;
    }
    else{
        alert("wrong details")
    }
    localStorage.setItem("UserUserNames",JSON.stringify(UserUserNames));
    localStorage.setItem("UserPasswords",JSON.stringify(UserPasswords));
    const div2 = document.getElementsByClassName("User_login")[0];
    div2.style.display = "flex";
    const div1 = document.getElementsByClassName("Forget_password")[0];
    div1.style.display = "none";


}
const DonthaveAccount = () =>{
    
    const div2 = document.getElementsByClassName("User_login")[0];
    div2.style.display = "none";
    const div1 = document.getElementsByClassName("SignUP_form")[0];
    div1.style.display = "flex";
}
const Create = () => {
    const div1 = document.getElementsByClassName("SignUP_form")[0];
    div1.style.display = "none";
    const div2 = document.getElementsByClassName("User_login")[0];
    div2.style.display = "flex";
}
const Login = () => {
    var Email = document.getElementsByClassName("User_login_Email")[0];
    var Password = document.getElementsByClassName("User_login_Password")[0];
    UserUserNames = JSON.parse(localStorage.getItem("UserUserNames"));
    UserPasswords = JSON.parse(localStorage.getItem("UserPasswords"));
    var Index = UserUserNames.indexOf(Email.value);
    console.log(UserUserNames,UserPasswords)
    if(Index != -1){
        if(UserPasswords[Index] == Password.value){
            window.location.href = "./loginpage.html"
        }
        else{
            alert("error")
        }
    }
    else{
        alert("error")
    }
}
