//Random password generator will create a password 8-128 characters following specific parameters 
var generateBtn = document.querySelector("#generate");
// Event listener to generate button.
generateBtn.addEventListener("click", writePassword);


//Function that generates random password.
function generatePassword() {
  var upper = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var lower  = ["q", "w", "e", "r", "t", "y", "i", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var characters= [];
  var result = "";
//Starting promts for password parameters.
  var cLength = (prompt("How many characters would you like your password to have?"));
//If input is outside of the character count, reprompt.
  while(cLength < 8 || cLength > 128) {
      alert("Password length must be between 8-128 characters.");
      var cLength = (prompt("How many characters would you like your password to have?"));
  } 
// Alert user what their choice was.
  alert("Your password will have " + cLength + " characters");
    var cUpper = confirm("Would you like to include uppercase letters? Click OK for Yes and Cancel for No.");
    var cLower = confirm("Would you like to include lowercase letters? Click OK for Yes and Cancel for No.");
    var cNumber = confirm("Would you like to include numbers? Click OK for Yes and Cancel for No.");    
    var cSpecial = confirm("Would you like to include special characters? Click OK for Yes and Cancel for No.");
//If no parameters were chosen, reconfirm valid parameters.
  while(cUpper === false && cLower === false && cNumber === false && cSpecial === false) {
    alert("No parameters were selected. You must have at least one parameter.");
      var cUpper = confirm("Would you like to include uppercase letters? Click OK for Yes and Cancel for No.");
      var cLower = confirm("Would you like to include lowercase letters? Click OK for Yes and Cancel for No.");
      var cNumber = confirm("Would you like to include numbers? Click OK for Yes and Cancel for No.");    
      var cSpecial = confirm("Would you like to include special characters? Click OK for Yes and Cancel for No.");
  } 
//Based on user choices push random character to password.
    if (cUpper) {
      characters.push(...upper)
    }
    if (cLower) {
      characters.push(...lower)
    }
    if (cNumber) {
      characters.push(...number)
    }
    if (cSpecial) {
      characters.push(...special)
    }
//Loop for random characters from the array.
  for (var i = 0; i < cLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
      result += characters[randomNumber]
  }
  return result;  
}
//Generates password for user.
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password; 
}