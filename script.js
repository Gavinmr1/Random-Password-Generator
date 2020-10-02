
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var upper = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var lower  = ["q", "w", "e", "r", "t", "y", "i", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var characters= [];
  var result = "";

  var cLength = (prompt("How many characters would you like your password to have?"));

  while(cLength < 8 || cLength > 128) {
      alert("Password length must be between 8-128 characters.");
      var cLength = (prompt("How many characters would you like your password to have?"));
  } 

  alert("Your password will have " + cLength + " characters");
    var cUpper = confirm("Would you like to include uppercase letters? Click OK for Yes and Cancel for No.");
    var cLower = confirm("Would you like to include lowercase letters? Click OK for Yes and Cancel for No.");
    var cNumber = confirm("Would you like to include numbers? Click OK for Yes and Cancel for No.");    
    var cSpecial = confirm("Would you like to include special characters? Click OK for Yes and Cancel for No.");

  while(cUpper === false && cLower === false && cNumber === false && cSpecial === false) {
    alert("No parameters were selected. You must have at least one parameter.");
      var cUpper = confirm("Would you like to include uppercase letters? Click OK for Yes and Cancel for No.");
      var cLower = confirm("Would you like to include lowercase letters? Click OK for Yes and Cancel for No.");
      var cNumber = confirm("Would you like to include numbers? Click OK for Yes and Cancel for No.");    
      var cSpecial = confirm("Would you like to include special characters? Click OK for Yes and Cancel for No.");
  } 

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

  for (var i = 0; i < cLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
      result += characters[randomNumber]
  }
  return result;  
}

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password; 
}