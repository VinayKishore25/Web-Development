function func(){
    var randomValue = Math.trunc(Math.random()*6)
    console.log(randomValue);
    var imgAddress = document.getElementById("diceFace")
    imgAddress.src = `die${randomValue+1}.jpg`
    if(currentPlayer == 1)
    {
        player2Address.classList.add("activePlayer")
        player1Address.classList.remove("activePlayer")
        let score = document.getElementById("player1Score")
        let prev = parseInt(score.innerHTML)
        let x = prev + randomValue +1
        score.innerHTML = x
        if(x >= 50)
        {
            player1Address.classList.add("winner")         
            return
        }
        currentPlayer = 2
        
    }
    else
    {
       
        player1Address.classList.add("activePlayer")
        player2Address.classList.remove("activePlayer")
        let score = document.getElementById("player2Score")
        let prev = parseInt(score.innerHTML)
        let x = prev + randomValue +1
        score.innerHTML = x
        if(x >= 50)
        {
            player2Address.classList.add("winner")
            return
        }
        currentPlayer = 1
        
    }
}
var currentPlayer = 1
var player1Address = document.getElementsByClassName("player1")[0]
var player2Address = document.getElementsByClassName("player2")[0]
player1Address.classList.add("activePlayer")
function refresh(){
    let score1 = document.getElementById("player1Score")
    let score2 = document.getElementById("player2Score")
    player1Address.classList.add("activePlayer")
    player2Address.classList.remove("activePlayer")
    player2Address.classList.remove("winner")
    player1Address.classList.remove("winner")
    let x = 0
    score1.innerHTML = x
    score2.innerHTML = x
    currentPlayer = 1

}
