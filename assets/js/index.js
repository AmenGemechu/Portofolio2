//Dictionary object
const handOptions = {
    "rock": "assets/images/rock.png",
    "paper": "assets/images/paper.png",
    "scissors": "assets/imanges/scissors.png",
    "lizard": "assets/images/lizard.png",
    "spock": "assets/images/spock.png"
}

//Pick a hand function
const pickUserHand = (hand) => {
    console.log(hand);
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //Takes to the next page
    let contest =document.querySelector(".contest");
    contest.style.display = "flex";

    //Sets user selection
        document.getElementById("userPickImage").src = handOptions[hand];
    

}

