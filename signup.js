document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("Email");
    const passwordInput = document.getElementById("pass");
    const button = document.getElementById("button");

    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate email
        const emailValue = emailInput.value;
        if (!isValidEmail(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password
        const passwordValue = passwordInput.value;
        if (!isValidPassword(passwordValue)) {
            alert("Password must be at least 8 characters and contain at least one capital letter, one lower case letter, and one number.");
            return;
        }

        // If validation passes, redirect to hiring.html
        window.location.href = "./hiring.html"; // Replace with the actual path to your hiring.html file
    });

    // Function to validate email using a simple regular expression
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate the password
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
    }
});
