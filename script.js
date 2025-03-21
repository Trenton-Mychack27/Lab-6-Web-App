document.getElementById("sienaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});

function validateEmail(email) {
    if (!email) {
        return "Please enter your Siena College email.";
    }
    if (!email.endsWith("@siena.edu")) {
        return "Invalid email. Use your Siena College email ending in '@siena.edu'.";
    }
    return ""; // No errors => Return empty string.
}

function validateSienaID(sienaID) {
    // Your code here: return an error message if the input is empty or not a number
    if (!sienaID) {
        return "Please enter your Siena ID.";
    }
    if (isNaN(sienaID)) {
        return "Invalid Siena ID. Use numbers only.";
    }
    if(sienaID.length != 9) {
        return "Invalid Siena ID. Must be 9 digits long.";
    }
    return ""; // No errors => Return empty string.
}

function validateForm() {
    const emailInput = document.getElementById("emailAddress");
    const sienaIDInput = document.getElementById("sienaID");
    const emailError = document.getElementById("emailError");
    const sienaIDError = document.getElementById("sienaIDError");

    // Clear previous error messages
    emailError.textContent = "";
    sienaIDError.textContent = "";

    // Run validation checks
    const emailValidationMessage = validateEmail(emailInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (emailValidationMessage) {
        emailError.textContent = emailValidationMessage;
        isValid = false;
    }
    // << ADD CODE HERE >>
    // Do something similar for SienaID error handling.
    const sienaIDValidationMessage = validateSienaID(sienaIDInput.value.trim());
    if (sienaIDValidationMessage) {
        sienaIDError.textContent = sienaIDValidationMessage;
        isValid = false;
    }

    // If both are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        submitRequest();
    }
}

