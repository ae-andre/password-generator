// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Step 1: Get Input -> asking question, get answers
  // function passwordPrompt() 
  //   {
    var passLength = prompt("Password length between 8 and 150 characters:");
    if (8 > passLength) {
      prompt("That's not enough characters! Please enter a password length between 8 and 150 characters:")
    } else if (passLength > 150) {
      prompt("That's too many characters! Please enter a password length between 8 and 150 characters:")
    }
  // }
    // if (8 < passLength && passLength < 150) { 
  var includeLower = confirm("Include lowercase letters?");
  var includeUpper = confirm("Include uppercase letters?");
  var includeNumber = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");
  //  } else {passwordPrompt}


  // Step 2: Analyze the answers -> depending on their answers, do the necessary preparation
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


  // Step 3: Generate the output -> After preparation, generate the password
  var password = ""

  for(i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * container.length );
    var randomChar = container[randomIndex];

    password = password + randomChar
  }


  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
