const questionOne = document.getElementsByName("options")

function questionOneAnswer () {
    let answer;

    for (i = 0; i < questionOne.length; i++) {
        if (questionOne[i].checked) {
            answer = questionOne[i].value
        }
    }

    if (answer !== undefined) {
        if (answer == "Toledo") {
        alert("You are correct!")
        } else {
            alert("You are incorrect...")
        }
    } else {
    alert("Please select an answer!")
    }
}