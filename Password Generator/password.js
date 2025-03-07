function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProperties() {
    // Looping through string IDS
    const ids = ["lowercase", "uppercase", "numbers", "special"]
    const properties = {};

    for (const id of ids) {
        // Looping through the document elements associated with id
        const element = document.getElementById(id);
        // Getting the value puttting inside of the object
        properties[id] = element.checked;
    }

    return properties;
}

function getChars(lowercase = true) {
    // If we pass lowercase we will start at 97
    // If we pass false we start at uppercase
    const start = lowercase ? 97 : 65;
    let chars = [];

    for(let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i));
    }

    return chars
}

function getNumbers() {
    const nums = [];

    for (let i = 0; i < 10; i++) {
        nums.push(i);
    }

    return nums;
}

const lowercaseChars = getChars(true);
const uppercaseChars = getChars(false);
const numbers = getNumbers();
const special  = ["!", "@", "#", "&", "(", ")", "^", "%", "$"];

function generatePassword() {
    const length = getPasswordLength();
    const properties = getPasswordProperties();

    const characters = [];
    // ... is going to push them in the character array.
    if (properties.lowercase) characters.push(...lowercaseChars);
    if (properties.uppercase) characters.push(...uppercaseChars);
    if(properties.numbers) characters.push(...numbers);
    if(properties.special) characters.push(...special);

    if(characters.length === 0) {
        return alert("You must select one set of characters.");
    } 

    let pwd = [];
    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * characters.length);
        const char = characters[randomIdx];
        pwd.push(char);
    }   
    const pwdString = pwd.join("");
    document.getElementById("password").innerHTML = "<p>" + pwdString + "</p>";
}