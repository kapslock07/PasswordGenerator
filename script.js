// TO DO - CONFIRM ARRAYS, FIGURE OUT, CREATE PASSWORD USING INPUTS
// NEED TO DO -->CHANGE ARRAYS TO possibleChars & guaranteedChars
// guaranteedChars
// if()

//  Character Types
// hasLowercase = true;
// hasppercase = true
// hasNUm = false;
// hasSpecChar = true;

// // if(hasLowercase) {
//   possibleChars=allLowercase;
// }
// else if (hasUppercase) {
//   possibleChars=uppercase
// }
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var allChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var lowerAndUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowerAndNumChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerAndSpecialChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var uppercaseAndNumChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercaseAndSpecialChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var numAndSpecialChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var lowerUpperNumChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerUpperSpecialChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var lowerNumSpecialChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var upperNumSpecialChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];


var characterNum = ""
var possibleChar = ""
// var guaranteedChars = ""




// Write password to the #password input
function writePassword() {

  function generatePassword() {
    characterNum = prompt("Choose how many characters will be in your password. There must be at least 8 and no more than 128.");

    if ((characterNum < 8) || (characterNum > 128)) {
      alert("You must enter a value between 8 and 128");
      generatePassword();
    }


    var includeLowercase = confirm("Would you like to include lowercase characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
    var includeUppercase = confirm("Would you like to include uppercase characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
    var includeNum = confirm("Would you like to include numeric characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
    var includeSpecialChar = confirm("Would you like to include special characters in your password? Please select 'OK' for yes or 'Cancel' for no.");



    if ((includeLowercase) && (includeUppercase == false) && (includeNum == false) && (includeSpecialChar == false)) {
      possibleChar = lowercaseChar
    }

    else if ((includeUppercase) && (includeLowercase == false) && (includeNum == false) && (includeSpecialChar == false)) {
      possibleChar = uppercaseChar
    }

    else if ((includeNum) && (includeLowercase == false) && (includeUppercase == false) && (includeSpecialChar == false)) {
      possibleChar = numChar
    }

    else if ((includeSpecialChar) && (includeLowercase == false) && (includeUppercase == false) && (includeNum == false)) {
      possibleChar = specialChar
    }

    else if ((includeLowercase) && (includeUppercase) && (includeNum) && (includeSpecialChar)) {
      possibleChar = allChar
    }

    else if ((includeLowercase) && (includeUppercase) && (includeNum == false) && (includeSpecialChar == false)) {
      possibleChar = lowerAndUpperChar
    }

    else if ((includeLowercase) && (includeNum) && (includeUppercase == false) && (includeSpecialChar == false)) {
      possibleChar = lowerAndNumChar
    }

    else if ((includeLowercase) && (includeSpecialChar) && (includeUppercase == false) && (includeNum == false)) {
      possibleChar = lowerAndSpecialChar
    }

    else if ((includeUppercase) && (includeNum) && (includeLowercase == false) && (includeSpecialChar == false)) {
      possibleChar = uppercaseAndNumChar
    }

    else if ((includeUppercase) && (includeSpecialChar) && (includeLowercase == false) && (includeNum == false)) {
      possibleChar = uppercaseAndSpecialChar
    }

    else if ((includeNum) && (includeSpecialChar) && (includeLowercase == false) && (includeUppercase == false)) {
      possibleChar = numAndSpecialChar
    }

    else if ((includeLowercase) && (includeUppercase) && (includeNum) && (includeSpecialChar == false)) {
      possibleChar = lowerUpperNumChar
    }

    else if ((includeLowercase) && (includeUppercase) && (includeSpecialChar) && (includeNum == false)) {
      possibleChar = lowerUpperSpecialChar
    }

    else if ((includeLowercase) && (includeNum) && (includeSpecialChar) && (includeUppercase == false)) {
      possibleChar = lowerNumSpecialChar
    }

    else if ((includeUppercase) && (includeNum) && (includeSpecialChar) && (includeLowercase == false)) {
      possibleChar = upperNumSpecialChar
    }




    //var password = generatePassword();
    var password = buildString();
    // console.log(password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


  }
  generatePassword();

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

buildString();

function buildString() {

  var randString = ""
  for (var i = 0; i < characterNum; i++) {
    var randChar = possibleChar[Math.floor(Math.random() * possibleChar.length)];
    randString = randString.concat(randChar);
  }


  return randString;


}
