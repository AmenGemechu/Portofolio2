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
    if(userHand == "rock" && computerHand == "paper") {
        setWinner("YOU LOST!"){
            else if(userHand == "rock" && computerHand == "scissors") => {
                setWinner("You Won!")
                setScore(SCORE + 1)

    }

}

const setWinner = (winner) => {
    console.log(winner);
}

const setScore = (score) => {
    console.log(score);
}

