function func()
{

    var x = window.prompt("enter your name")
    var y = window.prompt("enter your age")
    while(isNaN(y)) 
    {
        alert("please enter valid input")
        var y = window.prompt("enter your age")
    } 
    var z = window.prompt("enter your gender")
    while(z != "male" && z != "female")
    {
        alert("please enter valid input")
        var z = window.prompt("enter your gender")
    }
    var tab = document.getElementById("data")
    tab.style.display="block"
    var row = document.createElement("tr")
    var cell = document.createElement("td")
    cell.innerHTML = x
    var cell1 = document.createElement("td")
    
    cell1.innerHTML = y
    var cell2 = document.createElement("td")
    cell2.innerHTML = z
    row.appendChild(cell)
    row.appendChild(cell1)
    row.appendChild(cell2)
    tab.appendChild(row)
    row.ondblclick = function(){
        tab.removeChild(row)
        
    }
    cell.onclick = function(){
        cell.innerHTML = prompt("Please enter the name you would like to change")
        var check = cell.innerHTML
        check = check.toLowerCase()
        if(check == "delete")
        {
            tab.removeChild(row)
        }
    }
    cell1.onclick = function(){
        cell1.innerHTML = window.prompt("Please enter the age you would like to change")
        var check = cell1.innerHTML
        check = check.toLowerCase()
        if(check == "delete")
        {
            tab.removeChild(row)
        }
        else{
            while(isNaN(check)) 
            {
                alert("please enter valid input")
                cell1.innerHTML = window.prompt("Please enter the age you would like to change")
                var check = cell1.innerHTML
                check = check.toLowerCase()
                if(check == "delete")
                {
                    tab.removeChild(row)
                    break
                }
            } 
        }
    }
    cell2.onclick = function(){
        cell2.innerHTML = window.prompt("Please enter the gender you would like to change")
        var check = cell2.innerHTML
        check = check.toLowerCase()
        if(check == "delete")
        {
            tab.removeChild(row)
        }
        else{
            while(check != "male" && check != "female")
            {
                alert("please enter valid input")
                cell2.innerHTML = window.prompt("Please enter the gender you would like to change")
                var check = cell2.innerHTML
                check = check.toLowerCase()
                if(check == "delete")
                {
                    tab.removeChild(row)
                    break
                }
            }
        }
    }
    
}
// function del()
// {
//     var x = parseInt(window.prompt("enter which row should be deleted"))
//     var row = document.querySelector(`#data tr:nth-child(${x+1})`)
//     row.remove()
// }