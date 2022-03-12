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
                runGame(gameType);
            }

        })
        // Call run game function with addition data-type
        runGame('addition');

    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

// Pass gameType variable that gets the datatype from HTML into the function
function runGame(gameType) {

    // Creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Check the gameType
    if (gameType === 'addition') {
        //Call the function for this game type and pass in the two random numbers
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}! Aborting!`;
    }

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    //Get operand 1 by ID from the HTML and put in an operand number 
    document.getElementById('operand1').textContent = operand1;

    //Get operand 2 by ID from the HTML and put in an operand number 
    document.getElementById('operand2').textContent = operand2;

    // Get operator by ID from HTML and assign + as the operator
    document.getElementById('operator').textContent = '+';

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}