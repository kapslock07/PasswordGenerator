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

var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var allChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var lowerAndUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowerAndNumChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerAndSpecialChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var uppercaseAndNumChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercaseAndSpecialChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];
var numAndSpecialChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "*", "/", "?", "@", "~"];


var possibleChar = ""
var guaranteedChars

if (includeLowercase) {
  possibleChar = lowercaseChar
}




// Write password to the #password input
function writePassword() {

  function generatePassword() {
    var characterNum = prompt("Choose how many characters will be in your password. There must be at least 8 and no more than 128.");

    if ((characterNum < 8) || (characterNum > 128)) {
      alert("You must enter a value between 8 and 128");
      generatePassword();
    }

    var includeLowercase = confirm("Would you like to include lowercase characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
    var includeUppercase = confirm("Would you like to include uppercase characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
    var includeNum = confirm("Would you like to include numeric characters in your password? Please select 'OK' for yes or 'Cancel' for no.");
    var includeSpecialChar = confirm("Would you like to include special characters in your password? Please select 'OK' for yes or 'Cancel' for no.");


    // var characterTypes = prompt("Choose what type of characters will be in your password. Please choose either 'lowercase', 'uppercase', 'numeric', 'special characters', 'all', 'lu' for lowercase and uppercase, 'ln' for lowercase and numeric, 'ls' for lowercase and special characters, 'un' for uppercase and numeric, 'us' for uppercase and special characters, 'ns' for numeric and special characters.");
    // if ((characterTypes != "lowercase") && (characterTypes !== "uppercase") && (characterTypes !== "numeric") && (characterTypes !== "special characters") && (characterTypes !== "all") && (characterTypes !== "lu") && (characterTypes !== "ln") && (characterTypes !== "ls") && (characterTypes !== "un") && (characterTypes !== "us") && (characterTypes !== "ns")) {
    //   alert("please enter one of the options only: 'lowercase', 'uppercase', 'numeric', special characters', 'all', 'lu', 'ln', 'ls', 'un', 'us', 'ns'.")
    //   generatePassword();
    // }

    //var password = generatePassword();
    var password = buildString();
    console.log(password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


  }
  generatePassword();
  // else if (characterTypes === "lowercase") 
  // else if (characterTypes === "uppercase") 
  // else if (characterTypes === "numeric") 
  // else if (characterTypes === "special characters")
  // else if (characterTypes === "all")
  // else if (characterTypes === "lu") 
  // else if (characterTypes === "ln")
  // else if (characterTypes === "ls") 
  // else if (characterTypes === "un")
  // else if (characterTypes === "us") 
  // else if (characterTypes === "ns")

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

buildString();

function buildString() {

  var randString = ""
  for (var i = 0; i < 10; i++) {
    var randChar = allChar[Math.floor(Math.random() * allChar.length)];
    randString = randString.concat(randChar);
  }


  return randString;


}
