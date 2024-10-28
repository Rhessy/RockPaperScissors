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


console.log(computer());

/* Function to get the players choice */

function player(){

    let choice = prompt("Enter in your choice/n Rock.. Paper.. or Scissors..: ");

    return choice;
}


console.log(player());


let computerScore = 0;
let humanScore = 0;