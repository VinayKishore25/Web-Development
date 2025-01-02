function func()
{
    var buttonAddress = document.getElementById("startgame")
    buttonAddress.style.display="none";
    var n = window.prompt("Enter no of rows")
    // var m = window.prompt("Enter no of Columns")
    var tableAddress = document.getElementById("table_id")
    // var n = 5;
    for(let i = 0 ; i < n ; i++)
    {
        var row = document.createElement("tr")
        for(let j = 0 ; j < n ; j++)
        {
            var cell = document.createElement("td")
            var movingElement = document.createElement("div")
            movingElement.style.width = "30px"
            movingElement.style.height = "30px"
            movingElement.style.backgroundColor = "red"
            movingElement.style.display = "none"
            cell.appendChild(movingElement)
            cell.onclick = function(){
                movingElement.style.display = "block"
            }
            row.appendChild(cell)
        }
        tableAddress.appendChild(row)
    }



console.log(typeof null);




//     var totalWidth = (n - 1) * 50;
//     var totalHeight = (n - 1) * 50;
//     var bodyAddress = document.getElementById("body_id")
//     var currentPositionWidth = 10;
//     var currentPositionHeight = 10;
//     var movingElement = document.createElement("div")
//     movingElement.style.width="30px";
//     movingElement.style.height="30px";
//     movingElement.style.position = "absolute";
//     movingElement.style.backgroundColor="red";
//     movingElement.style.top = "10px";
//     movingElement.style.left = "10px";
//     tableAddress.appendChild(movingElement)
//     var upButton = document.createElement("button")
//     upButton.innerHTML = "up"
//     bodyAddress.appendChild(upButton)
//     upButton.onclick = function(){
//         if(currentPositionHeight <= 10)
//         {
//             return;
//         }
//         currentPositionHeight -= 53;
        
//         movingElement.style.top = `${currentPositionHeight}px`;
//     }
//     var bottomButton = document.createElement("button")
//     bottomButton.innerHTML = "bottom"
//     bottomButton.onclick = function(){
//         if(currentPositionHeight >= totalHeight)
//         {
//             return;
//         }
//         currentPositionHeight += 53;
//         movingElement.style.top = `${currentPositionHeight}px`;
//     }
//     bodyAddress.appendChild(bottomButton)
//     var leftButton = document.createElement("button")
//     leftButton.innerHTML = "left"
//     bodyAddress.appendChild(leftButton)
//     leftButton.onclick = function(){
//         if(currentPositionWidth <= 10)
//         {
//             return;
//         }
//         currentPositionWidth -= 53;
        
//         movingElement.style.left = `${currentPositionWidth}px`;
//     }
//     var rightButton = document.createElement("button")
//     rightButton.innerHTML = "right"
//     rightButton.onclick = function(){
//         if(currentPositionWidth >= totalWidth)
//         {
//             return;
//         }
//         currentPositionWidth += 53;
//         movingElement.style.left = `${currentPositionWidth}px`;
//     }
//     bodyAddress.appendChild(rightButton)
}