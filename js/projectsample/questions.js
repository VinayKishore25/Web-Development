function moveNext()
{
    i++;
    console.log(i);
    if(i < (arr.length))
        {
            promptAddress.innerHTML = arr[i];
            inputFieldAddress.placeholder = arr[i];
            inputFieldAddress.value = res[i];
            previousButtonAddress.style.display = "block";
        }
    if(i >= arr.length - 1)
    {
        continueButtonAddress.style.display = "none";
        return;
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
        continueButtonAddress.style.display = "block";
        promptAddress.innerHTML = arr[i];
        inputFieldAddress.placeholder = arr[i];
        inputFieldAddress.value = res[i];
    }
    if(i <= 0)
    {
        continueButtonAddress.style.display = "block";
        previousButtonAddress.style.display = "none";
    }
    if(i > -1)
    {
        inputFieldAddress.style.display = "block";
    }
}
function storeData(event)
{
    res[i] = event.target.value;
    console.log(res);
}
var i = -1;

var arr = ["question1","questions2","question3","Question4","qeustion5"];
var res = ["","","","",""];
var previousButtonAddress = document.getElementById("previous");
var continueButtonAddress = document.getElementById("continue");
var promptAddress = document.getElementById("prompt");
var inputFieldAddress = document.getElementById("inputField");