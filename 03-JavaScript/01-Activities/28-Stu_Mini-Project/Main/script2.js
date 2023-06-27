// variable for wins, losses, and ties.
var numWin = 0
var numLoss = 0
var numTie = 0

var options = ["R", "P", "S"]

function getrandomNum() {
    return Math.floor(Math.random() * options.length);
}

function playgame() {
// prompts user to enter choice
    var userChoiceInitial = prompt("Enter your choice (R,P,S): ");
// randomNum from above chooses from array options
    var computerChoice = options[getrandomNum()]
    window.alert("The computer chose " +computerChoice+".")
    console.log("Computer Choice: " +computerChoice)
// changes userChoice to uppercase for consistency
    var userChoice = userChoiceInitial.toUpperCase()

// if userChoice is same as computerChoice, we have tie
// if user meets rules, user wins
// else computer wins
    if (userChoice === computerChoice) {
        console.log("its a tie")
        window.alert("You tied")
        numTie++
    } else if ((userChoice === "R" && computerChoice === "S") || (userChoice === "P" && computerChoice === "R") || (userChoice === "S" && computerChoice === "P")) {
        console.log("user wins")
        window.alert("You win")
        numWin++
    } else {
        console.log("computer wins")
        window.alert("You lost")
        numLoss++
    }

// shows window alert with stats history
    window.alert("Stats:\nWins: " + numWin + "\nLosses: " + numLoss + "\nTies: " + numTie);

// confirm window with yes and no (truthy) to keep looping through without infinite loop
    if (window.confirm("Do you want to play again?")) {
        playgame()
    } else {
        return
    }

}

playgame()
