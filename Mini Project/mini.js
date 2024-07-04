/* 
---------------------------------------------
Project Number 1:
Simple counter
Three buttons on screen
Count up, count down, reset
These are all buttons
Count in the middle of the screen
---------------------------------------------
*/

function countUpPressed() {
    var numberSpan = document.getElementById("number");

    var number = parseInt(numberSpan.textContent);

    number += 1;

    numberSpan.textContent = number;
}

function countDownPressed() {
    var numberSpan = document.getElementById("number");

    var number = parseInt(numberSpan.textContent);

    number -= 1;

    numberSpan.textContent = number;
}

function resetPressed() {
    var numberSpan = document.getElementById("number")

    var number = parseInt(numberSpan.textContent);

    number = 0;

    numberSpan.textContent = number;
}