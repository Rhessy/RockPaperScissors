/*Function that will randomly generate a number between 1 and 3, this will be used to pick from 'rock', 'paper' and 'scissors'
in a switch statement*/

function computer(){

let num = Math.floor(Math.random() * 3) + 1;

    /*switch statement to asign random number to game choice*/
    switch (num) {
        case 1:
            return "rock";
        case 2: 
            return "paper";
        case 3: 
            return "scissors";
    }

}


//console.log("Computers choice is: ", computer());

/* Function to get the players choice */

function player(){

    let choice = prompt("Enter in your choice/n Rock.. Paper.. or Scissors..: ");

    return choice;
}



let computerScore = 0;
let humanScore = 0;


/*Adding in logic for the game play*/

function playRound(humanChoice, computerChoice){

    console.log(humanChoice);
    console.log(computerChoice);
    humanChoice.toLowerCase();
    


if (humanChoice === computerChoice || computerChoice === humanChoice){
    console.log("you tied");
    return;
}
/*human win cases*/
else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log("Human has won");
    return humanScore++;
}
else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log("Hman has won");
    return humanScore++;
}
else if (humanChoice ==="scissors" && computerChoice === "paper"){
    console.log("Hman has won");
    return humanScore++;
}

/*computer win cases*/
else if (computerChoice === "rock" && humanChoice === "scissors"){
    console.log("Computer has won, human race is doomed");
    return computerScore++;
}
else if (computerChoice === "paper" && humanChoice === "rock"){
    console.log("Computer has won, human race is doomed");
    return computerScore++;
}
else if (computerChoice ==="scissors" && humanChoice === "paper"){
    console.log("Computer has won, human race is doomed");
    return computerScore++;
}




}



/* adding in game engine */

function playGame(){
    playRound(computer(), player());
    console.log('the score is Computer: ',computerScore, 'Human:', humanScore);

    playRound(computer(), player());
    console.log('the score is Computer: ',computerScore, 'Human:', humanScore);

    playRound(computer(), player());
    console.log('the score is Computer: ',computerScore, 'Human:', humanScore);

    playRound(computer(), player());
    console.log('the score is Computer: ',computerScore, 'Human:', humanScore);

    playRound(computer(), player());
    console.log('the score is Computer: ',computerScore, 'Human:', humanScore);



    if(humanScore > computerScore){
        console.log("Humans are victorious");
    }
    else {
        console.log("Computer rule, humans are doomes");
    }

}

playGame();