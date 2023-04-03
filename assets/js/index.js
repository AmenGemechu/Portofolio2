//Dictionary object
const handOptions = {
    "rock": "assets/images/rock.png",
    "paper": "assets/images/paper.png",
    "scissors": "assets/imanges/scissors.png",
    "lizard": "assets/images/lizard.png",
    "spock": "assets/images/spock.png"
}

//Score
let SCORE = 0;

//Pick a user hand function
const pickUserHand = (hand) => {
    console.log(hand); //takeout
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //Takes to the next page
    let contest =document.querySelector(".contest");
    contest.style.display = "flex";

    //Sets user selection
    document.getElementById("userPickImage").src = handOptions[hand];

    //Computer selection
    let computerHand = pickComputerHand();
    
}
//Picka computer hand function
const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors", "lizard", "spock"]; //Array
    let computerHand = hands[Math.floor(Math.random() * 5)];

    //Set computer selection
    document.getElementById = ("computerPickImage").src = handOptions[computerHand];

    return computerHand;

}

//Referee winner/looser
const referee = (userHand, computerHand) => {
    //Paper
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
    if (userHand == "paper" && cpHand == "lizard") {
        setDecision("YOU LOOSE!");
      }
    if (userHand == "paper" && cpHand == "SPOCK") {
        setDecision("YOU WON!");
        setScore(SCORE + 1);
      }

    //Rock
    if (userHand == "rock" && computerHand == "scissors") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && computerHand == "paper") {
          setDecision("YOU WIN!");
          setScore(SCORE + 1);
        }
      if (userHand == "rock" && cpómputerHand == "rock") {
          setDecision("It's a tie!");
        }
      if (userHand == "rock" && computerHand == "spock") {
          setDecision("YOU LOOSE!");
        }
      if (userHand == "rock" && cpHand == "lizard") {
          setDecision("YOU WON!");
          setScore(SCORE + 1);
        }

        //Scissors
        if (userHand == "scissors" && computerHand == "rock") {
            setDecision("YOU LOSE!");
          }
        if (userHand == "scissors" && computerHand == "paper") {
            setDecision("YOU WIN!");
            setScore(SCORE + 1);
            }
        if (userHand == "scissors" && computerHand == "scissor") {
            setDecision("It's a tie!");
            }
        if (userHand == "scissors" && computerHand == "spock") {
            setDecision("YOU LOOSE!");
            }
        if (userHand == "scissors" && computerHand == "lizard") {
            setDecision("YOU WON!");
            setScore(SCORE + 1);
            }

         //Lizard
         if (userHand == "lizard" && computerHand == "rock") {
            setDecision("YOU LOSE!");
          }
        if (userHand == "lizard" && computerHand == "paper") {
            setDecision("YOU WIN!");
            setScore(SCORE + 1);
            }
        if (userHand == "lizard" && computerHand == "lizard") {
            setDecision("It's a tie!");
            }
        if (userHand == "lizard" && computerHand == "scissors") { 
            setDecision("YOU LOOSE!");
            }
        if (userHand == "scissors" && computerHand == "spock") { 
            setDecision("YOU WON!");
            setScore(SCORE + 1);
            }

         //Spock
         if (userHand == "spock" && computerHand == "lizard") {
            setDecision("YOU LOSE!");
          }
        if (userHand == "spock" && computerHand == "scissors") {
            setDecision("YOU WIN!");
            setScore(SCORE + 1);
            }
        if (userHand == "spock" && computerHand == "spock") {
            setDecision("It's a tie!");
            }
        if (userHand == "spock" && computerHand == "paper") { 
            setDecision("YOU LOOSE!");
            }
        if (userHand == "spock" && computerHand == "rock") { 
            setDecision("YOU WON!");
            setScore(SCORE + 1);
            }

    }

const setWinner = (winner) => {
    console.log(winner);
}

const setScore = (score) => {
    console.log(score);
}

