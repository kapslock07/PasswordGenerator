// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var characterNum = prompt("Choose how many characters will be in your password. Ther must be at least 8 and no more than 128.");

  alert("You have chosen " + characterNum + " characters");


  var characterTypes = prompt("Choose what type of characters will be in your password. Please choose either 'lowercase', 'uppercase', 'numeric', 'special characters', 'all', 'lu' for lowercase and uppercase, 'ln' for lowercase and numeric, 'ls' for lowercase and special characters, 'un' for uppercase and numeric, 'us' for uppercase and special characters, 'ns' for numeric and special characters.");
  // var lu = "lowercase and uppercase";
  // var ln = "lowercase and numeric";
  // var ls = "lowercase and special characters";
  // var un = "uppercase and numeric";
  // var us = "uppercase and special characters";
  // var ns = "numeric and special characters";

  alert("You have chosen " + characterTypes);

  // THIS WAS PROVIDED
  // function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);