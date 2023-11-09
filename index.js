function checkEmail() {
  // Get the value of the email input field
  var emailInput = document.getElementById("emailInput").value;

  // Check if the email is a Gmail address (you can customize this check)
  if (emailInput.endsWith("@gmail.com")) {
    // Redirect the user to the login page if not already registered
    window.location.href = "/login"; // Replace with the actual login page URL
  } else {
    // Redirect the user to the signup page for non-Gmail addresses
    window.location.href = "."; // Replace with the actual signup page URL
  }
}

