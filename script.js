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
var password = ""

// var guaranteedChar = ""




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
      for (var i = 0; i < characterNum; i++)
        password = password + lowercaseChar[Math.floor(Math.random() * (lowercaseChar.length - 1))];
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
      console.log(lowercaseChar)
      console.log(uppercaseChar)
      console.log(numChar)
      console.log(specialChar)
      console.log(allChar)

      for (var i = 0; i < characterNum; i++) {
        if (i == 0) {
          password = lowercaseChar[Math.floor(Math.random() * (lowercaseChar.length - 1))];
        } else if (i == 1) {
          password = password + uppercaseChar[Math.floor(Math.random() * (uppercaseChar.length - 1))];
        }
        else if (i == 2) {
          password = password + numChar[Math.floor(Math.random() * (numChar.length - 1))];
        }
        else if (i == 3) {
          password = password + specialChar[Math.floor(Math.random() * (specialChar.length - 1))];
        }
        else {
          password = password + allChar[Math.floor(Math.random() * (allChar.length - 1))];
        }
      }

      console.log(password)
    }
    else if ((includeLowercase) && (includeUppercase) && (includeNum == false) && (includeSpecialChar == false)) {
      for (var i = 0; i < characterNum; i++) {
        if (i == 0) {
          password = lowercaseChar[Math.floor(Math.random() * (lowercaseChar.length - 1))];
        } else if (i == 1) {
          password = password + uppercaseChar[Math.floor(Math.random() * (uppercaseChar.length - 1))];
        }
        else {
          password = password + lowerAndUpperChar[Math.floor(Math.random() * (lowerAndUpperChar.length - 1))];
        }
      }
    }

    else if ((includeLowercase) && (includeNum) && (includeUppercase == false) && (includeSpecialChar == false)) {
      for (var i = 0; i < characterNum; i++) {
        if (i == 0) {
          password = lowercaseChar[Math.floor(Math.random() * (lowercaseChar.length - 1))];
        } else if (i == 1) {
          password = password + numChar[Math.floor(Math.random() * (numChar.length - 1))];
        }
        else {
          password = password + lowerAndNumChar[Math.floor(Math.random() * (lowerAndNumChar.length - 1))];
        }
      }
    }

    else if ((includeLowercase) && (includeSpecialChar) && (includeUppercase == false) && (includeNum == false)) {
      for (var i = 0; i < characterNum; i++) {
        if (i == 0) {
          password = lowercaseChar[Math.floor(Math.random() * (lowercaseChar.length - 1))];
        } else if (i == 1) {
          password = password + specialChar[Math.floor(Math.random() * (specialChar.length - 1))];
        }
        else {
          password = password + lowerAndSpecialChar[Math.floor(Math.random() * (lowerAndSpecialChar.length - 1))];
        }
      }
    }

    else if ((includeUppercase) && (includeNum) && (includeLowercase == false) && (includeSpecialChar == false)) {
      for (var i = 0; i < characterNum; i++) {
        if (i == 0) {
          password = uppercaseChar[Math.floor(Math.random() * (uppercaseChar.length - 1))];
        } else if (i == 1) {
          password = password + numChar[Math.floor(Math.random() * (numChar.length - 1))];
        }
        else {
          password = password + uppercaseAndNumChar[Math.floor(Math.random() * (uppercaseAndNumChar.length - 1))];
        }
      }
    }

    else if ((includeUppercase) && (includeSpecialChar) && (includeLowercase == false) && (includeNum == false)) {
      for (var i = 0; i < characterNum; i++) {
        if (i == 0) {
          password = uppercaseChar[Math.floor(Math.random() * (uppercaseChar.length - 1))];
        } else if (i == 1) {
          password = password + specialChar[Math.floor(Math.random() * (specialChar.length - 1))];
        }
        else {
          password = password + uppercaseAndSpecialChar[Math.floor(Math.random() * (uppercaseAndSpecialChar.length - 1))];
        }
      }
    }

    else if ((includeNum) && (includeSpecialChar) && (includeLowercase == false) && (includeUppercase == false)) {
      for (var i = 0; i < characterNum; i++) {
        if (i == 0) {
          password = numChar[Math.floor(Math.random() * (numChar.length - 1))];
        } else if (i == 1) {
          password = password + specialChar[Math.floor(Math.random() * (specialChar.length - 1))];
        }
        else {
          password = password + numAndSpecialChar[Math.floor(Math.random() * (numAndSpecialChar.length - 1))];
        }
      }
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
    //var password = buildString();
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
// if(possibleChar = upperandlowerchar then replace index 0 value with lower and 1 with upper)