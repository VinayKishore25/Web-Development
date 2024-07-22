function moveNext()
{
    i++;
    if(i < template1.length)
    {
        continueButtonAddress.style.display = "none";
        previousButtonAddress.style.display = "none";
        promptAddress.innerHTML = "";
        new TypeIt("#prompt", {
            strings: template1[i],
            speed: 20,
            cursor: false,
            afterComplete: function(instance){
                if(i < template1.length)
                continueButtonAddress.style.display = "block";
                if(i > 0)
                previousButtonAddress.style.display = "block";
            }
        }).go();
        inputFieldAddress.value = res[i];
    }
    if(i == template1.length)
    {
        continueButtonAddress.style.display = "none";
        StartBuildForm(template1,res);
    }
    if(i > -1)
    {
        inputFieldAddress.style.display = "block";
    }
}
function moveBack(){
    i--;
    console.log(i);
    if(i >= 0)
    {
        previousButtonAddress.style.display = "none";
        continueButtonAddress.style.display = "none";
        promptAddress.innerHTML = "";
        new TypeIt("#prompt", {
            strings: template1[i],
            speed: 20,
            cursor: false,
            afterComplete: function(instance){
                if(i < template1.length - 1)
                continueButtonAddress.style.display = "block";
                if(i > 0)
                previousButtonAddress.style.display = "block";
            }
        }).go();
        inputFieldAddress.value = res[i];
    }
    if(i > -1)
    {
        inputFieldAddress.style.display = "block";
    }
}


















function storeData(event)
{
    res[i] = event.target.value;
    // console.log(res);
}
new TypeIt("#prompt", {
    strings: "Welcome to Resume Builder!!!",
    speed: 20,
    cursor: false,
    afterComplete : function(instance){
        continueButtonAddress.style.display = "block";
    }
}).go();








var i = -1;
var template1 = ["Enter your name ? "," Enter your github link :", "Enter your LinkedIn profile link :"," Enter your Email :","Enter your phone number ?","Enter your university name?"];
    // ,"Enter the branch you have pursued ?", "Enter number of internships?","Enter your Project1","Enter your Mentor name for project1 ?","StartDate of your Project1","EndDate of your Project1","Enter your project1 description","Location of your Project1","Enter your Project1 Github link","Enter your Mentor name for project2 ?","StartDate of your Project2","EndDate of your Project2","Enter your project2 description","Location of your Project2","Enter your Project2 Github link","Enter your Mentor name for project3 ?","StartDate of your Project3","EndDate of your Project3","Enter your project3 description","Location of your Project3","Enter your Project3 Github link","Enter number of Achievements:","Enter the number of Programming languages:","Enter the number of Web technologies:","Enter the number of AI/ML tools:", "Enter the other Developer tools:"];
var res = Array(template1.length).fill("");
var previousButtonAddress = document.getElementById("previous");
var continueButtonAddress = document.getElementById("continue");
var promptAddress = document.getElementById("prompt");
var inputFieldAddress = document.getElementById("inputField");



const StartBuildForm=()=>{
    alert('test')
    console.log(res)
}