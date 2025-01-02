var data = {
    name:"",
    mobile: 0,
    email:""
}
function addName(event)
{
    data.name = event.target.value;
}
function addMobile(event)
{
    data.mobile = event.target.value;
}
function addEmail(event)
{
    data.email = event.target.value;
}
function displayContent(event){
    event.preventDefault()
    console.log(data);
}
function getData(){
    var formAddress = document.getElementById("form");
    formAddress.style.display = "block";
    var newButton = document.createElement("button");
    newButton.innerHTML = "close";
    formAddress.appendChild(newButton);
    newButton.onclick = function(){
        formAddress.style.display = "none";
        formAddress.removeChild(newButton);
    }
}