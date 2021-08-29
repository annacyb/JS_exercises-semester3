let countdownPlayer = 0
let countdownComputer = 0
let round = 1
let computersChoice = null
let playersChoice = null


function startGame() {
    getComputersChoice()
    getPlayerChoice()
}

function getComputersChoice() {
    let myArray = ['rock', 'paper', 'scissors']

    // Making a random number between 1 and 3
    let random_index = Math.floor(Math.random() * myArray.length)
    computersChoice = myArray[random_index]
    
    console.log("Computer chooses " + computersChoice)
    showComputersChoice(computersChoice)
}


function getPlayerChoice() {
    document.querySelector(".rock").addEventListener("click", playersChoiceRock)
    document.querySelector(".paper").addEventListener("click", playersChoicePaper)
    document.querySelector(".scissors").addEventListener("click", playersChoiceScissors)
}

function shakeAnimations() {
    document.getElementById("player1").classList.add("shake")
    document.getElementById("player2").classList.add("shake")
}

function playersChoiceRock() {
    console.log("rock")
    shakeAnimations()

    if (computersChoice == "scissors") {
        setTimeout(function(){
            countdownPlayer++
            document.getElementById("usersPoints").textContent = countdownPlayer
            }, 2000)
    }

    if (computersChoice == "rock") {

    }

    if (computersChoice == "paper") {
        setTimeout(function(){
            countdownComputer++
            document.getElementById("computersPoints").textContent = countdownComputer
            }, 2000)
    }

    //animation showing what user has chosen
    showUsersChoice("rock")
    round++
    setTimeout(startGame, 3000)
}

function playersChoicePaper() {
    console.log("paper")
    shakeAnimations()

    if (computersChoice == "rock") {
        setTimeout(function(){
            countdownPlayer++
            document.getElementById("usersPoints").textContent = countdownPlayer
            }, 2000)
    }
    if (computersChoice == "paper") {
    }

    if (computersChoice == "scissors") {
        setTimeout(function(){
            countdownComputer++
            document.getElementById("computersPoints").textContent = countdownComputer
            }, 2000)
        
    }
    //animation showing what user has chosen
    showUsersChoice("paper")
    round++
    setTimeout(startGame, 3000)
}

function playersChoiceScissors() {
    console.log("scissors")
    shakeAnimations()

    if (computersChoice == "paper") {
        setTimeout(function(){
            countdownPlayer++ 
            document.getElementById("usersPoints").textContent = countdownPlayer
            }, 2000)
    }
    if (computersChoice == "scissors") {
    }

    if (computersChoice == "rock") {
        setTimeout(function(){
            countdownComputer++
            document.getElementById("computersPoints").textContent = countdownComputer
            }, 2000)
    }
    //animation showing what user has chosen
    showUsersChoice("scissors")
    round++
    setTimeout(startGame, 3000)
}


function showUsersChoice(choice) {
    let player1 = document.querySelector("#player1")
    player1.addEventListener("animationend", function () {
        player1.classList.remove("shake");
        player1.classList.remove("paper");
        player1.classList.remove("scissors");
        player1.classList.remove("rock");
        player1.classList.add(choice);
    })
    determineWinner()
}

function showComputersChoice(choice) {
    let player2 = document.querySelector("#player2")
    player2.addEventListener("animationend", function () {
        player2.classList.remove("shake");
        player2.classList.remove("paper");
        player2.classList.remove("scissors");
        player2.classList.remove("rock");
        player2.classList.add(choice);
    })
}


function determineWinner() {
    
    if ((countdownComputer == 0) & (countdownPlayer == 0) & (round > 2)) {
        showTie()
        setTimeout(restartGame, 2000)
    }
    if ((round == 3) & (countdownPlayer > countdownComputer)) {
        showWin()
        setTimeout(restartGame, 2000)
    }
    if ((round == 3) & (countdownComputer > countdownPlayer)) {
        showLose()
        setTimeout(restartGame, 2000)
    }
    document.getElementById("roundNumber").textContent = round

}

function showWin() {
    setTimeout(function(){
        document.querySelector("#win").classList.remove("hidden")
        }, 2000)
}

function showLose() {
    setTimeout(function(){
        document.querySelector("#lose").classList.remove("hidden")
        }, 2000)
}

function showTie() {
    setTimeout(function(){
        document.querySelector("#tie").classList.remove("hidden")
        }, 2000)
}

function restartGame() {
    countdownPlayer = 0
    countdownComputer = 0
    round = 1
    computersChoice = 0
    playersChoice = 0
}


startGame()