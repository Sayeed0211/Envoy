const getStartedBtn = document.getElementById("getStartedBtn");
const emailInput = document.getElementById("emailInput");

getStartedBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (isValidEmail(emailInput.value)) {
        window.location.href = "/password.html";
    } else {
        alert("Please enter a valid email address.");
    }
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
