// Form data validation
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
		error.style.borderTop = "";
  }
}, false);
form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the email field is valid.
  if (!email.validity.valid) {
    
    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "Dit e-mailadres is niet geldig";
    error.className = "error active";
		error.style.borderTop = "2px solid #db0029";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);


// Confirm password with HTML5
// https://codepen.io/diegoleme/pen/surIK

var password = document.getElementById("password");
var confirm_password = document.getElementById("passwordConfirm");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

