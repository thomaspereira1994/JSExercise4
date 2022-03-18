function controllerFunction() {
    let userInput = document.getElementById("userInput");
    
    let reversedInput = reverseInput(userInput);
    let isPalindrome = checkPalindrome(userInput, reversedInput);
    
    displayResult(isPalindrome);
}

function reverseInput(userInput) {
    let reversedInput = [];

    for (let index = userInput.length - 1; index >= 0; index--) {
        reversedInput += userInput[index];
    }

    alert(reversedInput.value);
    return reversedInput;
}

function checkPalindrome(userInput, reversedInput) {
    if (userInput == reversedInput) {
        return true;
    } else {
        return false;
    }
}

function displayResult(isPalindrome) {
    document.getElementById("resultDisplayArea").value = isPalindrome;
}