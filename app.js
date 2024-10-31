/*Function that will randomly generate a number between 1 and 3, this will be used to pick from 'rock', 'paper' and 'scissors'
in a switch statement*/



/* ------- global variabels declared here  ------- */
let enterButton = document.querySelector('.Enter');
let humanScore = 0;
let computerScore = 0;







const container = document.querySelector('.container');


let rockButton = document.createElement('button');
rockButton.classList.add('rockButton');
rockButton.textContent = "Rock";
let paperButton = document.createElement('button');
paperButton.classList.add('paperButton');
paperButton.textContent = "Paper";
let scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissorsButton');
scissorsButton.textContent = "Scissors";




/* -------  Computer function to randomly generate a number 1-3 and return 'rock', 'paper', or 'scissors'  ------- */

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


/* ------- Funciton for the logic to play a round of rock paper scissors, which takes the return value of computer() and player selection as inputs  ------- */


function playRound(humanChoice, computerChoice){

    humanChoice.toLowerCase();

if (humanScore === 5){
    console.log('human score is 5');
    humanScore = 0;
    computerScore = 0;
    alert("Humans Won!");
    Enter(5);
}
else if (computerScore === 5){
    console.log('computer score is 5');
    humanScore = 0;
    computerScore = 0;
    alert("Computers Won!");
    Enter(5);
}
else if (humanChoice === computerChoice || computerChoice === humanChoice){
    console.log("you tied");
    
}
/*human win cases*/
else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log("Human has won");
    humanScore++;
    
}
else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log("Hman has won");
    humanScore++;
    
}
else if (humanChoice ==="scissors" && computerChoice === "paper"){
    console.log("Hman has won");
    humanScore++;
    
}

/*computer win cases*/
else if (computerChoice === "rock" && humanChoice === "scissors"){
    console.log("Computer has won, human race is doomed");
    computerScore++;
    
} 
else if (computerChoice === "paper" && humanChoice === "rock"){
    console.log("Computer has won, human race is doomed");
    computerScore++;
    
}
else if (computerChoice ==="scissors" && humanChoice === "paper"){
    console.log("Computer has won, human race is doomed");
    computerScore++;
    
}


}


/* ------- function to allow the player to enter the game and hwen the game is finished to reset the game ------- */

function Enter(fin){

    let round = 0;
    round = fin;

   switch( round) {
    //inital round ask player to play the game

    case 0 : addGamePieces();
                break;
    case 5 : removeGamePieces();
            break;

            



   }
} 
/* ------- functions to add the game pieces: 'rock', 'paper' and 'scissor' buttons and add in the enter button to the dom   ------- */

function addGamePieces(){
    container.appendChild(rockButton);
    container.appendChild(paperButton);
    container.appendChild(scissorsButton);

    container.removeChild(enterButton);

    rockButton.addEventListener('click', () => {
        playRound('rock', computer());
    });
    
    paperButton.addEventListener('click', () => {
        playRound('paper', computer());
    });
    
    scissorsButton.addEventListener('click', () => {
        playRound('scissors', computer());
    });

}

/* ------- functions to remove the game pieces: 'rock', 'paper' and 'scissor' buttons and re add int he enter button to the dom   ------- */

function removeGamePieces(){
    container.removeChild(rockButton);
    container.removeChild(paperButton);
    container.removeChild(scissorsButton);
    
    container.appendChild(enterButton);

    rockButton.addEventListener('click', () => {
        playRound('rock', computer());
    });
    
    paperButton.addEventListener('click', () => {
        playRound('paper', computer());
    });
    
    scissorsButton.addEventListener('click', () => {
        playRound('scissors', computer());
    });

}

/* ------- Adding event listener to the enter button which calls the enter function on 'click' ------- */
enterButton.addEventListener('click', ()=>{
    Enter(0);
})