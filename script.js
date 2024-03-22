function getComputerChoice(){
  const stringArray = ['ROCK','PAPER','SCISSORS']
  const computerChoice = stringArray[(Math.floor(Math.random()*stringArray.length))] //math.random()*stringArray.length takes the length of the array (3 strings) (index count version is: 0 , 1 , 2) and uses Math.random() to randomly choose an index value from the array and then Math.floor to round down. Think of it as we are defining the range of random numbers math.random() can choose from (0, 1, or 2).Because we are dealing with strings in the array, what is stored in the computerChoice variable is the entirety of the string located at the randomly selected index value within the array. In other words, it is a string that is stored in computerChoice variable. Notice the brackets after stringArray when we assign it to computerChoice. What is being stored in computerChoice is the value of the index. example: stringArray[0] means "Rock".
  console.log(computerChoice) //here to see what the console output of computerChoice is each time we play a round
  return computerChoice
}

let winCount = 0
let lossCount = 0

function playRound(){
  for(let count = 0; count < 5; count++){
  const computerSelection = getComputerChoice().toLowerCase()
  //console.log(computerSelection)
  const playerSelection = prompt("Enter a string").toLowerCase()
  
  if (playerSelection == computerSelection){
      console.log("You Win!")
      console.log(count)
      winCount++
    }
  else{
      console.log("You Lose!")
      console.log(count)
      lossCount++
    }
  }
  console.log("Final Score: Wins -" + " " + winCount + " " + "vs" + " " + "Losses -" + " " + lossCount)
  if (winCount > lossCount){
    console.log("Overall Winner!")
  }
  else {
    console.log("Overall Loser!")
  }
  console.log("Playable round limit reached (5)!")
}
playRound()

