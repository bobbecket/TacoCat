// Controller
//
// Get the string from the page
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnObj = checkForPalindrome(userString);

    displayMessage(returnObj);
}

// Logic
//
// Check if string is a palindrome
function checkForPalindrome(userString) {

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;
}

// View
//
// Display the palindrome status and reversed string to user
function displayMessage(returnObj) {

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}