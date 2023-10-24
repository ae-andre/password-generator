// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // prompt to get password length from user
  var userInput = prompt("Password length between 8 and 128 characters:")
  var passLength = Number(userInput) 
  console.log(passLength)
  while (8 > passLength || passLength > 128 || passLength == NaN) {
    if (8 > passLength && passLength == NaN) {
      passLength = prompt("Invalid input! Please enter a password length between 8 and 128 characters:")
    } else if (passLength > 128 && passLength == NaN) {
      passLength = prompt("Invalid input! Please enter a password length between 8 and 128 characters:")
    }
  }
  
  // prompts for types of characters to include in password
  var includeLower = confirm("Include lowercase letters?")
  var includeUpper = confirm("Include uppercase letters?")
  var includeNumber = confirm("Include numbers?")
  var includeSpecial = confirm("Include special characters?")

  // loop to ensure user selects at least one type of character
  while (!includeLower && !includeUpper && !includeNumber && !includeSpecial) {
    alert("Must select at least one character criteria! Try again!")
    includeLower = confirm("Include lowercase letters?")
    includeUpper = confirm("Include uppercase letters?")
    includeNumber = confirm("Include numbers?")
    includeSpecial = confirm("Include special characters?")
  }

  // container where all possible characters will be randomly chosen from 
  var container = "";

  if(includeLower) {
    container = container + "abcdefghijklmnopqrstuvwxyz"
  }

  if(includeUpper) {
    container = container + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if(includeNumber) {
    container = container + "123456789"
  }

  if(includeSpecial) {
    container = container + "!@#$%^&*()_+-=`~;:'[]{},.<>/?"
  }

  
  // randomly selecting characters from user's selected character types
  var password = ""

  for(i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * container.length );
    var randomChar = container[randomIndex];

    password = password + randomChar
  }

  return password;
}

// display password to user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
