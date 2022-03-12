// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {

    // get all button elements by tag name button

    let buttons = document.getElementsByTagName('button');

    // Loop through buttons in the html
    for (let button of buttons) {

        // Listen for if a button is clicked 
        button.addEventListener('click', function() {

            // Use getAttribute to check for the data-type and change the button response based on the datatype in HTML
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                console.log('You clicked a button!')
                alert(`You clicked ${gameType}`);
            }

        })

    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame() {

    // Creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}