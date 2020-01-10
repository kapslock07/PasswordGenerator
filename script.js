// TO DO - CONFIRM ARRAYS, FIGURE OUT HOW TO LOOP VALIDATIONS, CREATE PASSWORD USING INPUTS, AND GIVE "generatePassword" value!!!!

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


// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
function generatePassword() {
  var characterNum = prompt("Choose how many characters will be in your password. There must be at least 8 and no more than 128.");

  if ((characterNum < 8) || (characterNum > 128)) {
    alert("You must enter a value between 8 and 128");
  }


  var characterTypes = prompt("Choose what type of characters will be in your password. Please choose either 'lowercase', 'uppercase', 'numeric', 'special characters', 'all', 'lu' for lowercase and uppercase, 'ln' for lowercase and numeric, 'ls' for lowercase and special characters, 'un' for uppercase and numeric, 'us' for uppercase and special characters, 'ns' for numeric and special characters.");
  if ((characterTypes != "lowercase") && (characterTypes !== "uppercase") && (characterTypes !== "numeric") && (characterTypes !== "special characters") && (characterTypes !== "all") && (characterTypes !== "lu") && (characterTypes !== "ln") && (characterTypes !== "ls") && (characterTypes !== "un") && (characterTypes !== "us") && (characterTypes !== "ns")) {
    alert("please enter one of the options only: 'lowercase', 'uppercase', 'numeric', special characters', 'all', 'lu', 'ln', 'ls', 'un', 'us', 'ns'.")
  }
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