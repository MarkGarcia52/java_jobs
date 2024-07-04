// Returns all arrays, but we just want to pull 0, which is our span tag in this class
const resultText = document.getElementsByClassName("result-text")[0];

// Still saving the number after we hit clear in the calculator
let storedValue = null;
// We need to know what operator we pressed.
let operator = null;

// This is triggered when we are pressing numbers.
function onNumberPressed(number) {
    if (number === ".") {
        if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes("."))
        return;
    }

    // We take result text, and then we append it.
    resultText.innerHTML += number.toString()
}

function canOperate() {
    return resultText.innerHTML.length >= 1;
    
}

function operate(number) {
    let result;

    // This will perform the operations for us.
    switch (operator) {
        case "+":
            result = storedValue + number;
            break;

        case "-":
            result = storedValue - number;
            break;

        case "x":
            result = storedValue * number;
            break;

        case "/":
            result = storedValue / number;
            break;
    }

    // We took result, and put it inside of the window.
    resultText.innerHTML = result;
    // We clear these, we have to clear these in the window.
    storedValue = null;
    operator = null;
}

function onOperationPressed (operation) {
    // We are grabbing any number (in result window), and store it in a variable so we can use later in a function.
    const number = parseFloat(resultText.innerHTML);

    // If I cannot operate, then return, make sure there is something typed
    if (!canOperate()) return;

    // We are going to make sure if it's equal to an equal sign, and you have a number stored
    if (operation === "=" && storedValue !== null) {
        // Returning a function, we want to exit out of the function after returning.
        return operate(number);
    }
    else if (operation === "CE") {
        storedValue = null;
        operator = null;
    } else {
        operator = operation;
        storedValue = number;
    }

    // Doesn't matter which operation I select, I want to make the result window empty.
    resultText.innerHTML = "";
}
// We need to clear input when we use operators
