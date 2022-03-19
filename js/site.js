function getValue(){
    let userInput = document.getElementById("userInput").value;

    let isPalindrome = checkForPalindrome(userInput);

    displayMessage(isPalindrome);
}

function checkForPalindrome(userInput){
    userInput = userInput.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    userInput = userInput.replace(regex,"");

    let revInput = [];
    let isPalindrome = {};

    for (let index = userInput.length -1; index >= 0; index--) {
        revInput += userInput[index];
    }

    if(revInput == userInput){
        isPalindrome.msg = "Text entered is a palindrome";
    }
    else{
        isPalindrome.msg = "Text entered is not a palindrome";
    }

    isPalindrome.reversed = revInput;

    return isPalindrome;
}

function displayMessage(isPalindrome){
    document.getElementById("resultDisplayArea").innerHTML = isPalindrome.msg;
}