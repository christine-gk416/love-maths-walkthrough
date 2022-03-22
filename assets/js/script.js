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

                // Call checkAnswer funtion
                checkAnswer();
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
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);

    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}! Aborting!`;
    }

}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    // Get string from answer-box ID, use .value to get it from the input element, and turn it into an interger
    let userAnswer = parseInt(document.getElementById('answer-box').value);

    // Set variable equal to caculateCorrectAnswer function array 
    let calculatedAnswer = calculateCorrectAnswer();

    // Check if the answer in the input box is equal to the answer calcualated 
    // in calculatedAnswer function from the first part of the array [0]
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey you got it right!')
        incrementScore()
    } else {
        alert(`Awww you answered ${userAnswer}! The correct answer is ${calculatedAnswer[0]}`)
        incrementWrongAnswer()
    }
    // Call runGame function and pass it the second array value in the calculatedAnswer variable
    runGame(calculatedAnswer[1])
}


/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // parseInt gets a string from the DOM and turns it into a number (innerText gets a string)
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    // If the operator is + return variables operand1, operand2; tell the game to keep running addition version
    if (operator === '+') {
        return [operand1 + operand2, 'addition']
    } else if (operator === 'x') {

        // return the operand1 multipled by operand 2 and choose multiple as the game type
        return [operand1 * operand2, 'multiply']
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */

function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
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

function displayMultiplyQuestion(operand1, operand2) {
    //Get operand 1 by ID from the HTML and put in an operand number 
    document.getElementById('operand1').textContent = operand1;

    //Get operand 2 by ID from the HTML and put in an operand number 
    document.getElementById('operand2').textContent = operand2;

    // Get operator by ID from HTML and assign x as the operator
    document.getElementById('operator').textContent = 'x';
}