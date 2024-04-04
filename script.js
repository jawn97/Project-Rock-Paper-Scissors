let winCount = 0;
let lossCount = 0;
const maxScore = 5;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

const getComputerChoice = () => {
  const stringArray = ['Rock','Paper','Scissors'];
  const computerSelection = stringArray[(Math.floor(Math.random()*stringArray.length))] //math.random()*stringArray.length takes the length of the array (3 strings) (index count version is: 0 , 1 , 2) and uses Math.random() to randomly choose an index value from the array and then Math.floor to round down. Think of it as we are defining the range of random numbers math.random() can choose from (0, 1, or 2).Because we are dealing with strings in the array, what is stored in the computerChoice variable is the entirety of the string located at the randomly selected index value within the array. In other words, it is a string that is stored in computerChoice variable. Notice the brackets after stringArray when we assign it to computerChoice. What is being stored in computerChoice is the value of the index. example: stringArray[0] means "Rock".
  const p = document.createElement("p");
  p.innerText = ("Computer Chooses" + " " + computerSelection + "!");
  outcomeDiv.appendChild(p);
  return computerSelection
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
      const p = document.createElement("p");
      p.innerText = ("It's A Tie!");
      outcomeDiv.appendChild(p);
      }
    else if(playerSelection === 'Rock' && computerSelection ==='Scissors'){
      winCount++;
      const p = document.createElement("p");
      p.innerText = "You Win! Rock Smashes Scissors!";
      outcomeDiv.appendChild(p);
      }
    else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
      lossCount++;
      const p = document.createElement("p");
      p.innerText = "You Lose! Rock Is Smothered By Paper!";
      outcomeDiv.appendChild(p);
      }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
      winCount++;
      const p = document.createElement("p");
      p.innerText = "You Win! Paper Smothers Rock!";
      outcomeDiv.appendChild(p);
      }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
      lossCount++;
      const p = document.createElement("p");
      p.innerText = "You Lose! Paper Is Cut by Scissors!";
      outcomeDiv.appendChild(p);
      }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
      winCount++;
      const p = document.createElement("p");
      p.innerText = "You Win! Scissors Cuts Paper!";
      outcomeDiv.appendChild(p);
      }
    else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
      lossCount++;
      const p = document.createElement("p");
      p.innerText = "You Lose! Scissors Is Smashed By Rock!";
      outcomeDiv.appendChild(p);
      }
  const p = document.createElement("p");
  p.innerText = ("You: "+winCount+" - "+"Computer: "+lossCount);
  outcomeDiv.appendChild(p);

  if(winCount === maxScore){
    const p = document.createElement("p");
    p.innerText = ("You're The Overall Winner!");
    outcomeDiv.appendChild(p);
    disableButtons();
  }
  else if(lossCount == maxScore){
    const p = document.createElement("p");
    p.innerText = ("You're The Overall Loser!");
    outcomeDiv.appendChild(p);
    disableButtons();
  }
 };

 const disableButtons = () => {
  rockBtn.removeEventListener('click');
  paperBtn.removeEventListener('click');
  scissorsBtn.removeEventListener('click');
 }

rockBtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "Rock";
  playRound(playerSelection, computerSelection);
} )
paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "Paper";
  playRound(playerSelection, computerSelection);
} )
scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "Scissors";
  playRound(playerSelection, computerSelection);
} )


